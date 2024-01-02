// function createTable() {
//     //Write your code here
  
// }


// script.js
function createTable() {
    // Prompt for the number of rows
    const rowCount = parseInt(prompt('Input number of rows'));

    // Prompt for the number of columns
    const colCount = parseInt(prompt('Input number of columns'));

    if (isNaN(rowCount) || isNaN(colCount) || rowCount <= 0 || colCount <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
    }

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing rows and columns
    table.innerHTML = '';

    // Create rows and columns based on user input
    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < colCount; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
        }
    }
}
