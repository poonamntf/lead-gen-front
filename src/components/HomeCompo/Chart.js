import React, { useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import newleads from "../../assets/newleads.png";
import leadsbooked from "../../assets/leadsbooked.png";
import profilepicture from "../../assets/profilepicture1.png";

const Chart = ({ token }) => {
  const dispatch = useDispatch();

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

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between circularbarmaindiv">
        <div className="circularbardiv">
          <div className="leadstats mt-3">Leads Stats</div>
          <div className="circularbar mt-5">
            <CircularProgressbarWithChildren
              value={60}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "#656AD0",
                textColor: "#656AD0",
              })}
            >
              <div className="totalleads">Total Leads</div>
              <div className="totalleadsvalue">2500</div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="d-flex justify-content-between mt-3 ps-5 pe-5">
            <div>
              <img src={leadsbooked} /> Leeds Booked
            </div>
            <div>
              <img src={newleads} /> New Leads
            </div>
          </div>
        </div>
        <div className="d-flex  flex-column flex-wrap tablefromdashboard">
          <div>
            <div className="recentlyrecieved mt-3 mb-3">Recently Recieved</div>
          </div>
          <div className=" anothertablediv w-100">
            <table className="mb-5 pb-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data &&
                  data.slice(0, 4).map((item, i) => {
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
                            item.status == "booked" ? "booked" : "notinterested"
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
      </div>
    </div>
  );
};

export default Chart;
