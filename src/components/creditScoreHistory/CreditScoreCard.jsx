import React, { useState } from "react";
import "./creditScoreCard.css";

export default function CreditScoreCard({ setIsMenuOpen }) {
  // Define tab data dynamically
  const tabs = ["TransUnion", "Experian", "Equifax"];

  // Define credit score history data for each tab
  const creditScoreData = {
    TransUnion: [
      { date: "November 9, 2024", score: 509 },
      { date: "November 5, 2024", score: 509 },
    ],
    Experian: [
      { date: "November 8, 2024", score: 525 },
      { date: "November 3, 2024", score: 523 },
    ],
    Equifax: [
      { date: "November 7, 2024", score: 540 },
      { date: "November 2, 2024", score: 535 },
    ],
  };

  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("TransUnion");
  return (
    <div className="sideMenu">
      {/* <button className="closeButton" >
        Close
      </button> */}
      <div className="credit-header">
        <button className="back-button" onClick={() => setIsMenuOpen(false)}>
          ->
        </button>
        <p>Credit Score History</p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content for Active Tab */}
      <div className="tab-content">
        {creditScoreData[activeTab].map((entry, index) => (
          <div key={index} className="score-entry">
            <span className="date">{entry.date}</span>
            <span className="score">{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
