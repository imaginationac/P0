/*  script.js
*
*   Progress enhancement and general interactivy script for P0.
*   Author: Dorian Alexander Patterson
*/

// Select the container element via querySelector
let div = document.querySelector("#api_display");

// Asynchronously load PublicAPIs request (GET) via fetch
let getResponse = async function(){
    let resource = "https://api.publicapis.org/entries";
    let options = {method: "GET"};
    let response =  await (await fetch(resource, options)).json();
    let entries = response["entries"];

    // Create a table with count + 1 rows (the first is the column names);
    let table = document.createElement("table");
    table.id = "table";

    // Column names: API, Auth, Category, Cors, Description, HTTPS, Link
    let thead = document.createElement("thead");
    let theadTr = document.createElement("tr");

    // TODO: Populate column names directly from response.
    let columnNames = ["API", "Description", "Auth", "HTTPS", "Cors", "Link", "Category"];
    for(let i = 0; i < columnNames.length; i++){
        let element = document.createElement("td");
        element.textContent = columnNames[i];
        theadTr.appendChild(element);
    }

    thead.appendChild(theadTr);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // TODO: Populate table entries
    for(let i = 0; i < entries.length; i++){
        // Create a row for each entry
        let tr = document.createElement("tr");
        // Iterate through the entry, and create a cell for each key/value pair.
        for (const key in entries[i]) {
            if (Object.hasOwnProperty.call(entries[i], key)) {
                const element = entries[i][key];
                let td = document.createElement("td");
                td.textContent = element;
                // Append cells to row
                tr.appendChild(td);
            }
        }
        // Append row to table body
        tbody.appendChild(tr);
    }

    // Insert table into the document

    // TODO: Check if a table already exists. If yes, replace.

    div.appendChild(table);
    console.log(response);
}

getResponse();
