var growth_options = {
  series: [
    {
      name: "$",
      data: [0, 10,20,14,11,22,50,70,100,400,60,77, 100, 200, 400, 800, 1600, 3200],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    foreColor: "#666F76",
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2, // Set line width to 1px
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // Hide row background colors
      opacity: 0.5,
    },
    borderColor: "transparent", // Hide grid borders
  },
  markers: {
    size: 5, // Size of the markers
    colors: ["#0D99FF"], // Color of the markers
    strokeColor: "#fff", // Border color of the markers
    strokeWidth: 2, // Border width of the markers
    hover: {
      size: 7, // Size of the marker on hover
    }
  },
  xaxis: {
    categories: [
      "3 Jan",
      "7 Jan",
      "11 Jan",
      "15 Jan",
      "19 Jan",
      "23 Jan",
      "27 Jan",
      "31 Jan",
    ],
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function (value) {
        return value; // Return only the value
      },
    },
    x: {
      show: false, // Hide the x-axis category in the tooltip
    },
    marker: {
      show: true, // Show the marker in the tooltip
    },
    theme: "dark", // Optional: Set the theme to 'light' or 'dark'
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var value = series[seriesIndex][dataPointIndex];
      return (
        '<div class="line-chart-custom-tooltip">' +
        '<span class="custom-value">' +
        value +
        "</span>" +
        "</div>"
      );
    },
  },
};

var growth_chart = new ApexCharts(
  document.querySelector("#growth_chart"),
  growth_options
);
growth_chart.render();
