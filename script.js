// Get references to the character and enemy elements using their class names
var character = document.querySelector(".character");
var ennemie = document.querySelector(".ennemie");
// Function to make the character jump
function jump() {
    // Check if the character is not already in the middle of an animation
    if (character.classList != "animation") {
        // Add the 'animation' class to trigger the jump animation
        character.classList.add('animation');
    }
    // Remove the 'animation' class after a delay to complete the jump animation
    setTimeout(function () {
        character.classList.remove('animation');
    }, 500);
}

// Event listener for the spacebar keydown event to trigger the jump function
document.addEventListener('keydown', function (event) {
        // Call the jump function when the spacebar is pressed
        jump();
});

// Check for collision between the character and the enemy
var verification = setInterval(function () {
    // Get the current top position of the character and left position of the enemy
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var ennemieLeft = parseInt(window.getComputedStyle(ennemie).getPropertyValue("left"));

    // Check if the ennemie is within a specific range on the x-axis and if the character is at a specific height
    if (ennemieLeft < 25 && ennemieLeft > 0 && characterTop >= 70) {
        // Stop the enem animation
        ennemie.style.animation = "none";
        // Display an alert indicating that the player has lost
        alert("YOU HAVE LOST!");
    }
}, 1);