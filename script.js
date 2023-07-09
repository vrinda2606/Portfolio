
//resizing
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navbarLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    //scrolling purpose - active class
    sections.forEach( x => {
        let top=window.scrollY;
        let offset = x.offsetTop - 100;
        let height = x.offsetHeight;
        let id = x.getAttribute('id');

        if(top >= offset && top < offset + height){
            //i.e. actualy active navbar links
            navbarLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }

    });



   //scroll sections sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when navabr links are clicked (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}
