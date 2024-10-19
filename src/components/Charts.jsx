import { Bar } from "react-chartjs-2";

export default function BarChart({ chartData }) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
        height={500}
      />
    </div>
  );
}
