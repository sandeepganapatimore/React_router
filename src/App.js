import './App.css';
import Login from './Component/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DashBoard from './Component/DashBoard';
import RouterLink from './RoutesLink';
import { Links } from './Component/Links';
import Profile from './Component/Profile';
import Error from './Component/Error';
import LoginPage from './Login/Register';
import Home from './Login/Home';
import Screen from './Login/Screen';
import Register from './Login/Register';
import Fifa from './Login/Fifa';
import Features from './Component/Features';
import NewFeature from './Component/NewFeature';
import Users from './Component/Users';
// import UserDetails from './Component/UserDetails';
import Admin from './Component/Admin';
import Procted from './ProctedRoutes/Procted';
import React from 'react';
import Account from './Component/Account';
import Start from './Advance/Start';
import Profiles from './Advance/Profiles';
import Search_P from './Advance/Search_P';
import NewParam from './Advance/NewParam';



const LazyDetails = React.lazy(() => import('./Component/UserDetails'))


// What is the BrowserRouter ? => 

//  why to use index routing???
// -> We use index routing in mainly in the nested Routes so that ... on moving to particular page where
// there is child routes .... index will invoke default setted child 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Links /> */}
        {/* <Login /> */}
        <Routes>

          {/* <Route path={RouterLink.login} element={<Login />} />
          <Route path={RouterLink.dashboard} element={<DashBoard />} >
            <Route index element={<Features />} />
            <Route path={RouterLink.feature} element={<Features />} />
            <Route path={RouterLink.newFeature} element={<NewFeature />} />
          </Route>
          <Route path={RouterLink.profile} element={<Profile />} />
          <Route path={RouterLink.account} element={<Account />} />
          <Route path={RouterLink.default} element={<Error />} /> */}
          {/* 
          <Route path={RouterLink.user} element={<Users />} />
          <Route path={RouterLink.userId} element={<React.Suspense fallback='loading....'>
            <LazyDetails />
          </React.Suspense>} />
          <Route path={RouterLink.admin} element={<Admin />} /> */}
          {/* </Route> */}




          <Route path={RouterLink.home} element={<Home />} />

          <Route path={RouterLink.register} element={<Register />} />
          <Route path={RouterLink.screen} element={<Screen />} />
          <Route path={RouterLink.fifa} element={<Procted />}>
            <Route path={RouterLink.fifa} element={<Fifa />} />
          </Route>





          {/* <Route path={RouterLink.start} element={<Start />} />
          <Route path={RouterLink.profiles} element={<Profiles />} />
          <Route path={RouterLink.parms} element={<Search_P />} />
          <Route path={RouterLink.newparam} element={<NewParam />} />
          <Route path={RouterLink.fifa} element={<Fifa />} /> */}




        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
