import React from "react";
import "./SingleService.css";

const SingleService = (props) => {
    // destructruing
    const {type, body, datetime, title, image } = props.service;
    return (
        <>
            <div className="product">
                <div className="description">
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <p>{datetime}</p>
                </div>
                <div className="image">
                    <img className="text-center" src={image} alt={title} />
                </div>
            </div>
        </>
    );
};

export default SingleService;
