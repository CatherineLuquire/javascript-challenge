// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
var tr = d3.select("tr")

// console.log the ufo data from data.js
console.log(tableData);

// use loop to create table out of data file
// for each object in table data, create a row in the html table 
// and for each key, value, populate table data with the value.
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

// // Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
  tbody.html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input elements and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value properties of each input element
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");

  // Print the value to the console
  console.log(dateValue, cityValue, stateValue, countryValue, shapeValue);

  // use conditionals to filter through all data input values
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

  // run table loop again to create filtered table
  filteredData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
