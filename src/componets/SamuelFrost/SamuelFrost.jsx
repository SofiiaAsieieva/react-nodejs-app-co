import React, { useEffect, useState } from 'react';
import { usersStatistics } from '../../api/users';
import GraphChart from './components/GraphChart'

export const SamuelFrost = ({ selectedUser }) => {
		const [userStatistics, setUserStatistics] = useState([]);
		
		useEffect(() => {
				usersStatistics(selectedUser)
						.then(user => setUserStatistics(user));

				console.log(userStatistics)
		}, []);

		return (
				<>
					<GraphChart />
						
						{userStatistics.length > 0 && (
								<div>
										{userStatistics.map(userStatistic => (
												<div>
														{ userStatistic.clicks }
												</div>
										))}
								</div>
						)}
				</>
		);
}

