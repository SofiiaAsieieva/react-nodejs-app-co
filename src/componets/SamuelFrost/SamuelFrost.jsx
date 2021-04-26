import React, { useEffect, useState } from 'react';
import { usersStatistics } from '../../api/users';

export const SamuelFrost = ({ selectedUser }) => {
		const [userStatistics, setUserStatistics] = useState([]);
		
		useEffect(() => {
				usersStatistics(selectedUser)
						.then(user => setUserStatistics(user));
		}, []);
		
		
		console.log(userStatistics)
		
		return (
			<div>
					{selectedUser}
			</div>
	)
}
