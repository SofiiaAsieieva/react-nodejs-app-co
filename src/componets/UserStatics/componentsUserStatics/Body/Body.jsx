import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../../api/users';
import styles from './body.module.scss';
import { PaginationBasic } from "./Pagination";

export const Body = ({ setSelectedUser }) => {
		const [users, setUsers] = useState([]);
		const [page, setPage] = useState(1);
		const [limit] = useState(50)
		
		useEffect((() => {
			getUsers(page, limit)
					.then(req => setUsers(req));
		}), []);
		
		useEffect((() => {
				getUsers(page, limit)
						.then(req => setUsers(req));
		}), [page]);
		
		document.addEventListener('click', e => {
				if (e.target.closest('tr')) {
						setSelectedUser(e.target.closest('tr').id)
				}
		})
		
		return (
				<section className={styles.body}>
						<Link className={`${styles.body__link} ${styles["body__link--active"]}`} to="/">
								Main page
						</Link>
						
						<Link className={styles.body__link} to="/UserStatics">
								User Statics
						</Link>
						
						<div className={styles["body__tablet"]}>
								<h2 className={styles.body__name}>
										Users statistics
								</h2>
								
								{users.length > 0 && (
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
																		>
																				{user['user_id']}
																		</Link>
																</td>
																<td className={styles["body__tablet-body"]}>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user['first_name']}
																		</Link>
																</td>
																<td className={styles["body__tablet-body"]}>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user['last_name']}
																		</Link>
																</td>
																<td className={styles["body__tablet-body"]}>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user.email}
																		</Link>
																</td>
																<td>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user.gender}
																		</Link>
																</td>
																<td>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user['ip_address']}
																		</Link>
																</td>
																<td>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user['all_clicks']}
																		</Link>
																</td>
																<td>
																		<Link
																				to="/SamuelFrost"
																		>
																				{user['all_page_views']}
																		</Link>
																</td>
														</tr>
												))}
										</table>
								)}
						</div>
						
						<PaginationBasic
							totalCount={users.length}
							activePage={page}
							setActivePage={setPage}
							limit={limit}
						/>
				</section>
		);
}
