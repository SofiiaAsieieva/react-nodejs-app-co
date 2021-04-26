const BASE_USERS_URL = 'http://localhost:8000';
//const usersUrl = `http://localhost:8000/users?page=1&limit=16`;

export const getUsers = (page, quantity) => {
		return fetch(`${BASE_USERS_URL}/usersStatisticsAndUsers?page=${page}&limit=${quantity}`)
				.then(req => req.json())
				.then(req => req.rows);
}

export const getAllUsers = () => {
		return fetch(`${BASE_USERS_URL}/allUsers`)
				.then(req => req.json())
				.then(req => req.rows);
}

export const usersStatistics = (id) => {
		return fetch(`${BASE_USERS_URL}/usersStatistics`)
				.then(req => req.json())
				.then(req => [...req.rows.filter(user => Number(user['user_id']) === id)])
}
