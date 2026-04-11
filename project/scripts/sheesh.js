document.addEventListener("DOMContentLoaded", function() {
    // EXPANDED DEALERSHIP DATA with Tesla and more
    const dealerships = [
        {
            name: "Larry H. Miller Toyota",
            location: "Orem, UT",
            image: "https://www.ffkr.com/wp-content/uploads/2020/08/Larry-H-Miller-Murray-Toyota-Exterior-Entrance-Straight.jpg",
            link: "https://www.oremtoyota.com/"
        },
        {
            name: "Ken Garff Honda",
            location: "Orem, UT",
            image: "https://corearch.com/wp-content/uploads/2018/03/Utah-Automotive-Architecture-Ken-Garff-Orem-Honda.jpg",
            link: "https://corearch.com/project/ken-garff-honda-dealership/"
        },
        {
            name: "Brent Brown Toyota",
            location: "Orem, UT",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uYuRAdZlkMuPuc00RIcP-xXaSNu6QbC6ww&s",
            link: "https://www.toyota.com/dealers/utah/orem/84058/brent-brown-toyota/"
        },
        {
            name: "Ford of Provo",
            location: "Provo, UT",
            image: "https://content.homenetiol.com/2000292/2140912/0x0/7802ec4dec994d4ca6a86d5cedbcdb6b.jpg",
            link: "https://www.kengarff.com/ford-ut/"
        },
        {
            name: "Tesla - Pleasant Grove",
            location: "Pleasant Grove, UT",
            image: "https://img.ksl.com/slc/2870/287022/28702249.jpeg?filter=kslv2/responsive_story_lg",
            link: "https://www.tesla.com/findus/location/store/teslapleasantgrove"
        },
        {
            name: "Nate Wade Subaru",
            location: "Salt Lake City, UT",
            image: "https://di-uploads-pod47.dealerinspire.com/natewadesubaru/uploads/2023/06/NWS_3183_Full.jpg",
            link: "https://www.natewade.com/new-vehicles/?_dep_keyword=&_dep_match=&_dep_adid=&_dep_campaignid=21987613352&_dep_adgroupid=&_dep_network=&_dep_ppcid=1&sd_adid=&sd_digadcid=21987613352&sd_keyword=&sd_digadprov=dealereprocess&sd_channel=pmax&sd_campaign_type=google&sd_campaign=00-ALL-NA_AW_InMarket_New__Pmax+%28New%29&sd_program=tier3&sd_adgroup=00-ALL-NA_AW_InMarket_New__Pmax+%28New%29&gad_source=1&gad_campaignid=22011872845&gbraid=0AAAAA9nxfIEXmYr7o4CU8W4IzKpPL3trI&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKf2b_QWtGTroHJgHB5-jKn64nVeHUWgf61Z7kP2bIFNU8lXFRsmAfkaAq1vEALw_wcB"
        },
        {
            name: "Audi Albany",
            location: "Saratoga Springs, UT",
            image: "https://assets.cai-media-management.com/resize/690x240/dealership/8824b31b-f82e-4901-bf1c-361c1cb53297.jpg",
            link: "https://www.audilehi.com/en/inventory/new/?utm_id=21142007022&gad_source=1&gad_campaignid=21148919888&gbraid=0AAAAAC7tGPfuhhqFq8kCX9psuIxO3Q-0O&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKfayIROfV7xXf4T42VJUR50isnZAWRMX8xQDl7kQXwMM-CNfRoePooaAtwOEALw_wcB"
        },
        {
            name: "Volvo Cars Salt Lake City",
            location: "Salt Lake City, UT",
            image: "https://service.secureoffersites.com/images/GetLibraryImage?fileNameOrId=248602",
            link: "https://www.kengarffvolvocars.com/?utm_id=23292578286&gad_source=1&gad_campaignid=23292578286&gbraid=0AAAAADxSkTBafdAAOwZ2HXvhpDMIC6bCT&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKfkUzlsGjPRSl7HtwLrjIJqPwJOLMCfaPOvAbnU7v9iaML-jZDScSYaAmnGEALw_wcB"
        },
        {
            name: "BMW of Murray",
            location: "Murray, UT",
            image: "https://i.ytimg.com/vi/9mnrh6ASXis/maxresdefault.jpg",
            link: "https://www.bmwofmurray.com/about.htm"
        },
        {
            name: "Mercedes-Benz of Salt Lake City",
            location: "Salt Lake City, UT",
            image: "https://mahoneyarch.com/wp-content/uploads/2018/11/1_MERCEDES_BENZ_OF_DRAPER_SHOWROOM.jpg",
            link: "https://www.mbdraper.com/we-can-order-it.htm"
        }
    ];

    const container = document.getElementById("dealerContainer");
    
    if (container) {
        // Clear any existing content
        container.innerHTML = "";
        
        if (dealerships.length === 0) {
            container.innerHTML = "<p class='empty-state'>No dealerships found at this time.</p>";
        } else {
            dealerships.forEach((dealer, index) => {
                const card = document.createElement("div");
                card.classList.add("dealer-card");
                
                // Add lazy loading to images
                card.innerHTML = `
                    <img 
                        loading="lazy" 
                        src="${dealer.image}" 
                        alt="${dealer.name}"
                        onerror="this.src='https://via.placeholder.com/400x250?text=' + encodeURIComponent('${dealer.name}')">
                    <h3>${dealer.name}</h3>
                    <p>📍 ${dealer.location}</p>
                    <a href="${dealer.link}" target="_blank" rel="noopener noreferrer" class="btn">Visit Website</a>
                `;
                
                container.appendChild(card);
            });
        }
    }

    // CONTACT FORM HANDLING with better validation
    const form = document.querySelector(".contact-form");
    
    if (form) {
        // Add name attributes to form fields if missing
        const nameInput = form.querySelector("input[type='text']");
        const emailInput = form.querySelector("input[type='email']");
        const messageTextarea = form.querySelector("textarea");
        
        if (nameInput && !nameInput.hasAttribute("name")) nameInput.setAttribute("name", "name");
        if (emailInput && !emailInput.hasAttribute("name")) emailInput.setAttribute("name", "email");
        if (messageTextarea && !messageTextarea.hasAttribute("name")) messageTextarea.setAttribute("name", "message");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get form values
            const name = nameInput?.value.trim();
            const email = emailInput?.value.trim();
            const message = messageTextarea?.value.trim();
            
            // Validation
            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }
            
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }
            
            // Success message
            alert(`Thanks ${name}! Your message has been sent. We'll get back to you soon.`);
            form.reset();
        });
    }
    
    // Optional: Add intersection observer for smoother lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observe all lazy images (for advanced lazy loading)
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});