document.addEventListener("DOMContentLoaded", () => {
    // Footer dynamic date (already in your inline script)
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;

    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

    // Optional: Filter functionality for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    const figures = document.querySelectorAll("main figure");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.textContent.toLowerCase();

            figures.forEach(fig => {
                fig.style.display = "block"; // reset
            });

            if (filter === "old") {
                figures.forEach(fig => {
                    // Example: hide "New" temples
                    if (fig.dataset.type === "new") {
                        fig.style.display = "none";
                    }
                });
            } else if (filter === "new") {
                figures.forEach(fig => {
                    if (fig.dataset.type === "old") {
                        fig.style.display = "none";
                    }
                });
            } else if (filter === "large") {
                figures.forEach(fig => {
                    if (fig.dataset.size !== "large") {
                        fig.style.display = "none";
                    }
                });
            } else if (filter === "small") {
                figures.forEach(fig => {
                    if (fig.dataset.size !== "small") {
                        fig.style.display = "none";
                    }
                });
            } else if (filter === "home") {
                figures.forEach(fig => {
                    fig.style.display = "block";
                });
            }
        });
    });
});