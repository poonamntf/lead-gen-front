import React, { useState } from 'react'
import Logo from "../../assets/image6.png"
import "./header.css"
import avatar from '../../assets/avatar.png'
import { BiBell } from "react-icons/bi";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [count, setcount] = useState(1)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='navbar-cutome'>
            <div className="main-topbar d-flex justify-content-between">
                <div className="left-menu d-flex ">
                    <div className='m-2'>
                        <img alt='logo' src={Logo} style={{ height: "55px" }} className="small_logo" />
                    </div>
                    </div>
                    <div className="right-menu d-flex text-light">
                    <div className="dropdown d-flex justify-content-center align-items-center"
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
                    </div>
                    <div className="dropdown d-flex justify-content-center align-items-center login-user m-4">
                        <img src={avatar}
                            alt="admin"
                            className="img-responsive rounded-circle me-2"
                            style={{ float: "left" }}
                            onClick={() => handleShow()}
                        />
                        <Modal show={show}
                            onHide={handleClose}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title className="fs-5 ms-3 text-dark">Upload Profile Picture</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="px-3"
                                // onSubmit={submitHandler}
                                >

                                    <div className="form-group mb-3">
                                        <input
                                            id="file-input"
                                            type="file"
                                            accept=".png,.jpg,.jpeg"
                                            // onChange={(e) => setSelectedFile(e.target.files[0])}
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="form-group text-left mt-3">
                                        <Button
                                            variant="primary"
                                            type="submit">
                                            Upload
                                        </Button>
                                    </div>

                                </form>

                            </Modal.Body>
                        </Modal>
                        <div className="dropdown-toggle"
                            id="dropdownMenu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ cursor: "pointer" }}>
                           <p className="text-light"
                                style={{ fontSize: "15px", float: "left", marginTop: "10px" }}>
                                Admin
                            </p>

                        </div>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu" >
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header