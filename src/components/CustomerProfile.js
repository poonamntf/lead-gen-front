import React from "react";
import profilepicture from "../assets/profilepicture.png";
import search from "../assets/search.png";
import lessthan from "../assets/lessthan.png";
import { Form, Button } from "react-bootstrap";
const CustomerProfile = () => {
  const data = [
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 3500,
      industry: "Real Estate",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 4500,
      industry: "Construction",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 4900,
      industry: "Insurance",
      phone: "9087946043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 2400,
      industry: "Real Estate",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 1000,
      industry: "Construction",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 900,
      industry: "Credit Card",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 3800,
      industry: "Real Estate",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 3400,
      industry: "Insurance",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 9600,
      industry: "Credit Card",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 6800,
      industry: "Real Estate",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 9400,
      industry: "Credit card",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 7700,
      industry: "Construction",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 6600,
      industry: "Insurance",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 4300,
      industry: "Real Estate",
      phone: "8982106043",
    },
    {
      image: profilepicture,
      customer: "Mayur Tanwani",
      email: "mayur.tanwani11@gmail.com",
      totalleads: 2800,
      industry: "Real Estate",
      phone: "8982106043",
    },
  ];

  return (
    <div>
      <div className="topbarcustomers d-flex align-items-center justify-content-between">
        <div className="customerName d-flex align-items-center">
          <img src={lessthan} />
          <h4>Brandon Dokidis</h4>
        </div>
        <div>
          <Form.Select
            name="language"
            className="form-control industrycustomers"
            aria-label="Language"
            required
          >
            <option value="">Industry</option>
            <option value="english">Real Estate</option>
            <option value="hindi">Construction</option>
            <option value="english">Credit Card</option>
            <option value="hindi">Insurance</option>
          </Form.Select>
        </div>
      </div>
      <div className="w-100 customerstable">
        <table className="mt-5">
          <thead className="mb-5 pb-5">
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Total leads</th>
              <th>Phone No.</th>
              <th>Industry</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {" "}
                      {<img src={item.image} />} {item.customer}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.totalleads}</td>
                    <td>{item.industry}</td>
                    <td>{item.phone}</td>
                    <td
                      style={{
                        color: "#5f65ce",
                      }}
                    >
                      View
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerProfile;
