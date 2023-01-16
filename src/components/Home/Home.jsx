import React from "react";
import Header from "../Constants/Header";
import LoginFooter from "../Login/LoginFooter";
import TabComponent from "./TabComponent";


function Home() {
  return (
    <div>
      <Header />
      <div>
        <TabComponent />
    </div>
    <LoginFooter />
    </div>
  );
}

export default Home;
