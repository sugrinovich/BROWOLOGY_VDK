document.addEventListener('DOMContentLoaded', function () {

    const button_singup = document.querySelectorAll('.whatsup_open');
    const button_watchall = document.getElementById('inst_open');


    button_singup.forEach(function (button, index) {
        button.addEventListener('click', function() {
            window.location.href = "https://wa.me/79143366058";
        });    
    });
    

    button_watchall.addEventListener('click', function() {
        window.location.href = "https://www.instagram.com/_browology_vdk_?igsi=MXU4dXN3dGEwNmwwbg==";
    });

    const link = document.querySelectorAll(".menu__link");

    menuLinks.forEach(function (link) {

        link.addEventListener('click', function(event) {

            event.preventDefault();
            
            const section = document.getElementById(link.getAttribute('href'));

            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});