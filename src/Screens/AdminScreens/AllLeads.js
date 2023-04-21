import React, { useState } from "react";
import importpic from "../../assets/import.png";
import pluscircle from "../../assets/PlusCircle.png";
import lessthan from "../../assets/lessthan.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllLeads = () => {
  const data = [
    {
      name: "Brandin Dokidis",
      email: "mathilda@gmail.com",
      phone: "(907) 222-1151",
      status: "Not Interested",
    },
    {
      name: "Jaxson Lipshutz",
      email: "jaxson@gmail.com",
      phone: "(907) 789-7623",
      status: "booked",
    },
    {
      name: "Adison George",
      email: "adison@gmail.com",
      phone: "(907) 357-4333",
      status: "Not Interested",
    },
    {
      name: "Alena Dorwart",
      email: "cheyenne@gmail.com",
      phone: "(907) 247-9199",
      status: "booked",
    },
    {
      name: "Chance Curtis",
      email: "chance@gmail.com",
      phone: "(907) 694-7675",
      status: "booked",
    },
    {
      name: "Allison George",
      email: "allison@gmail.com",
      phone: "(907) 357-4333",
      status: "Not Interested",
    },
    {
      name: "Jaxson Lipshutz",
      email: "jaxson@gmail.com",
      phone: "(907) 222-1151",
      status: "booked",
    },
  ];
  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const handleShow = () => setShow(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="mt-5 w-100">
      <Container className="viewall2container1">
        <div className="d-flex justify-content-between w-100">
          <div>
            <input
              type="search"
              className="viewall2search"
              placeholder="search"
            ></input>
          </div>
          <div className="viewall2btngrp d-flex">
            <Button onClick={handleShow} className="importbutton">
              Import <img src={importpic} />
            </Button>
            <Button className="createcontactbutton">
              Create Contact <img src={pluscircle} />{" "}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="viewall2container mt-3">
        <Row>
          <Col className="CardContainer">
            <Card>
              <div className="viewall2carddiv mt-3 mb-3 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="viewall2h4">Real Estate</h4>
                </div>
                <div>
                  <Button className="viewall2btn1">Invite</Button>
                  <Button className="viewall2btn2">View All</Button>
                </div>
              </div>

              <table className="viewall2table mt-3">
                <thead>
                  <tr className="viewall2tablerow">
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .map((item, i) => (
                      <tr key={i} className="viewall2tablerow">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td
                          className={
                            item.status == "booked" ? "booked" : "notinterested"
                          }
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))
                    .slice(0, 6)}
                </tbody>
              </table>
            </Card>
          </Col>
          <Col lg={1}></Col>
          <Col className="CardContainer">
            <Card>
              <div className="viewall2carddiv mb-3 mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="viewall2h4">Real Estate</h4>
                </div>
                <div>
                  <Button className="viewall2btn1">Invite</Button>
                  <Button className="viewall2btn2">View All</Button>
                </div>
              </div>
              <table className="viewall2table mt-3">
                <thead>
                  <tr className="viewall2tablerow">
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .map((item, i) => (
                      <tr key={i} className="viewall2tablerow">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td
                          className={
                            item.status == "booked" ? "booked" : "notinterested"
                          }
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))
                    .slice(0, 6)}
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
        <Row className="viewall2row mt-5">
          <Col className="CardContainer">
            <Card>
              <div className="viewall2carddiv mb-3 mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="viewall2h4">Real Estate</h4>
                </div>
                <div>
                  <Button className="viewall2btn1">Invite</Button>
                  <Button className="viewall2btn2">View All</Button>
                </div>
              </div>
              <table className="viewall2table mt-3">
                <thead>
                  <tr className="viewall2tablerow">
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .map((item, i) => (
                      <tr key={i} className="viewall2tablerow">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td
                          className={
                            item.status == "booked" ? "booked" : "notinterested"
                          }
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))
                    .slice(0, 6)}
                </tbody>
              </table>
            </Card>
          </Col>
          <Col lg={1}></Col>
          <Col className="CardContainer">
            <Card>
              <div className="viewall2carddiv mb-3 mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="viewall2h4">Real Estate</h4>
                </div>
                <div>
                  <Button className="viewall2btn1">Invite</Button>
                  <Button className="viewall2btn2">View All</Button>
                </div>
              </div>
              <table className="viewall2table mt-3">
                <thead>
                  <tr className="viewall2tablerow">
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .map((item, i) => (
                      <tr key={i} className="viewall2tablerow">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td
                          className={
                            item.status == "booked" ? "booked" : "notinterested"
                          }
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))
                    .slice(0, 6)}
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllLeads;
