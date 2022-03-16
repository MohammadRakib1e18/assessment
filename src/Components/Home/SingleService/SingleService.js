import React from "react";
import "./SingleService.css";

const SingleService = (props) => {
    // destructruing
    const {body, datetime, title, image } = props.service;
    const time = new Date(datetime).toLocaleTimeString("en", {
        timeStyle: "short",
        hour12: false,
        timeZone: "UTC",
    });

    let date = new Date(datetime);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }

    
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for(let i=0; i<12; i++){
        if(parseInt(month)===(i+1)){
            month=months[i];
            break;
        }
    }
    // let myDate=year + "-" + month + "-" + dt;
    let myDate=month+" "+parseInt(dt)+", "+year;

    if(image==='NULL'){
        return (
            <>
                <div className="product">
                    <div className="description">
                        <p>{body}</p>
                        <p>{myDate} | {time}</p>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="product">
                <div className="description">
                    <h5 className="fw-bold">{title}</h5>
                    <p>{body}</p>
                    <p>{myDate} | {time}</p>
                </div>
                <div className="image">
                    <img className="text-center" src={image} alt={title} />
                </div>
            </div>
        </>
    );
};

export default SingleService;
