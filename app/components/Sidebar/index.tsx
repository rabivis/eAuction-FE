import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/LoginPage/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, NavLink } from 'react-router-dom';


const stateSelector = createStructuredSelector({
  currentUser: makeSelectCurrentUser()
});

function Sidebar() {
  const { currentUser } = useSelector(stateSelector);
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading pt-5 pb-4"><strong>eAuction</strong></div>
      <div className="list-group list-group-flush">
        {(currentUser === undefined) ? <>
          <NavLink to="/login" className={`tabs list-group-item ${(location.pathname === '/login') ? 'active1' : 'bg-light'}`}>
            <div className="list-div my-2">
              <FontAwesomeIcon icon={["fas", "sign-in-alt"]} /> &nbsp;&nbsp; Login
            </div>
          </NavLink>
          <NavLink to="/register" className={`tabs list-group-item ${(location.pathname === '/register') ? 'active1' : 'bg-light'}`}>
            <div className="list-div my-2">
              <FontAwesomeIcon icon={["fas", "user-plus"]} /> &nbsp;&nbsp; Register
            </div>
          </NavLink>
        </>
          :
          <>
            <NavLink to="/" className={`tabs list-group-item ${(location.pathname === '/') ? 'active1' : 'bg-light'}`}>
              <div className="list-div my-2">
                <FontAwesomeIcon icon={["fas", "home"]} /> &nbsp;&nbsp; Show Products
              </div>
            </NavLink>
            <NavLink to="/logout" className={`tabs list-group-item ${(location.pathname === '/logout') ? 'active1' : 'bg-light'}`}>
              <div className="list-div my-2">
                <FontAwesomeIcon icon={["fas", "sign-out-alt"]} /> &nbsp;&nbsp;&nbsp; Logout
              </div>
            </NavLink>
          </>
        }
      </div>
    </div>
  );
}

export default Sidebar;
