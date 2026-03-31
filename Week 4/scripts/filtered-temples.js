// Footer
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;


// Temple Array (FIXED IMAGE URLS)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45825.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-3726.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26506.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-20539.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-9680.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4057.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69151.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-59.jpg"
  }
];


// Select container
const container = document.querySelector(".res-grid");


// Display function
function displayTemples(templeArray) {
  container.innerHTML = "";

  templeArray.forEach(temple => {
    const card = document.createElement("figure");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = temple.location;

    const dedicated = document.createElement("p");
    dedicated.textContent = "Dedicated: " + temple.dedicated;

    const area = document.createElement("p");
    area.textContent = "Area: " + temple.area + " sq ft";

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}


// Filters (FIXED: added safety check + correct year parsing)
document.getElementById("home")?.addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old")?.addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.getElementById("new")?.addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.getElementById("large")?.addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small")?.addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});


// Initial load
displayTemples(temples);