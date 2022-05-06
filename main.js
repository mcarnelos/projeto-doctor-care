window.addEventListener('scroll', onScroll) /* adiciona o evento scroll executando a função onScroll*/

onScroll() /* executa a função, pos não esta mais no body */

function onScroll() { /* gerencia os scrolls da pagina */
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() { /* mostra o nav ao fazer scroll */
    if(scrollY > 0) {
    navigation.classList.add('scroll') /* adiciona a classe scroll ao nav quando faz scroll*/
    } else{
    navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
    backToTopButton.classList.add('show') /* adiciona a classe show quando passa de 500*/
    } else{
    backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded') /* adiciona a classe menu-expanded ao body quando o menu é aberto*/
}

function closeMenu() {
    document.body.classList.remove('menu-expanded') /* remove a classe menu-expanded quando o menu é fechado */
}

/* define o que aparece conforme voce rola a página */
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services, 
.card,
#about,
#about header,
#about .content`)