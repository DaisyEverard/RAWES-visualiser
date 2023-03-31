// DATA PROCESSING
// PIECHART 1
// number of each type of service
const getPieChartNumServices = (date) => {
    $('#pie-chart-1').text("")
    let local = localStorage.getItem("rawesForms");
    if (local) {
      local = JSON.parse(local);
      let index = "";
      local.forEach((set, ind) => {
        if(set[0] === date) {
          index = ind; 
        }
      })
  
      let serviceCount = [0,0,0,0]
      local[index].forEach(service => {
        const serviceType = service.serviceType;
  
        if (serviceType === "provisioning") {
          serviceCount[0] += 1; 
        } else if (serviceType === "regulating") {
          serviceCount[1] += 1; 
        } else if (serviceType === "cultural") {
          serviceCount[2] += 1; 
        }else if (serviceType === "supporting") {
          serviceCount[3] += 1; 
        }
      })
  
      var xValues = ["Provisioning", "Regulating", "Cultural", "Supporting"];
  var yValues = [serviceCount[0], serviceCount[1], serviceCount[2], serviceCount[3]];
  var barColors = [
    "#007009",
    "#3cc5f3",
    "#cdcd12",
    "#690c0c"
  ];
  new Chart("pie-chart-1", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Number of services of each type"
      }
    }
  });
    }
  }
  
  // PIECHART 2
  // combined values of each service type
  const getPieChartValServices = (date) => {
    $('#pie-chart-2').text("")
    let local = localStorage.getItem("rawesForms");
    if (local) {
      local = JSON.parse(local);
      let index = "";
      local.forEach((set, ind) => {
        if(set[0] === date) {
          index = ind; 
        }
      })
  
      let serviceCount = [0,0,0,0]
      if (index !== "") {
        console.log(local[index]); 
        local[index].forEach(service => {
          const serviceType = service.serviceType;
          const value = parseFloat(service.value)
    
          if (serviceType === "provisioning") {
            serviceCount[0] += value; 
          } else if (serviceType === "regulating") {
            serviceCount[1] += value; 
          } else if (serviceType === "cultural") {
            serviceCount[2] += value; 
          }else if (serviceType === "supporting") {
            serviceCount[3] += value; 
          }
        })
      }
  
      var xValues = ["Provisioning", "Regulating", "Cultural", "Supporting"];
  var yValues = [serviceCount[0], serviceCount[1], serviceCount[2], serviceCount[3]];
  var barColors = [
    "#007009",
    "#3cc5f3",
    "#cdcd12",
    "#690c0c"
  ];
  new Chart("pie-chart-2", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Value of services of each type"
      }
    }
  });
    }
  }
  