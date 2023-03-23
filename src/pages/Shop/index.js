import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../Collection';

const ShopPage = ({ match }) => {
	console.log({match})
	return (
		<div>
			<Route exact path="shop" component={CollectionsOverview} />
			<Route path='shop/:collectionId' component={CollectionPage}></Route>
		</div>
	)
}

export default ShopPage;