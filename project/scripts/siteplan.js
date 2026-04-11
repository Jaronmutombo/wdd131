// DEALERSHIP DATA
const dealerships = [
    {
        name: "Larry H. Miller Toyota",
        location: "Orem, UT",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        link: "https://abcmoteur.fr/wp-content/uploads/2020/05/Toyota-Highlander-4.jpg"
    },
    {
        name: "Ken Garff Honda",
        location: "Orem, UT",
        image: "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_1600.jpg",
        link: "https://automobiles.honda.com/?cid=pds_gog_rpa&cmpcd=namy_hon_fdl_hhr_spe_brd_exa&gclsrc=aw.ds&gad_source=1&gad_campaignid=1339698900&gbraid=0AAAAADrc52G1v86WvMtFozS74BOtmKf1O&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKdHmI18OzpxnVhVzBkQDNgYHBSHVDbPVpO2kkh-x8VQN7ZBGBZqV4QaAix9EALw_wcB"
    },
    {
        name: "Doug Smith Jeep",
        location: "Orem, UT",
        image: "https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2026/wrangler/design/desktop/my26-jeep-wrangler-design-wheelizer-17-inch-black-steel-styled-wheels-desktop-v2.jpg.image.1440.jpg",
        link: "https://www.dougsmithchryslerjeepdodge.com/"
    },
    {
        name: "Ford of Provo",
        location: "Provo, UT",
        image: "https://www.assets.ford.com/adobe/assets/urn:aaid:aem:815df0e4-f977-4e3f-8bcf-0a20b6dc81b1/as/25_FRD_FLI_66500_v4.webp?max-quality=75&crop-names=1_4x3&width=3840",
        link: "https://www.kengarff.com/ford-ut/"
    },
       {
        name: "Hyundai of Orem",
        location: "Orem, UT",
        image: "https://di-uploads-pod2.dealerinspire.com/verneidehyundaisiouxcity/uploads/2025/06/2025-Hyundai-Sonata-Sedan-Lineup.png",
        link: "https://www.murdockhyundailindon.com/"
    },
    {
        name: "Kia of Orem",
        location: "Orem, UT",
        image: "https://di-uploads-pod12.dealerinspire.com/beavertonkiaredesign/uploads/2024/07/2025-Kia-Sportage.jpg",
        link: "https://www.dougsmithkia.com/?utm_source=google&utm_medium=organic&utm_campaign=google-business-profile"
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
        image: "https://media.wired.com/photos/5a0e6fe27d6fd0312d8bba41/master/w_1600%2Cc_limit/Roadster_Hero.jpg",
        link: "https://www.tesla.com/findus/location/store/teslapleasantgrove"
    },
    {
        name: "Nissan",
        location: "American Fork, UT",
        image: "https://www.nissanusa.com/content/dam/Nissan/us/assets/2026/pathfinder/config2/model-card/nissan-pathfinder-m-v2.jpg?imwidth=3840",
        link: "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue.html?dcp=pmax.psn.Rogue.VLP.pmax.&gclsrc=aw.ds&gad_source=1&gad_campaignid=21852011895&gbraid=0AAAAADMpndcdFc6Ta6DFeKtLBBZO2oyHQ&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKfyxgH6GDNio8KOfh5ru60ReYBV83jwtZX30O-fdbdL6O1oGTOXqpEaAktoEALw_wcB"
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