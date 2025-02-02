const navbar = document.getElementById("navbar");

// Listen for the scroll event
window.addEventListener("scroll", () => {
    // If scrolled down more than 50px, add shadow
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-md");
    } else {
        navbar.classList.remove("shadow-md");
    }
});

//projects
document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
//home
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
//service
document.querySelector('a[href="#service"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#service').scrollIntoView({ behavior: 'smooth' });
});

//skills
document.querySelector('a[href="#skills"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
});

//contact
//skills
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});