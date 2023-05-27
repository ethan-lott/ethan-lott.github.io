// Get all the navigation links
var navLinks = document.querySelectorAll("nav ul li a");

// Attach event listeners to each navigation link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    openTab(this.getAttribute("href").substring(1));
  });
}

// JavaScript to handle tab switching
function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab");

  // Hide all tab content
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";
}

//Open first tab by default
openTab('home');
