import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeads } from '../../redux/actions/adminAction'
import CSVReader from 'react-csv-reader';

const Home = () => {
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
        <div>
            <CSVReader
                cssClass="csv-reader-input"
                label=""
                onFileLoaded={handleFileUpload}
                // onError={handleDarkSideForce}
                // inputId="ObiWan"
                // inputName="ObiWan"
                inputStyle={{ color: 'red' }}
                parserOptions={{ header: true }}
            >
                <button>Upload CSV File</button>
            </CSVReader>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>EMail</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Type</th>
                        <th>Truck</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row['Officer ID']}</td>
                            <td>{row['Name']}</td>
                            <td>{row['Email Address']}</td>
                            <td>{row['Phone Number']}</td>
                            <td>{row['Gender']}</td>
                            <td>{row['DOB']}</td>
                            <td>{row['Officer Type']}</td>
                            <td>{row['Truck']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home