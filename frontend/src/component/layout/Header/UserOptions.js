import React, { Fragment, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { loop } from '@cloudinary/url-gen/actions/effect';

const UserOptions = ({ user }) => {
  // const { cartItems } = useSelector((state) => state.cart);
  

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = [
    { name: 'logout', func: logoutUser, role: user.role },
    { name: 'profile', func: profile, role: user.role },
  ];
  function logoutUser() {
    dispatch(logout());
  }
  function profile() {
    // dispatch(logout())
  }
  return (
    <Fragment>
      <div>
        {item.map((item) => {
          return (
            <div>
              <button onClick={item.func}>{item.name}</button>
            </div>
          );
        })}
        {user.role === 'admin' ? <button>admin page</button> : null}
      </div>
    </Fragment>
  );
};

export default UserOptions;
