// Sample dataset
let data = [
    { name: 'Item A', value: 100 },
    { name: 'Item B', value: 150 },
    { name: 'Item C', value: 200 },
    // Add more items as needed
];

// Function to render data to table
function renderData(filteredData = data) {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    filteredData.forEach(item => {
        let row = tableBody.insertRow();
        let cellName = row.insertCell(0);
        let cellValue = row.insertCell(1);
        cellName.textContent = item.name;
        cellValue.textContent = item.value;
    });

    // Assuming updateInsights is designed to work with the current dataset
    updateInsights(filteredData);
}


// Filter data based on name
function filterData() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(filterValue));
    renderData(filteredData);
}

// Sort data in ascending order
function sortDataAscending() {
    data.sort((a, b) => a.value - b.value);
    renderData();
}

// New function to sort data in descending order
// Function to sort data in descending order and render it
function sortDataDescending() {
    data.sort((a, b) => b.value - a.value);
    renderData(data); // Make sure this uses the global data array
}


// Update derived insights
function updateInsights(displayedData = data) {
    const averageValue = displayedData.reduce((acc, cur) => acc + cur.value, 0) / displayedData.length;
    document.getElementById('insights').textContent = `Average Value: ${averageValue.toFixed(2)}`;
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderData(); // Initial render
    document.getElementById('filter-btn').addEventListener('click', filterData);
    document.getElementById('sort-asc-btn').addEventListener('click', sortDataAscending);
    document.getElementById('sort-desc-btn').addEventListener('click', sortDataDescending);
});
