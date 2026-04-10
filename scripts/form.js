const products = [
    { id: "p1", name: "Smart Washer" },
    { id: "p2", name: "Dryer Pro" },
    { id: "p3", name: "Dishwasher Max" },
    { id: "p4", name: "Refrigerator XL" },
    { id: "p5", name: "Microwave Pro" }
];

const select = document.getElementById("product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});