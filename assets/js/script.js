window.onload = function() {
    if (window.innerWidth <= 800) {
        links.style.display = 'none';
    }
};

function toggleMenu() {

    var links = document.getElementById("links");
    
    links.addEventListener("click", () => {
        if (window.innerWidth < 800) {
            links.style.display = links.style.display === "none" ? "flex" : "none";
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            links.style.display = 'flex';
        } else {
            links.style.display = 'none';
        }
    });
    
    if (links.style.display === "none") {
        links.style.display = "flex";
        links.style.justifyContent = 'center';
        links.style.alignItems = 'center'
    } else {
        links.style.display = "none";
    }
}

