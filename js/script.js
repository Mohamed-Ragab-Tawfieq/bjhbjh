/********************** Statistics **********************/

// Pie Options
var pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: true,
      align: "bottom",
      backgroundColor: "#ccc",
      borderRadius: 3,
    },
  },
  legend: {
    display: true,
    rtl: true,
    textDirection: "rtl",
    position: "right",
  },
};

// Bar Options
var barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        barThickness: 15,
        ticks: {
          callback: function (values) {
            return values.substr(0, 12) + " ...";
          },
          minRotation: 90,
        },
        gridLines: {
          color: "rgba(0,0,0,0)",
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var ctxUsers = document.getElementById("users").getContext("2d");
var usersChart = new Chart(ctxUsers, {
  type: "pie",
  data: {
    labels: ["غير المفعلين 140", "المفعلين 150"],
    datasets: [
      {
        label: "# of Votes",
        data: [150, 140],
        backgroundColor: ["#EE4554", "#FFC400"],
        borderWidth: 1,
      },
    ],
  },

  options: pieOptions,
});

// Reactions
var ctxReactions = document.getElementById("reactions").getContext("2d");
var reactionsChart = new Chart(ctxReactions, {
  type: "pie",
  data: {
    labels: ["لم يعجبني 150", "اعجبني 100"],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 150],
        backgroundColor: ["#EE4554", "#FFC400"],
        borderWidth: 1,
      },
    ],
  },

  options: pieOptions,
});

// Comments
var ctxComments = document.getElementById("comments").getContext("2d");
var commentsChart = new Chart(ctxComments, {
  type: "pie",
  data: {
    labels: ["مرفوض 150", "مقبول 250"],
    datasets: [
      {
        label: "# of Votes",
        data: [250, 150],
        backgroundColor: ["#EE4554", "#FFC400"],
        borderWidth: 1,
      },
    ],
  },

  options: pieOptions,
});

// Actions
var ctxActions = document.getElementById("actions").getContext("2d");
var actionsChart = new Chart(ctxActions, {
  type: "pie",
  data: {
    labels: ["غير مفعلة 60", "مفعلة 85"],
    datasets: [
      {
        label: "# of Votes",
        data: [85, 60],
        backgroundColor: ["#EE4554", "#FFC400"],
        borderWidth: 1,
      },
    ],
  },

  options: pieOptions,
});

// Projects
var ctxProjects = document.getElementById("projects").getContext("2d");
var projectsChart = new Chart(ctxProjects, {
  type: "pie",
  data: {
    labels: ["مكتملة 10", "مقترحة 120", "جارية 100"],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 120, 10],
        backgroundColor: ["#EE4554", "#FFC400", "#2F4050"],
        borderWidth: 1,
      },
    ],
  },

  options: pieOptions,
});

// Total Reactions
var ctxTotalReactions = document
  .getElementById("totalReactions")
  .getContext("2d");
var totalReactionsChart = new Chart(ctxTotalReactions, {
  type: "line",
  responsive: true,
  maintainAspectRatio: false,

  data: {
    labels: [
      "ديسمبر",
      "نوفمبر",
      "اكتوبر",
      "سبتمبر",
      "اغسطس",
      "يوليو",
      "يونيو",
      "مايو",
      "ابريل",
      "مارس",
      "فبراير",
      "يناير",
    ],
    datasets: [
      {
        responsive: true,
        label: "اجمالي التفاعلات",
        data: [0, 0, 0, 0, 6, 0, 0, 0, 2, 0, 0, 0],
        fill: false,
        borderColor: "#FFC400",
        borderWidth: 4,
        backgroundColor: "#FFC400",
        pointBackgroundColor: "#FFC400",
        pointBorderColor: "#FFC400",
        pointHoverBackgroundColor: "#FFC400",
        pointHoverBorderColor: "#FFC400",
        pointRadius: 3,
        pointHoverRadius: 3,
      },
    ],
  },

  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    elements: {
      line: { tension: 0 },
    },
  },
});

// Most Reactions
var ctxMostReactions = document
  .getElementById("mostReactions")
  .getContext("2d");
var mostReactionsChart = new Chart(ctxMostReactions, {
  type: "bar",
  data: {
    labels: [
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
    ],
    datasets: [
      {
        responsive: true,
        maintainAspectRatio: false,
        label: "اجمالي التفاعلات",
        data: [75, 20, 30, 50, 25, 90, 70, 22],
        backgroundColor: "#EE4554",
      },
    ],
  },

  options: barOptions,
});

// Less Reactions
var ctxLessReactions = document
  .getElementById("lessReactions")
  .getContext("2d");
var lessReactionsChart = new Chart(ctxLessReactions, {
  type: "bar",
  data: {
    labels: [
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
      "تطوير قطارات ال…….",
    ],
    datasets: [
      {
        responsive: true,
        maintainAspectRatio: false,
        label: "اجمالي التفاعلات",
        data: [75, 20, 50, 25, 36, 90, 22, 66],
        backgroundColor: "#FFC400",
      },
    ],
  },

  options: barOptions,
});

/********************** Menu **********************/
// Mobile and Tablet (burger button on click)
$(document).ready(function () {
  if ($(window).width() <= 991) {
    $(".side-menu-wrapper").addClass("slide-out");

    $("#menu-btn").click(function () {
      $(".side-menu-wrapper").toggleClass("slide-in slide-out");
    });
  }
});


/********************** add project page **********************/
// Initialize and add the map
function initMap() {
  var long = document.getElementById('long');
  var lat = document.getElementById('lat');
  if(!long.value){
    long.value = 30.545033;
  }
  if(!lat.value){
    lat.value = 29.561725;
  }
  const myplace = { lat : parseFloat(lat.value), lng: parseFloat(long.value) };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: myplace,
  });
  const marker = new google.maps.Marker({
    position: myplace,
    map: map,
  });
}

