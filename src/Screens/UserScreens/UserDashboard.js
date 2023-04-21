import React from "react";
import { Form, Button } from "react-bootstrap";
import profilepicture from "../../assets/profilepicture2.png";
import lessthan from "../../assets/lessthan.png";
import importpic from "../../assets/import.png";
import pluscircle from "../../assets/PlusCircle.png";

const UserDashboard = () => {
  const data = [
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "booked",
    },
    {
      image: profilepicture,
      name: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      phone: "8982106043",
      status: "Not Interested",
    },
  ];
  return (
    <div>
      <div className="bloc-tabs ">
        <button className="tabs active-tabs">Leads Management</button>
      </div>

      <div className="content-tabs">
        <div className="content  active-content container">
          <div className=" w-100 dashboardmain">
            <div className="dashboardmaintop mt-5 d-flex align-items-center justify-content-between">
              <div className="realestatetext">
                <img className="arrowimage" src={lessthan} />
                Real Estate
              </div>
            </div>
            <div className="tablediv mt-5">
              <table>
                <thead className="mb-5 pb-5">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {data &&
                    data.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            {" "}
                            {<img src={item.image} />} {item.name}
                          </td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td
                            className={
                              item.status == "booked"
                                ? "booked"
                                : "notinterested"
                            }
                          >
                            {item.status}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
