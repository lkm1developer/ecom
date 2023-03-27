import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const sections= [
		{
		  title: 'hats',
		  imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
		  id: 1,
		  linkUrl: 'shop/hats'
		},
		{
		  title: 'jackets',
		  imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
		  id: 2,
		  linkUrl: 'shop/jackets'
		},
		{
		  title: 'sneakers',
		  imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
		  id: 3,
		  linkUrl: 'shop/sneakers'
		},
		{
		  title: 'womens',
		  imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
		  size: 'large',
		  id: 4,
		  linkUrl: 'shop/womens'
		},
		{
		  title: 'mens',
		  imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
		  size: 'large',
		  id: 5,
		  linkUrl: 'shop/mens'
		}
	  ]

const Directory = () => (
	<div className="directory-menu">
		{
			sections.map(({ id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)
		}
	</div>
);
export default Directory;