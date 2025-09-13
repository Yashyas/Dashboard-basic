import React from "react";
import ReactApexChart from "react-apexcharts";

function RiskGraph({ data }) {
  const { labels, series, colors } = data;

  const total = series.reduce((a, b) => a + b, 0);

  // Build series as separate items so each gets its color
  const chartSeries = labels.map((label, idx) => ({
    name: label,
    data: [series[idx]],
  }));

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%", 
        borderRadius: 6,
      },
    },
    colors,
    xaxis: {
      categories: [""],
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val, opts) =>
          `${labels[opts.seriesIndex]}: ${val} vulnerabilities`,
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Total vulnerabilities */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xl font-bold">{total}</span>
        <span className="text-gray-500 text-sm sm:text-base">
          Total Vulnerabilities
        </span>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[20px] max-h-[30px] ">
        <ReactApexChart
          options={options}
          series={chartSeries}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>

      {/* Custom Legend */}
      <div className="flex flex-wrap gap-3 mt-2 text-xs ">
        {labels.map((label, idx) => (
          <div key={idx} className="flex items-center">
            <span
              className="w-3 h-3 mr-2 rounded"
              style={{ backgroundColor: colors[idx] }}
            ></span>
            <span>
              {label} ({series[idx]})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiskGraph;
