// 1. Button Click: Change text and color
document.getElementById("clickButton").addEventListener("click", function() {
    const button = document.getElementById("clickButton");
    button.textContent = "You Clicked Me!";
    button.style.backgroundColor = "#28a745";  // Change to green
});

// 2. Hover Effect on Image
document.getElementById("hoverImage").addEventListener("mouseover", function() {
    this.style.border = "5px solid #ff5733";  // Add a border on hover
});

document.getElementById("hoverImage").addEventListener("mouseout", function() {
    this.style.border = "none";  // Remove border
});

// 3. Keypress Detection
document.getElementById("keypressInput").addEventListener("keyup", function(event) {
    console.log(`You typed: ${event.target.value}`);
});

// 4. Secret Action: Double Click
document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("You found the secret action! 🎉");
});

// Bonus: Long Press (Detecting press longer than 1 second)
let pressTimer;
document.getElementById("secretButton").addEventListener("mousedown", function() {
    pressTimer = setTimeout(function() {
        alert("Long Press Detected!");
    }, 1000);  // Trigger after 1 second
});

document.getElementById("secretButton").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);  // Cancel if released before 1 second
});

// 5. Image Gallery: Change image when clicked
const galleryImages = document.querySelectorAll("#gallery img");
galleryImages.forEach(image => {
    image.addEventListener("click", function() {
        alert(`You clicked on ${this.alt}`);
    });
});

// 6. Tabs (Accordion Style)
function switchTab(tabId) {
    const tabs = document.querySelectorAll(".tabContent");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
}
