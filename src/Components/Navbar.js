import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

	return (
		<div>
			<Link to="/"> Home </Link>
			<Link to="about"> About </Link>
			<Link to="product"> Product </Link>
		</div>
	);
}

