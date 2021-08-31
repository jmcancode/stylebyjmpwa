import React from "react";
import { Bar } from "react-chartjs-2";

export default function UnitsChart() {
  const data = {
    labels: ["Russey", "Matt", "David", "Diego", "Luis"],
    datasets: [
      {
        label: "Start 2021",
        data: [10, 10, 10, 10, 10],
        backgroundColor: ["#c60000"],
      },
      {
        label: "End 2021",
        data: [2, 4, 8, 1, 10],
      },
    ],
  };

  return <Bar data={data} />;
}
