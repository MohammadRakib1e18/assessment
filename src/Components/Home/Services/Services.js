import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    const [short, setShort] = useState(0);
    const [long, setLong] = useState(0);
    let recent = [];
    let old = [];

    useEffect(() => {
        fetch("https://desolate-stream-12621.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [long,short]);

    const handleDeleteUser=()=>{
        setLong(0);
        setShort(0);
    }

    let len = services.length;

    const show = (value) => {
        if (value === 1) {
            setLong(!long);
        }
        if (value === 2) {
            setShort(!short);
        }
    };
    for (let i = 0; i < len; i++) {
        if (services[i].type === "short" && !short) continue;
        if (services[i].type === "long" && !long) continue;
        if (services[i].datetime.indexOf("2022") > -1) recent.push(services[i]);
        else old.push(services[i]);
    }

    return (
        <>
            <div className="header">
                <span className=" fs-5 mx-4">Blogs</span>
                <button type="button" onClick={() => handleDeleteUser()} className="btn btn-secondary p-0 px-1 ">
                    Delete all
                </button>
                {/* <button onClick={() => handleDeleteUser(order.id)}>
                Delete all
            </button> */}
                <div className="form-check form-switch mx-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault1"
                        onClick={() => show(1)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault1"
                    >
                        Long stories<span className="text-success fw-bold">({4})</span>
                    </label>
                </div>
                <div className="form-check form-switch mx-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault2"
                        onClick={() => show(2)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault2"
                    >
                        Short stories<span className="text-success fw-bold">({2}})</span>
                    </label>
                </div>
            </div>
            <div className="">
                <div className="recent mt-4">
                    <h3 className="text-start">Recent</h3>
                    <div className="services">
                        {recent.map((service) => (
                            <SingleService
                                key={service.id}
                                service={service}
                            ></SingleService>
                        ))}
                    </div>
                </div>
                <div className="old mt-4">
                    <h3 className="text-start">Old</h3>
                    <div className="services">
                        {old.map((service) => (
                            <SingleService
                                key={service.id}
                                service={service}
                            ></SingleService>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
