/*!
* Start Bootstrap - Heroic Features v5.0.5 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//find by element footer
var footer = document.querySelector('footer');
var school = document.querySelector('.school');
var projects = document.querySelector('.projects');
function placeFooter() {
    if (document.body.offsetHeight < window.innerHeight) {
        footer.classList.add('fixed-bottom');
        //changed the margin attribute for the school class
        school.setAttribute('style', 'margin-left: 175px');
        // double the size of the projects class
        projects.setAttribute('style', 'margin-left: 175px');

       


    } else {
        footer.classList.remove('fixed-bottom');
    }
}

placeFooter();

window.addEventListener('resize', placeFooter);


