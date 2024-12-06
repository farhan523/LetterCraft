import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadicalChart({ score }) {
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          size: "65%",
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "32px",
            show: false,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        gradientToColors: ["#FDEB1D", "#A4E2B4"], // Colours at end points
        stops: [0, 46, 52, 69, 100], // Stops for blending
        colorStops: [
          {
            offset: 0,
            color: "rgba(247,153,28,1)", // Start point (orange)
          },
          {
            offset: 46,
            color: "rgba(247,153,28,1)", // Orange midpoint
          },
          {
            offset: 52,
            color: "rgba(253,235,29,1)", // Yellow midpoint
          },
          {
            offset: 69,
            color: "rgba(164,226,180,1)", // Light green midpoint
          },
        ],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["509"],
  };

  const series = [509]; // Adjust the percentage (509/600 * 100)

  return (
    <div style={{ textAlign: "center" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={250}
      />
      <div className="chart-score">
        <p style={{ fontSize: 20, fontWeight: 500 }}>{score}</p>
        <p style={{ fontSize: 7, color: "#636363", marginTop: 5 }}>
          Suggested: 600
        </p>
      </div>
    </div>
  );
}
