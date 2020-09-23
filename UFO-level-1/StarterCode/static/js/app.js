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

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // clear html table
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // filter datetime by value property
  filteredData = tableData.filter(ufo => ufo.datetime === inputValue)
 
  // run table loop again to create filtered table
  filteredData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}