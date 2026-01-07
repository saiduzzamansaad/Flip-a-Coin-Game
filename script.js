// Select elements
const flipBtn = document.querySelector("#flip-btn");
const coinImage = document.querySelector("#coin");
const resultDisplay = document.querySelector("#result");

// Function to handle flipping
function flipCoin() {
    // Add a simple animation class if desired
    coinImage.style.transform = "rotateY(180deg)";
    
    // Generate random result
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    // Wait a tiny bit to simulate the "flip"
    setTimeout(() => {
        resultDisplay.textContent = result;
        coinImage.style.transform = "rotateY(0deg)";
    }, 150);
}

// Event Listeners
flipBtn.addEventListener("click", flipCoin);
coinImage.addEventListener("click", flipCoin);