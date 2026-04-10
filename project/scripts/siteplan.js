// DEALERSHIP DATA
const dealerships = [
    {
        name: "Larry H. Miller Toyota",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        link: "https://www.lhmtoyotaorem.com"
    },
    {
        name: "Ken Garff Honda",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        link: "https://www.kengarffhondaorem.com"
    },
    {
        name: "Brent Brown Toyota",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763",
        link: "https://www.brentbrowntoyota.com"
    },
    {
        name: "Ford of Provo",
        location: "Provo, UT",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        link: "https://www.fordofprovo.com"
    }
];

// LOAD DEALERSHIPS
const container = document.getElementById("dealerContainer");

if (container) {
    dealerships.forEach(dealer => {
        const card = document.createElement("div");
        card.classList.add("dealer-card");

        card.innerHTML = `
            <img src="${dealer.image}" alt="${dealer.name}">
            <h3>${dealer.name}</h3>
            <p>${dealer.location}</p>
            <a href="${dealer.link}" target="_blank" class="btn">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

// CONTACT FORM HANDLING
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
}