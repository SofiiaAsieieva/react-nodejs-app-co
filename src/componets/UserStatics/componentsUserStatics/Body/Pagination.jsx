import React, { useEffect, useState } from 'react'
import Pagination from '@bit/react-bootstrap.react-bootstrap.pagination'
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import row from '../../../../images/row.png';
import { getAllUsers } from '../../../../api/users';

//react memo

export const PaginationBasic = ({ activePage, setActivePage, limit }) => {
		let [pages, setPages] = useState(1);
		const [totalCount, setTotalCount] = useState(0);
		const totalPages = totalCount / limit;
		
		useEffect(() => {
				getAllUsers()
						.then(req => setTotalCount(req.length))
		}, [])
		
		let items = [];
		for (let number = pages; number <= pages + 4; number++) {
				items.push(
						<Pagination.Item
								key={number}
								active={number === activePage}
								onClick={() => {
										if (number <= pages + 4) {
												setPages(prevState => prevState + 1);
										}
										
										setActivePage(number)
								}}
						>
								{number}
						</Pagination.Item>,
				);
		}
		
		return (
				<>
						{pages > 1 && (
								<button
										onClick={() => {
												setPages(prevState => prevState - 1)
												setActivePage(pages)
										}}
								>
										<img src={row} alt="row"/>
								</button>
						)}
						
						<span>
								<ReactBootstrapStyle/>
								<Pagination>{items}</Pagination>
						</span>
						
						<button
							onClick={() => {
									setPages(prevState => prevState + 1)
									setActivePage(pages + 1)
							}}
						>
								<img src={row} alt="row"/>
						</button>
				</>
		);
}

