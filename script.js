// script.js
const organizations = [
    { name: "Amnesty International", region: "Global", issue: "Human Rights" },
    { name: "Human Rights Watch", region: "Global", issue: "Human Rights" },
    { name: "UNHCR", region: "Global", issue: "Refugee Assistance" },
    { name: "Committee to Protect Journalists", region: "Global", issue: "Press Freedom" },
    { name: "Freedom House", region: "Global", issue: "Democracy and Freedom" },
    // Add more organizations as needed
];

function loadOrganizations() {
    const orgList = document.getElementById("orgList");
    orgList.innerHTML = "";

    organizations.forEach((org) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${org.name}</strong><br>Region: ${org.region}<br>Issue: ${org.issue}`;
        orgList.appendChild(li);
    });
}

function searchOrganizations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filtered = organizations.filter((org) =>
        org.name.toLowerCase().includes(input) ||
        org.region.toLowerCase().includes(input) ||
        org.issue.toLowerCase().includes(input)
    );

    const orgList = document.getElementById("orgList");
    orgList.innerHTML = "";

    filtered.forEach((org) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${org.name}</strong><br>Region: ${org.region}<br>Issue: ${org.issue}`;
        orgList.appendChild(li);
    });
}


// Load organizations on page load
window.onload = loadOrganizations;
