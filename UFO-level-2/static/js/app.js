// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var tr = d3.select("tr")

// function filter(inputValue) {
//     for (var i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             datefilter = td.value 
//             tr[i].style.display = "";}
//             else { tr[i].style.display = "none";}
//         }
//     }


// console.log the ufo data from data.js
console.log(tableData);

tableData.forEach((ufoInfo) => {
  var row = tbody.append("tr");
  Object.entries(ufoInfo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
var form = d3.select("#form");
// // var inputField = d3.select("#datetime");
// // console.log(inputField);

// // Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
  tbody.html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");


  // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");

  // Print the value to the console
  console.log(dateValue, cityValue, stateValue, countryValue, shapeValue);

  if (dateValue) {
    var filteredData = tableData.filter(ufo => ufo.datetime === dateValue);
  }

  else {
    var filteredData = tableData;
  }

  if (cityValue) {
    filteredData = filteredData.filter(ufo => ufo.city === cityValue);
  }

  if (stateValue) {
    filteredData = filteredData.filter(ufo => ufo.state === stateValue);
  }

  if (countryValue) {
    filteredData = filteredData.filter(ufo => ufo.country === countryValue);
  }

  if (shapeValue) {
    filteredData = filteredData.filter(ufo => ufo.shape === shapeValue);
  }


  filteredData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
//   function dateInput(ufoInfo) {
//     return ufoInfo.datetime == dateValue;
// }
//   dateData = tableData.filter(dateInput);
//   console.log(dateData);

//   dateData.forEach((ufoInfo) => {

//     var row = tbody.append("tr");
//     Object.entries(ufoInfo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   function cityInput(ufoInfo) {
//     return ufoInfo.city == cityValue;
//   }

//   cityData = dateData.filter(cityInput);
//   console.log(cityData);
//   cityData.forEach((ufoInfo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoInfo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   function stateInput(ufoInfo) {
//     return ufoInfo.state == stateValue;
//   }
//   stateData = cityData.filter(stateInput);
//   console.log(stateData);

//   stateData.forEach((ufoInfo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoInfo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   function countryInput(ufoInfo) {
//     return ufoInfo.country == countryValue;
//   }
//   countryData = stateData.filter(countryInput)
//   console.log(countryData);
//   countryData.forEach((ufoInfo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoInfo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   function shapeInput(ufoInfo) {
//     return ufoInfo.shape == shapeValue;
//   }
//   shapeData = countryData.filter(shapeInput)
//   console.log(shapeData)
// //   function selectDate(ufo) {
// //     return ufo.datetime == inputValue;
// //     console.log(ufo.datetime)
//     shapeData.forEach((ufoInfo) => {
//         var row = tbody.append("tr");
//         Object.entries(ufoInfo).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });
//     }