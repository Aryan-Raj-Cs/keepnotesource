import React from 'react';
import logo from './image/logo.jpg';
import './header.css'
function Header() {
    
 
    return (
 <>
<div className="header">

<img src={logo}  height="80"  />
<h1>Aryan Note</h1>
</div>
 </> 
 );
}

export default Header;
