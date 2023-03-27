import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

import { categories } from '../../data';

const Directory = () => (
	<div className="directory-menu">
		{
			categories.map(({ id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)
		}
	</div>
);
export default Directory;