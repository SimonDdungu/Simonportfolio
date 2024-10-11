const hambuger_menu = document.querySelector(".Mobile_Hamburger_Menu");
const Mobile_nav =  document.querySelector(".Mobile_Navbar");
const close_button =  document.querySelector(".close_button");


//Open Side Navigation Bar when user clicks the Hamburger Menu
hambuger_menu.addEventListener("click", () => {
    Mobile_nav.style.display = "block";
});

//Close the Side Navigation Bar when user clicks the close button
close_button.addEventListener("click", () => {
    Mobile_nav.style.display = "none";
});

//Close the Side Navigation Bar after user clicks on a link in the Nav bar
document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        Mobile_nav.style.display = "none";
}))


//When user clicks outside of the side Navigation Bar, close the Side Navigation Bar
document.addEventListener("click", function (event) {
    if (!Mobile_nav.contains(event.target) && !hambuger_menu.contains(event.target)) {
        Mobile_nav.style.display = "none";
      }
});



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

    
