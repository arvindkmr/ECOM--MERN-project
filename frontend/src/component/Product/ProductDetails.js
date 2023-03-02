import React, { Fragment, useEffect, useState } from 'react';
import './ProductDetails.css';
import { getProductDetails } from '../../actions/productActions.js';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  console.log(product)

  return (
    <div>
      <div>{product && product.name}</div>
      ProductDetails
    </div>
  );
};

export default ProductDetails;
