<script type="text/javascript">// Function to handle smooth scrolling when clicking on navbar links
function smoothScroll(target) {
  const element = document.querySelector(target);
  element.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the parent ul element
const navbarLinks = document.querySelector('ul');
navbarLinks.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const targetSection = event.target.getAttribute('href');
    smoothScroll(targetSection);
  }
});

// Function to show the popup modal
function showPopup() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Add event listener to the "Learn More" link
const learnMoreLink = document.querySelector('.learn-more');
learnMoreLink.addEventListener('click', (event) => {
  event.preventDefault();
  showPopup();
});


  

  
// Sample data for diseases (Replace with your data)
const diseases = [
  {
    name: "Fertilizer Dermatitis",
    concept: "Skin irritation caused by direct contact with fertilizers.",
    image: "/storage/emulated/0/Download/download (1) (1).jpeg",
    causes: ["Direct skin contact with fertilizers", "Allergic reaction to chemicals in fertilizers"],
    importance: "Mild to moderate condition; proper handling and protective gear are recommended.",
    organicThings: "Use natural alternatives to chemical fertilizers to reduce the risk of skin irritation.",
  },
  {
    name: "Respiratory Irritation",
    concept: "Breathing difficulties or irritation caused by inhaling fertilizer particles.",
    image: "/storage/emulated/0/Download/download (1) (2).jpeg",
    causes: ["Inhalation of fertilizer dust", "Chemicals released from fertilizers during application"],
    importance: "Can cause short-term respiratory issues; proper ventilation is crucial during application.",
    organicThings: "Opt for organic fertilizers with low dust emission to reduce respiratory risks.",
  },
  {
    name: "Water Contamination",
    concept: "Pollution of water sources due to runoff of fertilizers.",
    image: "/storage/emulated/0/Download/download (1) (3).jpeg",
    causes: ["Excessive use of chemical fertilizers", "Rainwater washes fertilizer residues into water bodies"],
    importance: "Serious environmental concern; affects aquatic life and drinking water quality.",
    organicThings: "Use organic fertilizers and practice responsible application to minimize water contamination.",
  },
  // Add more disease objects here...
 
  {
  name: "lungs problem",
  concept: "Skin irritation caused by direct contact with fertilizers.",
  image: "/storage/emulated/0/Download/download (1) (4).jpeg",
  causes: ["Direct skin contact with fertilizers", "Allergic reaction to chemicals in fertilizers"],
  importance: "Mild to moderate condition; proper handling and protective gear are recommended.",
  organicThings: "Use natural alternatives to chemical fertilizers to reduce the risk of skin irritation.",
  },
  {
  name: "skin allergies",
  concept: "Breathing difficulties or irritation caused by inhaling fertilizer particles.",
  image: "/storage/emulated/0/Download/download (1) (6).jpeg",
  causes: ["Inhalation of fertilizer dust", "Chemicals released from fertilizers during application"],
  importance: "Can cause short-term respiratory issues; proper ventilation is crucial during application.",
  organicThings: "Opt for organic fertilizers with low dust emission to reduce respiratory risks.",
  },
  {
  name: "infectious disease",
  concept: "Pollution of water sources due to runoff of fertilizers.",
  image: "/storage/emulated/0/Download/download (1) (5).jpeg",
  causes: ["Excessive use of chemical fertilizers", "Rainwater washes fertilizer residues into water bodies"],
  importance: "Serious environmental concern; affects aquatic life and drinking water quality.",
  organicThings: "Use organic fertilizers and practice responsible application to minimize water contamination.",
  },
  // Add more disease objects here...
 
];


// Function to generate disease cards dynamically
function generateDiseaseCards() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  diseases.forEach((disease, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${disease.name}</h2>
      <img src="${disease.image}" alt="${disease.name}">
    `;

    card.addEventListener("click", () => showDiseaseDetails(index));

    container.appendChild(card);
  });
}

// Function to show the popup modal with disease details
function showDiseaseDetails(index) {
  // ... (Previous code)

  modalContent.querySelector(".organic-things-text").textContent = disease.organicThings;

  modal.style.display = "block";

  // ... (Previous code)
}

// Generate disease cards on page load
generateDiseaseCards();
</script>


  

  
  
