import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../../api/users';
import styles from './body.module.scss';
import { PaginationBasic } from "./Pagination";
import { UserTable } from "./UserTable";

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
										<>
												<UserTable
														users={users}
														setSelectedUser={setSelectedUser}
												/>
												
												<PaginationBasic
														totalCount={users.length}
														activePage={page}
														setActivePage={setPage}
														limit={limit}
												/>
										</>
								)}
						</div>
				</section>
		);
}
