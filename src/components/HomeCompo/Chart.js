import React, { useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = ({ token }) => {
  const dispatch = useDispatch();

  // const options = {
  //     animationEnabled: true,
  //     theme: "light1", // "light1", "dark1", "dark2"
  //     toolTip: {
  //         enabled: "true",
  //         borderColor: "transparent",
  //         backgroundColor: "#000000c2",
  //         fontColor: "#fff",
  //     },
  //     data: [{
  //         type: "pie",
  //         indexLabel: "",
  //         toolTipContent: "{legendText}: <strong>{y}</strong>",
  //         startAngle: -90,
  //         dataPoints: [
  //             { y: 5, legendText: "Booked Leads", color: "#6658dd" },
  //             { y: 6, legendText: "New Leads", color: "green" }
  //         ]
  //     }]
  // }

  return (
    // <>
    //     <div className="col-lg-4">
    //         <h4 className="header-title mb-0 mt-3 ms-1">Merchant Type wise Requests</h4>
    //         <div className="card-box mt-2">
    //             <div className="widget-chart text-center" dir="ltr">
    //                 <div className="mt-3 chartjs-chart">
    //                     <CanvasJSChart options={options} containerProps={{ width: '100%', height: '300px' }} />
    //                 </div>

    //                 <div className="row mt-3">
    //                     <div className="col-6">
    //                         <p className="text-muted mb-1 text-truncate">Booked Leads</p>
    //                         {/* <h5>{typeWiseReq && typeWiseReq.merchantReq}</h5> */}
    //                     </div>
    //                     <div className="col-6">
    //                         <p className="text-muted mb-1 text-truncate">New Leads</p>
    //                         {/* <h5>{typeWiseReq && typeWiseReq.bankReq}</h5> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </>
    <div className="col-lg-4">
      <div className="leadstats">Leads Stats</div>
      <div className="circularbar">
        <CircularProgressbar
          strokeWidth={8}
          styles={buildStyles({
            pathColor: "#656AD0",
            textColor: "#656AD0",
          })}
          value={60}
          text={"Total leads \n 2500"}
        />
      </div>
    </div>
  );
};

export default Chart;
