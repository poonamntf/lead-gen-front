import React from "react";
import { useState } from "react";
// import lessthan from "../../assets/lessthan.png";
// import importpic from "../../assets/import.png";
// import pluscircle from "../../assets/PlusCircle.png";
// import Modal from "react-bootstrap/Modal";
// import { Form, Button } from "react-bootstrap";
// import { FileUploader } from "react-drag-drop-files";
import profilepicture from "../../assets/profilepicture1.png";
import "../AdminScreens/Dashboard/dashboard.css";
import Card from "../../components/HomeCompo/Card";
import Chart from "../../components/HomeCompo/Chart";
import ViewAll2 from './ViewAll2'
import Customers from "../../components/Customers";

const ViewAll = () => {
  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState(false);
  const fileTypes = ["XLSX", "CSV"];
  const [file, setFile] = useState(null);
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
  const handleChange = (file) => {
    setFile(file);
  };

  const handleClose = () => {
    setShow(false);
    setFile(null);
  };
  const handleShow = () => setShow(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="bloc-tabs mb-5">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Dashboard
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          All Leads
        </button>

        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Customers
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "content  active-content container" : "content"
          }
        >
          <div className="mt-5 row">
            <Card />
          </div>
          <div className="row">
            <Chart />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <div className=" w-100 dashboardmain">
            <div className="dashboardmaintop mt-5 d-flex align-items-center justify-content-between">
              <div>
                <img className="arrowimage" src={lessthan} />
                Real Estate
              </div>
              <div>
                <Button onClick={handleShow} className="importbutton">
                  Import <img src={importpic} />
                </Button>
                <Button className="createcontactbutton">
                  Create Contact <img src={pluscircle} />{" "}
                </Button>
              </div>
            </div>
            <div className="tablediv mt-5">
              <table>
                <thead className="mb-5 pb-5">
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone No.</td>
                    <td>Status</td>
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Import</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
                Choose List
                <Form.Select
                  name="language"
                  className="form-control"
                  aria-label="Language"
                  required
                >
                  <option value="">Choose List</option>
                  <option value="english">Real Estate</option>
                  <option value="hindi">Construction</option>
                  <option value="english">Credit Card</option>
                  <option value="hindi">Insurance</option>
                </Form.Select>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  multiple={false}
                />
              </Modal.Body>
              <Modal.Footer>
                <div className="importbuttonsecond">
                  <Button variant="primary" onClick={handleClose}>
                    Import
                  </Button>
                </div>
              </Modal.Footer>
            </Form>
          </Modal> */}
          <ViewAll2/>
        </div>
      </div>

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <Customers/>
      </div>
    </div>
  );
};

export default ViewAll;
