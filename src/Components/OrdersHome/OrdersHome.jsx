import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const OrdersHome = () => {
    return (
        <>
           <h3>Orders</h3> 

<NavLink to="/dinein">Dine In</NavLink>
<NavLink to="/togo">To go</NavLink>
<NavLink to="/delivery">Delivery</NavLink>
<Outlet/>
        </>
    );
};

export default OrdersHome;
