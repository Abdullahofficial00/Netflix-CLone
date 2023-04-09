import React, {useEffect, useState } from 'react'

function Nav() {
    const[show, handleShow]=useState(false);
        useEffect(() => {
        
        window.addEventListener("scroll", () => {
        
        if (window.scrolly>100){
        
        handleShow(true);
        
        } else handleShow(false);
        
        return () => { window.removeEventListener("scroll");
        
        } 
    });
    }, []);
  return (
    <div className='nav'>
      <img className='nav_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo"/>
    </div>
  )
}

export default Nav
