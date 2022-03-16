import React from "react";
import "./Navigation.css";
// import Swal from "sweetalert2";
// import { useState } from "react/cjs/react.production.min";

const Navigation = () => {
    // const [orders, setOrders] = useState([]);

    // // DELETE AN USER
    // const handleDeleteUser = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const url = `https://morning-harbor-17755.herokuapp.com/deleteOrder/${id}`;
    //             fetch(url, {
    //                 method: "DELETE",
    //             })
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             "Deleted!",
    //                             "Your file has been deleted.",
    //                             "success"
    //                         );
    //                         const remainingOrders = orders.filter(
    //                             (order) => order._id !== id
    //                         );
    //                         setOrders(remainingOrders);
    //                     }
    //                 });
    //         }
    //     });
    // };
    return (
        <div className="header">
            <span className=" fs-5 mx-4">Blogs</span>
            <button  type="button" className="btn btn-secondary p-0 px-1 ">Delete all</button>
            {/* <button onClick={() => handleDeleteUser(order.id)}>
                Delete all
            </button> */}
            <div className="form-check form-switch mx-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault1"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">
                    Long stories
                </label>
            </div>
            <div className="form-check form-switch mx-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">
                    Short stories
                </label>
            </div>
        </div>
    );
};

export default Navigation;
