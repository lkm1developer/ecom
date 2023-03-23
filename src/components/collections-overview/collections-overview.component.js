import React from 'react';
import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { useSelector } from 'react-redux';


const CollectionsOverview = () => {
  const { collections } = useSelector((store) => store.shop)
  return (
    <div className="collections-overview">
      {
        Object.keys(collections).map((id) => <CollectionPreview key={id} {...collections[id]} />)
      }
    </div>
  )
};

export default CollectionsOverview