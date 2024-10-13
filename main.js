// Smooth Scroll for Back-to-top Button
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dynamic Year Update in Footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year-title").innerText = currentYear;
document.getElementById("current-year-footer").innerText = currentYear;
document.getElementById("current-year-copyright").innerText = currentYear;

// Search Functionality for Contributors
const searchInput = document.getElementById("search");
const contributorsList = document.getElementById("contributors");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const contributors = contributorsList.getElementsByClassName("contributor-card");

    Array.from(contributors).forEach(contributor => {
        const contributorName = contributor.querySelector("h4").innerText.toLowerCase();
        if (contributorName.includes(searchValue)) {
            contributor.style.display = "block";
        } else {
            contributor.style.display = "none";
        }
    });
});
