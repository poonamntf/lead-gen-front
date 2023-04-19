import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeads } from '../../redux/actions/adminAction'
import CSVReader from 'react-csv-reader';
import Dashboard from './Dashboard/Dashboard';

const AdminHome = () => {
    const [data, setData] = useState([]);

    const dispatch = useDispatch()
    const { leadsData } = useSelector((state) => state.leadsData)

    console.log("leadsData in component", leadsData);
    // console.log("data", data);

    useEffect(() => {
        dispatch(getLeads())
    }, [dispatch])

    const handleFileUpload = (fileData) => {
        setData(fileData);
    };

    return (
        <>
        <div className='container'>
              <div className='row'>
                    <div className='col-12'>
                        <div className='page-title-box'>
                            <div className='page-title-right'></div>
                            <div className='custom_navbar d-flex m-4'>
                            <div  className='menu me-3'>Dashboard</div>
                           <div className='menu me-3'>All leads</div>
                           <div className='menu me-3'>Customer</div>
                        </div>
                        </div>
                    </div>
                </div>
        
        <div className='content-page position-relative' id="content" >
      
        <div className='content mb-xl-5'>
            <div className='container-fluid'>
               
                <div className='row'>
                   <Dashboard/>
                   
                </div>
                <div className='row'>
                  
                </div>
                <div className='row' style={{ marginBottom: "70px" }}>
                   
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </div>
    </div>
    </>
    )
}

export default AdminHome