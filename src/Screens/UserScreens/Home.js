import React from "react";
import Topbar from "../../components/Topbar";
import MainContent from "../../components/MainContent";
import Bluediv from "../../components/Bluediv";
import WhiteDiv from "../../components/WhiteDiv";
import SecondBlueDiv from "../../components/SecondBlueDiv";

const Home = () => {
  return (
    <div className="w-100">
      <Topbar />
      <MainContent />
      <Bluediv />
      <WhiteDiv />
      <SecondBlueDiv />
    </div>
  );
};

export default Home;
