import React from 'react';
import './item.css';

const Items = ({ items, type }) => {
	console.log(type);
	return (
		<div
			className={
				type === 'scrolling' ? ' wrapper scrollingWrapper' : ' wrapper'
			}
		>
			{items.map((item) => (
				<div key={item.id} className='card'>
					<div className='cardId'>{item.id}</div>
					<div className='cardTitle'>{item.email}</div>
					<div className='cardBody'>
						<span>{item.body}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Items;
