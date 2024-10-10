const hambuger_menu = document.querySelector(".Mobile_Hamburger_Menu");
const Mobile_nav =  document.querySelector(".Mobile_Navbar");
const close_button =  document.querySelector(".close_button");

hambuger_menu.addEventListener("click", () => {
    Mobile_nav.style.display = "block";
});


close_button.addEventListener("click", () => {
    Mobile_nav.style.display = "none";
});

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        Mobile_nav.style.display = "none";
    }))



    //Attempt to fix nav bar overlapping content when links are clicked on Mobile devices

    document.addEventListener('DOMContentLoaded', function() {

        // Get the height of our fixed navbar
        const navbarHeight = document.querySelector('.navigation_bar').offsetHeight;
    
        // Select all <a> links that start with href="#" and prevent default behaviour on them
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
        
                // Get each individual link element
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
        
                // Calculate the scroll position, adjusting till it feels right, (subtract) to add more space
                const offsetPosition = (targetElement.offsetTop - navbarHeight) - 15;
        
                // Scroll to the link with smooth behavior
                window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
                });
            });
        });
    });

    
