import React, { useEffect, useState } from 'react';
import { usersStatistics } from '../../api/users';
import GraphChart from './components/GraphChart'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec'];

export const SamuelFrost = ({ selectedUser }) => {
		const [userStatistics, setUserStatistics] = useState([]);
		const [userClicks, setUserClicks] = useState([]);
		const [userPageViews, setUserPageViews] = useState([]);
		const [userStatisticsData, setUserStatisticsData] = useState([]);

		useEffect(() => {
				usersStatistics(Number(selectedUser))
						.then(statistic => {setUserStatistics(statistic)});
		}, []);
		
		useEffect(() => {
				const monthDate = userStatistics.map(({ date }) => `
												${months[new Date (date).getMonth()]} ${new Date (date).getDate()}
												`)
				
				if (userStatistics.length > 0) {
						userStatistics.forEach(userStatistic => {
								setUserClicks(prevState => [...prevState, Number(userStatistic.clicks)]);
								setUserPageViews(prevState => [...prevState, Number(userStatistic['page_views'])]);
								
								setUserStatisticsData(monthDate)
						});
				}
				
		}, [userStatistics])

		return (
				<>
						{userStatistics.length > 0 && (
								<>
										<div>Clicks</div>
										<GraphChart
												userStatisticsData={userStatisticsData}
												userStatistic={userClicks}
										/>

										<div>Views</div>
										<GraphChart
												userStatisticsData={userStatisticsData}
												userStatistic={userPageViews}
										/>
								</>
						)}
				</>
		);
}

