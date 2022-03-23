import {Link,Outlet} from 'react-router-dom'; 
import React from 'react'

export const Products = () => {
  return (

    <>
      <div>
   <input type="search" placeholder='Search Products' />
   </div>

    <nav>

        {/* these are relative links, relative links are the links that do not start with a forward slash and inherit the closest route
        in which they are rendered  */}

        <Link to="featured">Featured</Link>        
        <Link to="/products/new">New Products</Link>
        
        {/* <Link to="/new">New Products</Link>   - > this will give error to page not found */}
    </nav>
    
    {/* outlet is used to let the parent component configure the child component */}
    <Outlet/>   

   </>
  )
}

