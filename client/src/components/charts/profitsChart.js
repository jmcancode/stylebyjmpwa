import React from "react";
import { Bar } from "react-chartjs-2";

export default function ProfitChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Profit 2021",
        data: [13, 12, 11, 17, 19],
        backgroundColor: ["#171717"],
      },
      {
        label: "Loss 2021",
        data: [2, 4, 8, 12, 10],
      },
    ],
  };

  return <Bar data={data} />;
}
