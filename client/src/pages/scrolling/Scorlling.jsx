import React, { useEffect, useState } from 'react';
import './scrolling.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Items from '../../components/Items/Items';

const Scorlling = () => {
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [nextPage, setNextPage] = useState(2);

	useEffect(() => {
		const getComments = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`,
			);
			setItems(res.data);
		};

		getComments();
	}, []);

	const fetchComments = async () => {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=10`,
		);

		return res.data;
	};

	const fetchData = async () => {
		const comments = await fetchComments();

		setItems([...items, ...comments]);

		if (comments.length === 0) setHasMore(false);

		setNextPage(nextPage + 1);
	};

	return (
		<div className='scrolling'>
			<InfiniteScroll
				dataLength={items.length}
				next={fetchData}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<Items items={items} type='scrolling' />
			</InfiniteScroll>
		</div>
	);
};

export default Scorlling;
