import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

// import { About } from './components/About';

import { AuthProvider } from './components/auth';

import Navbar from './components/Navbar';
import OrderSum from './components/OrderSum';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import {FeaturedProducts} from './components/FeaturedProducts';
import {NewProducts} from './components/NewProducts';
import {Users} from "./components/Users";
import {UserDetails} from './components/UserDetails';
import {Admin} from "./components/Admin";
import {Profile} from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
   {/* lazy loading step 1 */}
const LazyAbout=React.lazy(()=>import('./components/About'));


function App() {
  return (
  <AuthProvider>

   <Navbar/>
   <Routes>
     {/* //we define the individual route using route component */}
     <Route path='/' element={<Home/>} />

      {/* lazy loading step 2 */}
     <Route path='about' element={ <React.Suspense fallback='Loading...'>   <LazyAbout/>      </React.Suspense> } />


     <Route path='order-summary' element={<OrderSum/>}/>

     {/* if there is a route which matches nothing  */}
     <Route path="*" element={<NoMatch/>}/>

     {/* route for prducts : nested routes */}
     <Route path='products' element={<Products/>}>

    {/* used index route so that it helps in default view kind of, like a nav info. which we weant to display beforehand with tha parent
    it means we have a nested route and we want it to rendered at the parent url we used index route, 
    the index rouyte will conatin inex prop instead of path prop , path will be automatically same as that of the parent*/}
      <Route index element={<FeaturedProducts/>}/>
      <Route path='featured' element={<FeaturedProducts/>} />
      <Route path='new' element={<NewProducts/>} />
     </Route>

    {/* dynamic routes */}
    <Route path='users' element={<Users/>}>

    {/* but this will not work if we are dealing with thousands of users, that's why we use dynamic routing */}
{/*  <Route path='users/1' element={<UserDetails/>}/>
     <Route path='users/2' element={<UserDetails/>}/>
     <Route path='users/3' element={<UserDetails/>}/> */}

    <Route path=':userId' element={<UserDetails/>}/>
    <Route path='admin' element={<Admin/>}/>
    </Route>

    <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
    <Route path='login' element={<Login/>}></Route>
     
   </Routes>

   </AuthProvider>
  );
}

export default App;
