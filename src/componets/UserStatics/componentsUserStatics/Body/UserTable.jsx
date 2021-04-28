import React from 'react';
import styles from "./body.module.scss";
import { Link } from "react-router-dom";

export const UserTable = ({ users, setSelectedUser }) => {
		const onClickSelectedUser = (userId) => {
				setSelectedUser(userId)
		}
		
		return (
				<table>
						<tr className={styles["body__tablet-cell"]}>
								<th className={`${styles["body__tablet-name"]} ${styles["body__tablet-name--first"]}`}>
										id
								</th>
								<th className={styles["body__tablet-name"]}>First name</th>
								<th className={styles["body__tablet-name"]}>Last name</th>
								<th className={styles["body__tablet-name"]}>Email</th>
								<th className={styles["body__tablet-name"]}>Gender</th>
								<th className={styles["body__tablet-name"]}>IP address</th>
								<th className={styles["body__tablet-name"]}>Total clicks</th>
								<th className={`${styles["body__tablet-name"]} ${styles["body__tablet-name--last"]}`}>
										Total page views
								</th>
						</tr>
						{users.map(user => (
								<tr
										className={styles["body__tablet-cell"]}
										id={user['user_id']}
										key={user['user_id']}
								>
										<td>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['user_id']}
												</Link>
										</td>
										<td className={styles["body__tablet-body"]}>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['first_name']}
												</Link>
										</td>
										<td className={styles["body__tablet-body"]}>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['last_name']}
												</Link>
										</td>
										<td className={styles["body__tablet-body"]}>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user.email}
												</Link>
										</td>
										<td>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user.gender}
												</Link>
										</td>
										<td>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['ip_address']}
												</Link>
										</td>
										<td>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['all_clicks']}
												</Link>
										</td>
										<td>
												<Link
														to="/SamuelFrost"
														onClick={() => {
																onClickSelectedUser(user['user_id'])
														}}
												>
														{user['all_page_views']}
												</Link>
										</td>
								</tr>
						))}
				</table>
		)
}
