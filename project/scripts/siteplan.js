document.addEventListener("DOMContentLoaded", function() {
    // EXPANDED DEALERSHIP DATA with Tesla and more
    const dealerships = [
        {
            name: "Larry H. Miller Toyota",
            location: "Orem, UT",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
            link: "https://www.lhmtoyotaorem.com"
        },
        {
            name: "Ken Garff Honda",
            location: "Orem, UT",
            image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop",
            link: "https://www.kengarffhondaorem.com"
        },
        {
            name: "Brent Brown Toyota",
            location: "Orem, UT",
            image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=250&fit=crop",
            link: "https://www.brentbrowntoyota.com"
        },
        {
            name: "Ford of Provo",
            location: "Provo, UT",
            image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=250&fit=crop",
            link: "https://www.fordofprovo.com"
        },
        {
            name: "Tesla - Salt Lake City",
            location: "Salt Lake City, UT",
            image: "https://images.unsplash.com/photo-1536700503339-1e4b0442073f?w=400&h=250&fit=crop",
            link: "https://www.tesla.com"
        },
        {
            name: "Nate Wade Subaru",
            location: "Salt Lake City, UT",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
            link: "https://www.natewadesubaru.com"
        },
        {
            name: "Mark Miller Subaru",
            location: "Salt Lake City, UT",
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=250&fit=crop",
            link: "https://www.markmillersubaru.com"
        },
        {
            name: "Volvo Cars Salt Lake City",
            location: "Salt Lake City, UT",
            image: "https://images.unsplash.com/photo-1544829099-b9c0a607dab9?w=400&h=250&fit=crop",
            link: "https://www.volvocarsslc.com"
        },
        {
            name: "BMW of Murray",
            location: "Murray, UT",
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
            link: "https://www.bmwofmurray.com"
        },
        {
            name: "Mercedes-Benz of Salt Lake City",
            location: "Salt Lake City, UT",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
            link: "https://www.mercedesbenzofslc.com"
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