import React, { useState } from "react";
import Details from "../components/details/Details";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import ScoreChart from "../components/scoreChart/ScoreChart";
import Menu from "../components/sideMenu/Menu";
import Stats from "../components/stats/Stats";
import CreditScoreCard from "../components/creditScoreHistory/CreditScoreCard";

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="child leftMenu">
          <Menu />
        </div>
        <div className="child rightSection">
          <Navbar />
          <Header setIsMenuOpen={setIsMenuOpen} />
          <ScoreChart />
          <Stats />
          <Details />
        </div>
      </div>
      {/* Side Menu */}
      {isMenuOpen && <CreditScoreCard setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
}

export default Dashboard;
