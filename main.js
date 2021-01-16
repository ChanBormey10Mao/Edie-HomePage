const navSlide = () =>{
    const burgur = document.querySelector(".burgur");
    const nav = document.querySelector(".ul_nav");
    const navLinks= document.querySelectorAll('.ul_nav li');
    burgur.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            link.style.opacity =1;;
        });
    

    });
}
navSlide();