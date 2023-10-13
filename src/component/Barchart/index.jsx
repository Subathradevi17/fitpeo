import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";

const barChartOptions = {
  chart: {
    type: "bar",
    height: 365,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const MonthlyBarChart = () => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series] = useState([
    {
      data: [8, 6, 10, 8, 9, 4, 9, 10, 9, 8, 8, 8],
    },
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#5a32ea",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
        "#e7dbff",
      ],
      xaxis: {
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              primary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, info, secondary]);

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={275}
      />
    </div>
  );
};

export default MonthlyBarChart;
