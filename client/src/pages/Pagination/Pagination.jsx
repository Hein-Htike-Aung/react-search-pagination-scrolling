import React from 'react';
import './pagination.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Items from '../../components/Items/Items';

const Pagination = () => {
	const [items, setItems] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [limit, setLimit] = useState(10);
	const [numberOfPages, setNumberOfPages] = useState(0);

	const handlePageClick = (page) => {
		setPageNumber(page.selected);
	};

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/comments?_page=${
					pageNumber + 1
				}&_limit=${limit}`,
			);

			const totalRecords = res.headers['x-total-count'];

			setNumberOfPages(Math.round(totalRecords / limit));

			setItems(res.data);
		};

		fetchData();
	}, [limit, pageNumber]);

	return (
		<div className='pagination'>
			<div className='paginatorWrapper'>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					pageCount={numberOfPages}
					marginPagesDisplayed={3}
					pageRangeDisplayed={4}
					onPageChange={handlePageClick}
					containerClassName={'paginator'}
					pageClassName={'page'}
					pageLinkClassName={'pageLink'}
					previousClassName={'prevBtn'}
					nextClassName={'nextBtn'}
					breakLinkClassName={'pageBreak'}
					activeClassName={'pageActive'}
				/>

				<select onChange={(e) => setLimit(e.currentTarget.value)}>
					<option value='10'>10</option>
					<option value='20'>20</option>
					<option value='30'>30</option>
				</select>
			</div>

			<Items items={items} type='pagination' />
		</div>
	);
};

export default Pagination;
