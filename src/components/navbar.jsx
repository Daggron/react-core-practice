import React from 'react'

function Navbar(){
    return(
        <React.Fragment >
            <div className="conatiner">
           
                <nav className="navbar navbar-expand-sm bg-dark">

                    <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#">Link 3</a>
                    </li>
                    </ul>

                </nav>
             </div>
        </React.Fragment>
    )
}

export default Navbar;