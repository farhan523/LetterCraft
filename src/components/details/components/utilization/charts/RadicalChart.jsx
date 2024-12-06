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
        startAngle: -90,
        endAngle: 90,
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
        gradientToColors: undefined,
        stops: [0, 50, 100], // 3 distinct stops
        colorStops: [
          {
            offset: 0,
            color: "#00A9CE", // First segment (blue)
          },
          {
            offset: 50,
            color: "#002D72", // Second segment (dark blue)
          },
          {
            offset: 100,
            color: "#AE1C28", // Third segment (red)
          },
        ],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["509"],
  };

  const series = [100]; // Adjust to the percentage (e.g., 75%)

  return (
    <div style={{ textAlign: "center" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={250}
      />
      <div className="utilization-chart-score">
        <p style={{ fontSize: 7, color: "#636363", marginTop: 5 }}>Total</p>
        <p style={{ fontSize: 20, fontWeight: 500 }}>${score}</p>
      </div>
    </div>
  );
}
