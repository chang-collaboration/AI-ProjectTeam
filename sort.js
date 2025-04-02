// Sample dataset
let data = [
    { name: 'Item A', value: 100 },
    { name: 'Item B', value: 150 },
    { name: 'Item C', value: 200 },
    // Add more items as needed
];

// Function to render data to table
function renderData() {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(item => {
        let row = tableBody.insertRow();
        let cellName = row.insertCell(0);
        let cellValue = row.insertCell(1);
        cellName.textContent = item.name;
        cellValue.textContent = item.value;
    });
}

// Function to sort data in ascending order
function sortDataAscending() {
    data.sort((a, b) => a.value - b.value);
    renderData();
}

// Function to sort data in descending order
function sortDataDescending() {
    data.sort((a, b) => b.value - a.value);
    renderData();
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderData(); // Initial render
    document.getElementById('sort-asc-btn').addEventListener('click', sortDataAscending);
    document.getElementById('sort-desc-btn').addEventListener('click', sortDataDescending);
});
