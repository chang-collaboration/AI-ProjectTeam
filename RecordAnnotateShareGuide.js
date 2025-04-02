document.addEventListener('DOMContentLoaded', function() {
    const data = [10, 15, 20, 25, 30];
    const actionsRecord = [];

    const svg = d3.select("#visualization").append("svg")
        .attr("width", 600)
        .attr("height", 300);

    svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", (d, i) => 100 + i * 100)
        .attr("cy", 150)
        .attr("r", d => d)
        .attr("fill", "steelblue")
        .on("click", function(event, d) {
            const annotation = prompt("Add annotation for value: " + d);
            actionsRecord.push({action: "annotate", value: d, note: annotation});
            d3.select("#annotationArea").text(d3.select("#annotationArea").text() + `Value ${d}: ${annotation}\n`);
        });

    document.getElementById("recordBtn").addEventListener("click", () => {
        alert("Recorded actions:\n" + JSON.stringify(actionsRecord, null, 2));
    });

    document.getElementById("shareBtn").addEventListener("click", () => {
        const dataToShare = {
            data: data,
            annotations: actionsRecord
        };
        navigator.clipboard.writeText(JSON.stringify(dataToShare))
            .then(() => alert("Visualization data and annotations copied to clipboard!"))
            .catch(err => console.error('Error sharing data:', err));
    });

    document.getElementById("guideBtn").addEventListener("click", () => {
        alert("Guide:\n- Click on a circle to annotate.\n- Click 'Record Actions' to see all interactions.\n- Click 'Share Visualization' to copy data and annotations.\n- Use the textarea to see annotations.");
    });
});
