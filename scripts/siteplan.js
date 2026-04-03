const dealerships = [
    {
        name: "Larry H. Miller Toyota",
        city: "Orem",
        phone: "801-222-4400"
    },
    {
        name: "Ken Garff Honda",
        city: "Orem",
        phone: "801-221-3000"
    },
    {
        name: "Brent Brown Toyota",
        city: "Orem",
        phone: "801-223-4400"
    },
    {
        name: "Karl Malone Chevrolet",
        city: "Provo",
        phone: "801-818-2700"
    },
    {
        name: "Tim Dahle Nissan",
        city: "Spanish Fork",
        phone: "801-798-2000"
    }
];

const container = document.getElementById("dealerContainer");

dealerships.forEach(dealer => {
    const card = document.createElement("div");
    card.classList.add("dealer-card");

    card.innerHTML = `
        <h3>${dealer.name}</h3>
        <p><strong>City:</strong> ${dealer.city}</p>
        <p><strong>Phone:</strong> ${dealer.phone}</p>
    `;

    container.appendChild(card);
});