import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div>
				<Link to={'/'} className='link'>
					<span className='navLink'>Search Filter</span>
				</Link>
				<Link to={'/pagination'} className='link'>
					<span className='navLink'>Pagination</span>
				</Link>
				<Link to={'/scrolling'} className='link'>
					<span className='navLink'>Scrolling</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
