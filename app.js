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
