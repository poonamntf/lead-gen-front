import React from 'react'
import { Link } from 'react-router-dom'
import { FiBarChart2, FiHeart, FiUsers } from 'react-icons/fi'
const Card = () => {
  return (
   <>
    <div className='col-md-4 col-xl-4'>
                <div className="widget-rounded-circle card-box">
                    <Link to="/customer/listing">
                        <div className="row">
                            <div className="col-6">
                                <div className="avatar-lg avatar-banks rounded-circle d-flex justify-content-center align-items-center">
                                    <FiUsers className='font-22 avatar-title' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-end">
                                    <h4 className="mt-1 text-light">100</h4>
                                    <p className="text-light mb-1 text-truncate" style={{ fontSize: "15px" }}>
                                       Total Users
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
            <div className='col-md-4 col-xl-4'>
                <div className="widget-rounded-circle card-box">
                    <Link to="/officer/listing">
                        <div className="row">
                            <div className="col-6">
                                <div className="avatar-lg avatar-chart rounded-circle d-flex justify-content-center align-items-center">
                                    <FiBarChart2 className='font-22 avatar-title' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-end">
                                    <h4 className="mt-1 text-light">70</h4>
                                    <p className="text-light mb-1 text-truncate" style={{ fontSize: "15px" }}>
                                       Active Users
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
            <div className='col-md-4 col-xl-4'>
                <div className="widget-rounded-circle card-box">
                    <Link to="/truck">
                        <div className="row">
                            <div className="col-6">
                                <div className="avatar-lg avatar-heart rounded-circle d-flex justify-content-center align-items-center">
                                    <FiHeart className='font-22 avatar-title' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-end">
                                    <h4 className="mt-1 text-light">20</h4>
                                    <p className="text-light mb-1 ">Inactive Users</p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
   </>
  )
}

export default Card