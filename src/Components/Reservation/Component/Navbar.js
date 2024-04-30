import React from "react";
import Cookies from "js-cookie";

const Navbar = ({cookie,cookieValue, handleLogin, handleLogout}) => {
    const userId = cookie.get('UserId');
    const userFullName = `${cookie.get('UserFN')} ${cookie.get('UserLN')}`;
    return (
        <nav className="row navbar px-5 shadow-sm bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img style={{width: 8 + 'em'}}
                                                          src="/Images/logoBlack.png" alt="Logo"/></a>
                <div className="row justify-content-end">
                    <div className="col-auto">
                        <a type="button" className="btn text-decoration-none btn-light">Host on Comfy Rental</a>
                    </div>
                    <div className="col-auto">
                        <div className="dropdown-center">
                            <button style={{width: 3 + 'em', height: 2.2+ 'em'}} className="btn btn-outline-dark dropdown-toggler" type="button" data-bs-toggle="dropdown">
                                <span style={{width: 3 + 'em', height: 2.2+ 'em'}} className="bi bi-person-lines-fill"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-star">
                                {cookieValue ? (
                                    <React.Fragment>
                                        <li><a href={`/Profile/${userId}`} className="dropdown-item">{userFullName}</a></li>
                                        <li><a onClick={handleLogout} className="dropdown-item">Logout</a></li>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <li><a className="dropdown-item" href="/Auth/Register">Register</a></li>
                                        <li><a onClick={handleLogin} className="dropdown-item">Login</a></li>
                                    </React.Fragment>                           )}
                                 <hr/>
                                <li><a className="dropdown-item" href="#">Host on Comfy Rental</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>);
};
export default Navbar;