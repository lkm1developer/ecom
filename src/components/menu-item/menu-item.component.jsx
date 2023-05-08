import React from 'react';
import { useNavigate } from 'react-router';

// import './menu-item.styles.scss';

const MenuItem = ({item}) => {
	const {title, imageUrl, size, linkUrl}=item
	const navigate =useNavigate()

	const handleClick =()=>{
		navigate(linkUrl)
	}

	return(
	<div className={`${size} menu-item`} onClick={handleClick}>
		<div className="background-image"  style={{
			backgroundImage: `url(${imageUrl})`
		}} ></div>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
)}

export default MenuItem;