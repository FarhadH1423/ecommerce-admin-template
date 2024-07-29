(function ($) {
  /*
        1. Data Background Function
        2. Hide all other collapses
        3. Toggle sidebar
        4. Toggle small sidebar
        5. Show profile dropdown
        6. Show notification dropdown
        7. Hide dropdowns when clicking outside
        8. Hide sidebar and overlay
        9. Nice select
        10. Selling chart
        11. Growth chart box
        12. Show image for input type file
        13. Data table
        14. Attach the resize event handler using jQuery's 'on' method
        15. Wow Js
    */

  // 1. Data Background Function
  // 1.1 Data Background Set
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // Special color picker css
  document.addEventListener("DOMContentLoaded", function () {
    const colorPickers = document.querySelectorAll(".color-picker");
    const colorCodes = document.querySelectorAll(".color-code");

    colorPickers.forEach((colorPicker, index) => {
      const colorCode = colorCodes[index];

      function updateColor() {
        colorCode.value = colorPicker.value;
        colorCode.style.backgroundColor = colorPicker.value;
        colorCode.style.color = getContrastingColor(colorPicker.value);
      }

      function getContrastingColor(color) {
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "black" : "white";
      }

      colorPicker.addEventListener("input", updateColor);

      // Initialize color code input with default color
      updateColor();
    });
  });

  // 1.2 Data Background Color Set
  $("[data-background-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-background-color"));
  });

  // 2. Hide all other collapses
  $(".has-sublist a").on("click", function () {
    $(".collapse").not($(this).next(".collapse")).collapse("hide");
  });

  // 3. Toggle sidebar
  $(".gs-dash-sidebar-trigger-btn.hide-trigger").on("click", function () {
    $(".gs-dash-sidebar").toggleClass("hide");
    $(".gs-dash-header").toggleClass("full-width");
    $(".gs-dash-main-content").toggleClass("full-width");
    $(".gs-dash-overlay").toggleClass("show");
  });

  // 4. Toggle small sidebar
  $(".gs-dash-sidebar-trigger-btn.sm-trigger").on("click", function () {
    $(".gs-dash-sidebar").toggleClass("sm-sidebar");
    $(".gs-dash-header").toggleClass("sm-full-width");
    $(".gs-dash-main-content").toggleClass("sm-full-width");
  });

  // 5. Show profile dropdown
  $(".gs-dash-header .profile-btn").on("click", function (event) {
    $(".profile-dropdown").toggleClass("show");
    event.stopPropagation(); // Prevent click from propagating to document
  });

  // 6. Show notification dropdown
  $(".gs-dash-header .notification-btn").on("click", function (event) {
    $(".notification-dropdown").toggleClass("show");
    event.stopPropagation(); // Prevent click from propagating to document
  });

  // 7. Hide dropdowns when clicking outside
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".profile-dropdown, .profile-btn").length) {
      $(".profile-dropdown").removeClass("show");
    }
    if (
      !$(event.target).closest(".notification-dropdown, .notification-btn")
        .length
    ) {
      $(".notification-dropdown").removeClass("show");
    }
  });

  // 8. Hide sidebar and overlay
  $(".gs-dash-overlay").on("click", function () {
    $(".gs-dash-sidebar").removeClass("hide");
    $(this).removeClass("show");
  });

  // 9. Nice select
  $(".gs-dash-nice-select").niceSelect();

  // 10. Selling chart
  var sellingChart_Options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    colors: ["#0D99FF", "#FF7D34", "#27BE69"],
    series: [71, 63, 66],
    labels: ["Silver Package", "Gold Package", "Platinum Package"],
    stroke: {
      lineCap: "round",
    },
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        offsetX: -20,
        dataLabels: {
          name: {
            fontSize: "14px",
            color: "#404B53",
            fontWeight: "500",
          },
          value: {
            fontSize: "24px",
            color: "#1A2731",
            fontWeight: "700",
          },
          total: {
            show: true,
            label: "Active",
            formatter: function (w) {
              return 1000;
            },
          },
        },
      },
    },
    legend: {
      offsetY: -10,
      offsetX: 10,
      show: true,
      position: "right",
      containerMargin: {
        right: 0,
      },
      formatter: function (seriesName, opts) {
        var values = [600, 300, 100];
        return (
          '<span class="series-name">' +
          seriesName +
          "</span>" +
          '<h4 class="value-series">' +
          values[opts.seriesIndex] +
          "</h4>"
        );
      },
    },
  };

  var selling_chart_dom = $("#selling_packages_chart").get(0);

  if (selling_chart_dom) {
    var sellingChart = new ApexCharts(selling_chart_dom, sellingChart_Options);
    sellingChart.render();
  }

  // 11. Growth chart box
  var growth_options = {
    chart: {
      height: 280,
      type: "area",
      foreColor: "#666F76",
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    markers: {
      size: 5,
      colors: ["#0D99FF"],
      strokeColor: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
      borderColor: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
        formatter: (value) => {
          return "$" + value;
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return value;
        },
      },
      x: {
        show: false,
      },
      marker: {
        show: true,
      },
      theme: "light",
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
    colors: ["#0D99FF"],
  };

  var growth_chart_dom = $("#growth_chart").get(0);

  if (growth_chart_dom) {
    var growth_chart = new ApexCharts(growth_chart_dom, growth_options);
    growth_chart.render();
  }

  // 12. Show image for input type file
  $(".img-input").on("change", function (event) {
    const file = event.target.files[0];
    let img;

    // Check for the first structure
    let label = $(this).next(".choose-img-label");
    if (label.length > 0) {
      img = $(this).prev("label").find(".hero-img");
    } else {
      // Check for the second structure
      let imgWrapper = $(this).prev(".edit-img-wrapper");
      if (imgWrapper.length > 0) {
        img = imgWrapper.find(".hero-img");
      } else {
        // Check for the third structure
        let prevLabel = $(this).prev("label");
        if (prevLabel.length > 0) {
          img = prevLabel.find(".hero-img");
        }
      }
    }

    if (file && img.length > 0) {
      label.text(file.name);
      const reader = new FileReader();
      reader.onload = function (e) {
        img.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // 13. Data table
  $(".dash-data-table").DataTable({
    paging: true,
  });

  // 14. Attach the resize event handler using jQuery's 'on' method
  $(window).on("resize", function () {
    $(".gs-dash-sidebar").removeClass("sm-sidebar full-width hide");
    $(".gs-dash-header").removeClass("sm-full-width full-width");
    $(".gs-dash-main-content").removeClass("sm-full-width full-width");
    $(".gs-dash-overlay").removeClass("show");
  });

  // 15. Wow Js
  new WOW().init();
})(jQuery);
