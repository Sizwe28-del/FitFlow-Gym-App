// Video player functionality
function playVideo(url) {
  window.open(url, '_blank');
}

// Plate calculator functionality
function calculatePlates() {
  const weight = document.getElementById("weight").value;
  if (weight) {
    const plateWeight = 20; // Assumes 20kg plates
    const platesNeeded = Math.floor(weight / plateWeight);
    document.getElementById("plates").innerText = `You need ${platesNeeded} plates of 20kg.`;
  } else {
    document.getElementById("plates").innerText = '';
  }
}
