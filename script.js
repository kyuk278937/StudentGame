const Groups = ["Всі", "10-А", "10-Б"];

const Dropdown = document.getElementById("groups-dropdown");
    
Groups.forEach(Group => {
    const anchor = document.createElement("a");
    anchor.textContent = Group;
    anchor.href = "#";
    Dropdown.appendChild(anchor);
});