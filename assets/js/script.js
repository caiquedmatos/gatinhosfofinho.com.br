/* INICIO ANIMAÇÃO DA ENTRADA DE ELEMENTOS*/

const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate';
function animeScroll() {
    const windowTop = window.pageYOffset;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop - (window.innerHeight * 3) / 4) {
            element.classList.add(animateClass);

        }
        else {
            element.classList.remove(animateClass);
        }
    })
}
window.addEventListener('scroll', function () {
    animeScroll();
})
/* FIM DA ANIMAÇÃO DA ENTRADA DE ELEMENTOS*/



/*INICIO CONTADOR DO SLIDE*/

let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 5000);
/* FIM DO CONTADOR DO SLIDE*/

/* Inicio Menu Mobile */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* Fim Menu Mobile */


/* Inicio Animação header e botao para o topo */
window.addEventListener("scroll", function () {
    let headerAnimation = document.querySelector("#header");
    let headerLogin = document.querySelector(".menu-login");
    let btnTopo = document.getElementById('btn-topo');
    const bt = document.getElementById('btn-topo')
    if (this.window.scrollY == 0) {
        bt.style.display = 'none'
    }
    else {
        bt.style.display = 'block'
    }
    btnTopo.classList.toggle("botao-topo", this.window.scrollY > 0);
    headerAnimation.classList.toggle("header-jq", window.scrollY > 0);
    headerLogin.classList.toggle("menu-login-jq", window.scrollY > 0);

});

/* Fim Animação header */

/* Inicio Scroll  */

const elements = document.querySelectorAll(".scrollTo");

elements.forEach((item) => {
    item.addEventListener("click", () => {
        const elem = document.getElementById(item.getAttribute("data-link"));
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline:"nearest" })
    });
});

/* Fim  Scroll */

