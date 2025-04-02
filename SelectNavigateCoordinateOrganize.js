document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {name: "A", value: 30},
        {name: "B", value: 80},
        {name: "C", value: 45},
        {name: "D", value: 60},
        {name: "E", value: 20}
    ];

    // Initialize visualizations
    initVisualization('#visualization1', data);
    initVisualization('#visualization2', data);

    // Organize Data
    document.getElementById('organize').addEventListener('click', () => {
        const sortedData = data.sort((a, b) => d3.descending(a.value, b.value));
        initVisualization('#visualization1', sortedData);
        initVisualization('#visualization2', sortedData);
    });
});

function initVisualization(selector, data) {
    const svg = d3.select(selector)
        .html("") // Clear existing visualization
        .append("svg")
        .attr("width", 600)
        .attr("height", 300);

    const margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    x.domain(data.map(d => d.name));
    y.domain([0, d3.max(data, d => d.value)]);

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.value))
        .on("click", d => alert(`You clicked ${d.name} with value ${d.value}`));
}
