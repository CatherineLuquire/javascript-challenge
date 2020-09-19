// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var tr = d3.select("tr")

function filter(inputValue) {
    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            datefilter = td.value 
            tr[i].style.display = "";}
            else { tr[i].style.display = "none";}
        }
    }

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
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  function selectDate(ufo) {
    return ufo.datetime == inputValue;
    

filter(inputValue);

}

// var datefilter = tableData.filter(selectDate)
// console.log(datefilter);
// td.forEach(filtering(datefilter));
// 
}