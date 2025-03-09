import React from "react";
import { useRouteError } from "react-router";

const Pagenotfound = () => {
    const error = useRouteError;
    console.log("error.status == ",error);
    return (
        error.status === "404" ?
        <div className="container text-center img-width">
            <img src="page-not-found.png" alt="not found"/>
            <h4>No Page Found </h4> Go to <a href='/'>Home</a>
        </div> :<div><h2>Error</h2></div>
    );
}

export default Pagenotfound;