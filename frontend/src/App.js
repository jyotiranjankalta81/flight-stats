import './App.css';
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";
import MainRouter from './Router/MainRouter';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
// import { resetAuthNotification, selectAuthErrorStatus, selectAuthMessage } from './Redux/features/authenticationSlice';
import 'react-toastify/dist/ReactToastify.css';
import { allFlightDetails } from './Redux/features/adminSlice';

function App() {
  // useLocation use for current location 
  const location = useLocation()
  const [isAdmin, setAdmin] = useState(false);

  // useSelector & useDispatch this is redux part
  // const authErrorStatus = useSelector(selectAuthErrorStatus);
  // const authMessage = useSelector(selectAuthMessage)
  const dispatch = useDispatch();

  React.useEffect(() => {

    // this is call back function for updating the global state data whatever the data is available in redux store
    dispatch(allFlightDetails())
    // dispatch(Section1());
    // dispatch(BasicSection2());
    // dispatch(BasicSection3());
  }, [])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   if (location.pathname.split('/').includes('admin-panel')) {
  //     setAdmin(true);
  //   } else if (location.pathname.split('/').includes('auth')) {
  //     setAdmin(true);
  //   }
  //   else {
  //     setAdmin(false);
  //   }

  //   // if location array data change then the call all the code will work inside the useeffect 
  // }, [location])

  // useEffect(() => {
  //   if (authMessage) {
  //     if (authErrorStatus) {
  //       toast.error(authMessage)
  //     } else {
  //       toast.success(authMessage)
  //     }
  //     dispatch(resetAuthNotification());
  //   }
  // }, [authErrorStatus, authMessage])

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <MainRouter />
    </div>
  );
}

export default App;
