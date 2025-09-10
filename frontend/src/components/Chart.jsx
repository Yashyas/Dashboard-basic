import React from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ data }) {
  if (!data) return <p>No data</p>;

  const options = {
    chart: {
      type: "donut",
      height: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    labels: data.labels,
    colors: data.colors || [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#A020F0",
    ],
    legend: {
      position: "right",
      markers: {
        shape: "circle",
      },
      formatter: function (seriesName, opts) {
        const value = opts.w.globals.series[opts.seriesIndex];
        return `${seriesName} (${value})`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20, // pushes "Total" below
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: "bold",
              offsetY: -10, // pulls number above
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "12px",
              color: "#333",
              formatter: (w) => {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ReactApexChart
        options={options}
        series={data.series}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Chart;
