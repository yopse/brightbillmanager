import React, { useContext } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { BudgetBaseContext } from "../context/BudgetBaseContext";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LineChart = () => {
  const { expenses, budget } = useContext(BudgetBaseContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bill Analysis",
        backgroundColor: "rgb(234, 255, 99)",
        borderColor: "rgb(255, 99, 132)",
        data: [totalExpenses],
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="mt-3 text-center">Bill Analysis</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
