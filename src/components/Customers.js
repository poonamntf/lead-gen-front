import React from "react";
import profilepicture from "../assets/profilepicture.png";
import search from "../assets/search.png";
import { Form, Button } from "react-bootstrap";

const Customers = () => {
  const data = [
    {
      image: profilepicture,
      customer: "Brandin Dokidis",
      email: "mathilda@gmail.com",
      totalleads: 3500,
      industry: "Real Estate",
      phone: "(907) 222-1151",
    },
    {
      image: profilepicture,
      customer: "Jaxson Lipshutz",
      email: "jaxson@gmail.com",
      totalleads: 4500,
      industry: "Construction",
      phone: "(907) 789-7623",
    },
    {
      image: profilepicture,
      customer: "Adison George",
      email: "adison@gmail.com",
      totalleads: 4900,
      industry: "Insurance",
      phone: "(907) 357-4333",
    },
    {
      image: profilepicture,
      customer: "Alena Dorwart",
      email: "cheyenne@gmail.com",
      totalleads: 2400,
      industry: "Real Estate",
      phone: "(907) 247-9199",
    },
    {
      image: profilepicture,
      customer: "Chance Curtis",
      email: "chance@gmail.com",
      totalleads: 1000,
      industry: "Construction",
      phone: "(907) 694-7675",
    },
    {
      image: profilepicture,
      customer: "Allison George",
      email: "allison@gmail.com",
      totalleads: 900,
      industry: "Credit Card",
      phone: "(907) 357-4333",
    },
    {
      image: profilepicture,
      customer: "Jaxson Lipshutz",
      email: "jaxson@gmail.com",
      totalleads: 3800,
      industry: "Real Estate",
      phone: "(907) 222-1151",
    },
  ];

  return (
    <div>
      <div className="topbarcustomers d-flex align-items-center justify-content-between">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for customers"
            style={{
              paddingRight: "25px",
              backgroundImage: `url(${search})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "25px 25px",
            }}
          />
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

export default Customers;
