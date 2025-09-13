import React from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ data }) {
  if (!data || data.series.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        {/* Example blank chart SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M9 17V9M15 17V13" />
        </svg>

        {/* No Data Logo/Text */}
        <p className="text-lg font-semibold">No Data Available</p>
      </div>
    );
  }

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
      labels: {
        // assign currentColor for each series dynamically
        colors: data.series.map(() => "currentColor"),
      },
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
              offsetY: 20,
              color: "currentColor", // uses parent text color
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: "bold",
              offsetY: -10,
              color: "currentColor",
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "12px",
              color: "currentColor",
              formatter: (w) =>
                w.globals.seriesTotals.reduce((a, b) => a + b, 0),
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-base-content">
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
