// DEALERSHIP DATA
const dealerships = [
    {
        name: "Larry H. Miller Toyota",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        link: "https://www.oremtoyota.com/"
    },
    {
        name: "Ken Garff Honda",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        link: "https://corearch.com/project/ken-garff-honda-dealership/"
    },
    {
        name: "Brent Brown Toyota",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763",
        link: "https://www.toyota.com/dealers/utah/orem/84058/brent-brown-toyota/"
    },
    {
        name: "Ford of Provo",
        location: "Provo, UT",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        link: "https://www.kengarff.com/ford-ut/"
    },
       {
        name: "Hyundai of Orem",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        link: "https://www.oremtoyota.com/"
    },
    {
        name: "Kia of Orem",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        link: "https://corearch.com/project/ken-garff-honda-dealership/"
    },
    {
        name: "Mercedes-Benz of Orem",
        location: "Orem, UT",
        image: "https://di-uploads-pod1.dealerinspire.com/mercedesbenzoftyler/uploads/2022/08/emanuel-turbuc-zHPqIoxgvU0-unsplash.jpg",
        link: "https://www.mbdraper.com/we-can-order-it.htm"
    },
    {
        name: "Tesla Pleasant Grove",
        location: "Pleasant Grove, UT",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        link: "https://www.kengarff.com/ford-ut/"
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