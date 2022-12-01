import results from "./src/index";

console.log(results);

let tableData = "";
Object.keys(results).forEach((key) => {
  tableData = tableData + `<tr><td>${key}:</td><td>${results[key]}</td></tr>`;
});

document.getElementById("app").innerHTML = `
  <h1>Results</h1>
  <table>${tableData}</table>
`;
