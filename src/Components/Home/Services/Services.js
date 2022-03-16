import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    let recent = [];
    let old = [];

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    let len = services.length;
    for (let i = 0; i < len; i++) {
        if (services[i].datetime.indexOf("2022") > -1) recent.push(services[i]);
        else old.push(services[i]);
    }

    return (
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
    );
};

export default Services;
