import React from 'react';
import './sidebar.css';
import logo from '../../images/1.jpg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
           Dashboard
        </p>
      </Link>
      <Link>
        <div>
          <div nodeId="1" label="Products">
            <Link to="/admin/products">
              <div nodeId="2" label="All" />
            </Link>

            <Link to="/admin/product">
              <div nodeId="3" label="Create" />
            </Link>
          </div>
        </div>
      </Link>
      <Link to="/admin/orders">
        <p>Orders</p>
      </Link>
      <Link to="/admin/users">
        <p>Users</p>
      </Link>
      <Link to="/admin/reviews">
        <p>Reviews</p>
      </Link>
    </div>
  );
};

export default Sidebar;
