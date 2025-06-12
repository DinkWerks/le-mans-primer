import React from 'react'
import "./Navbar.css";

function Navbar({handleSetContentPath}) {
    function changePage(path) {
        handleSetContentPath(path);
    }

    return (
        <div className='flex drop-shadow-xl'>
            <div className='left-triangle' />
            <div className='bg-white w-20' />
            <ul className="menu menu-horizontal rounded-none bg-white rounded-box">
                <li><button className="btn btn-ghost" onClick={() => changePage("Home")} >Home</button></li>
                <li><button className="btn btn-ghost" onClick={() => changePage("About")}>About</button></li>
                <li><button className="btn btn-ghost" onClick={() => changePage("Cars")}>Cars</button></li>
                <li><button className="btn btn-ghost" onClick={() => changePage("Track")}>Track</button></li>
            </ul>
            <div className='bg-white w-20' />
            <div className='right-triangle' />
        </div>
    )
}

export default Navbar;