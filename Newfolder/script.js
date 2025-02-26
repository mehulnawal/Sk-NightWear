// Function to load an external HTML file into a specified div
function loadComponent(divId, filePath) {
    fetch(filePath)
        .then(response => response.text())  // Convert response to text
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load header and footer
loadComponent("header", "/Newfolder/head.html");
loadComponent("footer", "/Newfolder/footer.html");
