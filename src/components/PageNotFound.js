import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    <div>
        <h1>Boom! Its a 404</h1>
        <h3>Houston we have a problem.</h3>
        <Link to="home" className="btn btn-primary btn-lg">
            Try to go home?
        </Link>
    </div>
};

export default PageNotFound;