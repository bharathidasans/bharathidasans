import React from "react";
import { useRouteError } from "react-router-dom";
const Pagenotfound = () => {
    const error = useRouteError();
    return (
        error.status === "404" ?
        <div className="container text-center img-width">
            <img src="page-not-found.png" alt="not found"/>
            <h4>No Page Found </h4> Go to <a href='/'>Home</a>
        </div> :""
    );
}

export default Pagenotfound;