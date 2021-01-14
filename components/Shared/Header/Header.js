import React from 'react';
import classes from '../../../styles/custom/Shared/Header.module.scss';

export default function Header() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{background:"#164278"}}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className={classes.Logo} src="/expandana-text-logo.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" size="30" style={{color:"#fff"}} height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
