import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import './search.css';

const Search = () => {
	const [keyword, setKeyword] = useState('');

	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(`http://localhost:5000?keyword=${keyword}`);
			setUsers(res.data);
		};

		// going to fetch if keyword count is 3
		if (keyword.length === 0 || keyword.length > 2) fetchUsers();
	}, [keyword]);

	return (
		<div className='search'>
			<input
				type='text'
				placeholder='Search...'
				className='searchInput'
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<Table users={users} />
		</div>
	);
};

export default Search;
