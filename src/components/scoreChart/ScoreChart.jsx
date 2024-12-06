import React from "react";
import "./scorechart.css";
import transUnionLogo from "../../assets/image 158.png";
import experianLogo from "../../assets/image 159.png";
import equifaxLogo from "../../assets/image 160.png";
import RadicalChart from "./charts/RadicalChart";

// ScoreContainer Component: Displays individual company scores and details
function ScoreContainer(props) {
  const { logo, score, avgScore, topScore, lastUpdated } = props; // Destructuring props

  return (
    <div className="scoreContainer">
      {" "}
      {/* Container for an individual score card */}
      <img
        src={logo}
        style={{ width: "89px", height: 30, paddingTop: 10, paddingLeft: 10 }}
      />
      {/* Display the RadicalChart with the score */}
      <RadicalChart score={score} />
      <div style={{ alignSelf: "center", width: "190px" }}>
        {" "}
        {/* Container for average and top scores */}
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 9,
            color: "#636363",
            marginTop: 30,
            justifyContent: "space-around",
          }}
        >
          {/* Average Score Section */}
          <div
            style={{
              borderRight: "2px solid #EFF1F3", // Vertical separator
              paddingRight: 7,
              width: "45%",
            }}
          >
            <p>Avg.Score : {avgScore}</p>
          </div>
          {/* Top Score Section */}
          <p>Top.Score : {topScore}</p>
        </div>
        {/* Last updated section */}
        <p
          style={{
            fontSize: 10,
            color: "#71717A",
            marginLeft: 40,
            fontFamily: "Inter",
            marginTop: 10,
          }}
        >
          Last updated : {lastUpdated}
        </p>
      </div>
    </div>
  );
}

// List of company details for TransUnion, Experian, and Equifax
let companyDetailsList = [
  {
    logo: transUnionLogo,
    score: 509,
    avgScore: 508,
    topScore: 600,
    lastUpdated: "11/19/2024",
  },
  {
    logo: experianLogo,
    score: 509,
    avgScore: 508,
    topScore: 600,
    lastUpdated: "11/19/2024",
  },
  {
    logo: equifaxLogo,
    score: 509,
    avgScore: 508,
    topScore: 600,
    lastUpdated: "11/19/2024",
  },
];

// ScoreChart Component: Main component to display scores for all companies
export default function ScoreChart() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* Map over the company details list and render a ScoreContainer for each */}
      {companyDetailsList.map((company) => {
        return (
          <ScoreContainer
            key={company.logo} // Unique key for each ScoreContainer
            logo={company.logo} // Company logo
            score={company.score} // Current score
            avgScore={company.avgScore} // Average score
            topScore={company.topScore} // Top score
            lastUpdated={company.lastUpdated} // Last updated date
          />
        );
      })}
    </div>
  );
}
