import React from 'react';
import './table.css';

const Table = ({ users }) => {
	return (
		<table className='table'>
			<thead>
				<tr className='header'>
					<th>FirstName</th>
					<th>LastName</th>
					<th>Email</th>
					<th>Gender</th>
				</tr>
			</thead>
			<tbody>
				{users.map((u) => (
					<tr key={u.id}>
						<td>{u.first_name}</td>
						<td>{u.last_name}</td>
						<td>{u.email}</td>
						<td>{u.gender}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
