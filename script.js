// Get the seed counter element
const seedCounter = document.getElementById('seed-counter');

// Initial seed count
let seedsDonated = 0;

// Update the seed counter
function updateSeedCounter() {
    seedCounter.textContent = seedsDonated;
}

// Increase seed count and update counter
function donateSeed() {
    seedsDonated++;
    updateSeedCounter();
}

// Virtual garden functionality
const garden = document.getElementById('virtual-garden');

function plantSeed() {
    const seed = document.createElement('div');
    seed.classList.add('seed');
    garden.appendChild(seed);
}

// Attach event listeners
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', donateSeed);

const plantButton = document.getElementById('plant-button');
plantButton.addEventListener('click', plantSeed);

// Show Donate modal
function showDonateModal() {
    const donateModal = document.getElementById('donate-modal');
    donateModal.style.display = 'block';
  }
  
  // Close Donate modal
  function closeDonateModal() {
    const donateModal = document.getElementById('donate-modal');
    donateModal.style.display = 'none';
  }
  
  // Show Plant modal
  function showPlantModal() {
    const plantModal = document.getElementById('plant-modal');
    plantModal.style.display = 'block';
  }
  
  // Close Plant modal
  function closePlantModal() {
    const plantModal = document.getElementById('plant-modal');
    plantModal.style.display = 'none';
  }
  