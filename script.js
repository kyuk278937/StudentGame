const groups = ["Group 1", "Group 2", "Group 3", "Group 4"];

const dropdown = document.getElementById("groups-dropdown");
    
groups.forEach(group => {
    const anchor = document.createElement("a");
    anchor.textContent = group;
    anchor.href = "#";
    dropdown.appendChild(anchor);
});