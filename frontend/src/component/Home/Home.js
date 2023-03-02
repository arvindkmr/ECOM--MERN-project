import React, { Fragment, useEffect, useState } from 'react';
import './Home.css';
import ProductCard from './ProductCart';
import MetaData from '../layout/metaData.js';
import { getProduct } from '../../actions/productActions';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
// import { useAlert } from "react-alert";

const Home = () => {
  //   const alert = useAlert();
    const dispatch = useDispatch();
  //   const { loading, error, products } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
    useEffect(() => {
      // if (error) {
      //   alert.error(error);
      //   dispatch(clearErrors());
      // }
      dispatch(getProduct());
    }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Arvind Baloda- Ecom - MERN stack" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <ProductCard />
            {/* {products &&
              products.map((product) => (
              ))} */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
