import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Pagination from './pages/Pagination/Pagination';
import Scorlling from './pages/scrolling/Scorlling';
import Search from './pages/Search/Search';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				{/* Using API Search query */}
				<Route path='/' element={<Search />} />
				{/* Pagination  */}
				<Route path='/pagination' element={<Pagination />} />
				{/* Scrolling */}
				<Route path='/scrolling' element={<Scorlling />} />
			</Routes>
		</div>
	);
};

export default App;
