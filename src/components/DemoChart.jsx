import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../utils/Data";
import BarChart from "./Charts";
Chart.register(CategoryScale);

export default function DemoChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.label),
    datasets: [
      {
        label: "Students",
        data: Data.map((data) => data.value),
        backgroundColor: ["#ffebeb", "#ffebeb", "#ffebeb"],
        borderColor: "#f74040",
        borderWidth: 0.5,
      },
    ],
  });

  return (
    <div>
      <BarChart chartData={chartData} />
    </div>
  );
}
