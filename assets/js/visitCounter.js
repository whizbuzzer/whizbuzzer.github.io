/*
 * For viewer counter:
 */


// DOM querySelector() to match the container using JavaScript:
var counterContainer = document.querySelector(".website-counter");

// Retrieve visitor count using localStorage.getItem():
var visitCount = localStorage.getItem("page_view");

// Check if "page_view" entry is present:
if (visitCount) {
    // Increment visitCount and update localStorage:
    visitCount = Number(visitCount) + 1;

    // Update localStorage value:
    localStorage.setItem("page_view", visitCount);
} else {
    // Initialize visitor count to 1 in localStorage if entry is not found:
    visitCount = 1;

    // Add entry for key="page_view":
    localStorage.setItem("page_view", 1);
}

// Display visitCount on page using element.innerHTML:
counterContainer.innerHTML = visitCount;