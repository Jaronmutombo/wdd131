// Footer
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;

// Temple Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpghttps://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschttps://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45825.jpghrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://contenthttps://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-3726.jpg.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.chttps://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26506.jpghurchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjeshttps://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-20539.jpguschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjehttps://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-9680.jpgsuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://contenthttps://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4057.jpg.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjhttps://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-69151.jpgesuschrist.org/imgs/8f6d8e6c1e4c11ecbd0feeeeac1e3d8d0d8f5d2b/full/500%2C/0/default"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://churchofjesushttps://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpgchrist.org/imgs/7c8c8c1e4c11ecbd0feeeeac1e3d8d0d8f5d2b/full/500%2C/0/default"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "https://churchofjesuhttps://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-59.jpgschrist.org/imgs/6c8c8c1e4c11ecbd0feeeeac1e3d8d0d8f5d2b/full/500%2C/0/default"
  },
  {
    templeName: "Port-Au-Prince",
    location: "Haiti",
    dedicated: "2017, October, 27",
    area: 10396,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6208.jpg"
  },
  {
    templeName: "Dallas Texas Temple",
    location: "Dallas, Texas, United States",
    dedicated: "1989, March, 05",
    area: 44207,
    imageUrl: "https://churhttps://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67234.jpgchofjesushttps://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpgchrist.org/imgs/7c8c8c1e4c11ecbd0feeeeac1e3d8d0d8f5d2b/full/500%2C/0/default"
  },
  {
    templeName: "Harare Zimbabwe Temple",
    location: "Harare, Zimbabwe",
    dedicated: "2026, March, 01",
    area: 17247,
    imageUrl: "https://churchofjehttps://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-65307.jpgsushttps://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpgchrist.org/imgs/7c8c8c1e4c11ecbd0feeeeac1e3d8d0d8f5d2b/full/500%2C/0/default"
  },

];

// Display Temples
const container = document.querySelector(".res-grid");

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

// Filters
document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

// Initial load
displayTemples(temples);