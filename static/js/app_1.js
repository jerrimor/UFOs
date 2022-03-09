//importing data into our data.js file
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear out existing data
    tbody.html("");

    //loop through each object in the data and append
    data.forEach((dataRow)=> {
        //append a row to the table
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        });
    });
}
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //rebuild the table 
    buildTable(filteredData);
}
//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page initially loads
buildTable(tableData);

