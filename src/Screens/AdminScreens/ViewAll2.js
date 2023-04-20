import React, { useState } from 'react'
import importpic from "../../assets/import.png";
import pluscircle from "../../assets/PlusCircle.png";
import lessthan from "../../assets/lessthan.png";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
const ViewAll2 = () => {
    const data = [
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "Not Interested",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "booked",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "Not Interested",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "booked",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "booked",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "Not Interested",
        },
        {

            name: "Mayur Tanwani",
            email: "mayur.tanwani11@gmail.com",
            phone: "8982106043",
            status: "booked",
        }
    ]
    const [show, setShow] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const handleShow = () => setShow(true);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div className='mt-5 w-100'>


            <Container className='viewall2container1'>
                <Row>
                    <Col >
                        <input type='search' className='viewall2search' placeholder='search'></input>
                    </Col>
                    <Col className='viewall2btngrp'>

                        <Button onClick={handleShow} className="importbutton">
                            Import <img src={importpic} />
                        </Button>
                        <Button className="createcontactbutton">
                            Create Contact <img src={pluscircle} />{" "}
                        </Button>
                    </Col>
                </Row>


            </Container>

            <Container className='viewall2container mt-3' >
                <Row >
                    <Col className='CardContainer' >
                        <Card >
                            <div className='viewall2carddiv'>
                                <h4 className='viewall2h4'>Real Estate</h4>
                                <Button className='viewall2btn1'>Invite</Button>
                                <Button style={{ backgroundColor: "#5F65CE" }}>View All</Button>

                            </div>


                            <table className='viewall2table' style={{ border: '1px groove' }}>
                                <thead>
                                    <tr className='viewall2tablerow'>
                                        <td style={{ border: '1px groove' }}><input type="checkbox" /></td>
                                        <td style={{ border: '1px groove' }}>Name</td>
                                        <td style={{ border: '1px groove' }}>Email</td>
                                        <td style={{ border: '1px groove' }}>Phone No.</td>
                                        <td style={{ border: "1px groove" }}>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i} className='viewall2tablerow'>
                                            <td ><input type="checkbox" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td
                                                className={
                                                    item.status == "booked"
                                                        ? "booked1"
                                                        : "notinterested1"
                                                }
                                            >
                                                {item.status}
                                            </td>
                                        </tr>
                                    )).slice(0, 6)}
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                    <Col lg={1}></Col>
                    <Col className='CardContainer'  >
                        <Card>
                            <div className='viewall2carddiv'>
                                <h4 className='viewall2h4'>Real Estate</h4>
                                <Button className='viewall2btn1'>Invite</Button>
                                <Button style={{ backgroundColor: "#5F65CE" }}>View All</Button>

                            </div>
                            <table className='viewall2table' style={{ border: '1px groove' }}>
                                <thead>

                                    <tr className='viewall2tablerow'>
                                        <td><input type="checkbox" /></td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone No.</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i} className='viewall2tablerow'>
                                            <td><input type="checkbox" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td
                                                className={
                                                    item.status == "booked"
                                                        ? "booked1"
                                                        : "notinterested1"
                                                }
                                            >
                                                {item.status}
                                            </td>
                                        </tr>
                                    )).slice(0, 6)}
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>
                <Row className='viewall2row mt-5'>
                    <Col className='CardContainer'>
                        <Card>
                            <div className='viewall2carddiv'>
                                <h4 className='viewall2h4'>Real Estate</h4>
                                <Button className='viewall2btn1'>Invite</Button>
                                <Button style={{ backgroundColor: "#5F65CE" }}>View All</Button>

                            </div>
                            <table className='viewall2table' style={{ border: '1px groove' }}>
                                <thead>

                                    <tr className='viewall2tablerow'>
                                        <td><input type="checkbox" /></td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone No.</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i} className='viewall2tablerow'>
                                            <td><input type="checkbox" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td
                                                className={
                                                    item.status == "booked"
                                                        ? "booked1"
                                                        : "notinterested1"
                                                }
                                            >
                                                {item.status}
                                            </td>
                                        </tr>
                                    )).slice(0, 6)}
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                    <Col lg={1}></Col>
                    <Col className='CardContainer' >
                        <Card>
                            <div className='viewall2carddiv'>
                                <h4 className='viewall2h4'>Real Estate</h4>
                                <Button className='viewall2btn1'>Invite</Button>
                                <Button style={{ backgroundColor: "#5F65CE" }}>View All</Button>

                            </div>
                            <table className='viewall2table' style={{ border: '1px groove' }}>
                                <thead>

                                    <tr className='viewall2tablerow'>
                                        <td><input type="checkbox" /></td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone No.</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i} className='viewall2tablerow'>
                                            <td><input type="checkbox" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td
                                                className={
                                                    item.status == "booked"
                                                        ? "booked1"
                                                        : "notinterested1"
                                                }
                                            >
                                                {item.status}
                                            </td>
                                        </tr>
                                    )).slice(0, 6)}
                                </tbody>
                            </table>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default ViewAll2