import React, { Fragment, useEffect } from 'react';
import './myOrders.css';

import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, myOrders } from '../../actions/orderAction';
import Loader from '../layout/Loader/Loader';
// import { Link } from "react-router-dom";
import MetaData from '../layout/MetaData';

const MyOrders = () => {
  const dispatch = useDispatch();

  // const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          
          <p id="myOrdersHeading">{user.name}'s Orders</p>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
