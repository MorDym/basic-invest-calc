import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface IProps {
  className?: string;
  investData: {
    months: string[];
    values: number[];
  };
}

export const InvestChart: FC<IProps> = ({ className, investData }) => {
  return (
    <Line
      className={className}
      data={{
        labels: investData.months,
        datasets: [
          {
            label: "Růst Vaší investice",
            data: investData.values,
            borderWidth: 1,
            backgroundColor: "rgb(81,	97,	200, 0.3)",
            borderColor: "#494949",
            tension: 0.4,
            fill: true,
          },
        ],
      }}
      options={{
        layout: {
          padding: 40,
        },
        scales: {
          x: {
            ticks: {
              color: "#494949",
            },
          },
          y: {
            ticks: {
              color: "#494949",
            },
          },
        },
      }}
    />
  );
};
