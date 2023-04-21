import React, { useState } from "react";
import Logo from "../../assets/image6.png";
import "./header.css";
import avatar from "../../assets/avatar.png";
import { BiBell } from "react-icons/bi";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import profilepicture from "../../assets/profilepicture.png";
import exportpic from "../../assets/export.png";
import { Form } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"
import noNotifications from '../../assets/no-notification.png'

const Header = () => {
    const [count, setcount] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Do something with the file
    };

    return (
        <div className="navbar-cutome">
            <div className="main-topbar d-flex justify-content-between">
                <div className="left-menu d-flex ">
                    <div className="m-2">
                        <img
                            alt="logo"
                            src={Logo}
                            style={{ height: "55px" }}
                            className="small_logo"
                        />
                    </div>
                </div>
                <div className="right-menu d-flex text-light">
                    <div
                        className="dropdown d-flex justify-content-center align-items-center"
                    // onClick={handleViewNotifications}
                    >
                        <BiBell
                            className="dropdown-toggle text-light"
                            id="notificationMenu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ cursor: "pointer" }}
                            size={23}
                        />
                        <span className="notification-count">{count > 0 ? count : null}</span>

                        <div className="dropdown-menu notification" aria-labelledby="notificationMenu">
                            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                                <img src={noNotifications} alt='' className="img-responsive" style={{ height: '200px' }} />
                                <h5 style={{ fontWeight: '700' }}>
                                    No Notifications Yet
                                </h5>
                                <p className="text-center mx-4">You have no notifications right now.<br /> Come back later</p>
                            </div>


                            <Link to='' style={{ color: '#4d44d1' }}
                                className='dropdown-item text-center'
                            >
                                View all <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown d-flex justify-content-center align-items-center login-user m-4">
                        <img
                            src={avatar}
                            alt="admin"
                            className="img-responsive rounded-circle me-2"
                            style={{ float: "left" }}
                            onClick={() => handleShow()}
                        />
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="profiletitle">Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="modalform">
                                    <div className="d-flex flex-column ">
                                        <div className="d-flex justify-content-between  align-items-center w-100">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src={profilepicture} />
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 adminname">Emerson Carder</h6>
                                                    <p className="mb-0 admintitle">Admin</p>
                                                </div>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        id="file-upload"
                                                        type="file"
                                                        accept=".jpg, .jpeg, .png"
                                                        onChange={handleFileUpload}
                                                        style={{ display: "none" }}
                                                    />
                                                </label>

                                                <label htmlFor="file-upload">
                                                    <Button
                                                        onClick={() =>
                                                            document.getElementById("file-upload").click()
                                                        }
                                                        className="exportbutton ms-5"
                                                    >
                                                        <div className="d-flex align-itmes-center">
                                                            <div>
                                                                <img src={exportpic} alt="upload icon" />
                                                            </div>
                                                            <div>
                                                                <span>Upload Image</span>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="personal mt-3">
                                            <h5 className="adminformheading">Personal Details </h5>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Your Name"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="passwordchange mt-3">
                                            <h5 className="adminformheading">Change Password </h5>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Current Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="**********"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="**********"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="adminsubmitbutton">
                                            <Button>Submit</Button>
                                        </div>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>

                            <div
                                className="dropdown-toggle"
                                id="dropdownMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: "pointer" }}
                            >
                                <div>Emerson Carder</div> 
                                <p
                                    className="text-light"
                                    style={{
                                        fontSize: "15px",
                                        float: "left",
                                        marginBottom: "0px",
                                    }}
                                >
                                    Admin
                                </p>
                            </div>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <Link
                                className="dropdown-item"
                                // to="/admin/change_password"
                                style={{ color: "#676868" }}
                            >
                                Change Password
                            </Link>
                            <Link
                                className="dropdown-item"
                                to="#"
                                style={{ color: "#676868" }}
                            //   onClick={logoutHandler}
                            >
                                Logout
                            </Link>

                        </div>

                    </div >
                </div >
            </div >
        </div >

    );
};

export default Header;
