function onScroll() { 
    if(scrollY > 0) {
    navigation.classList.add('scroll') /* adiciona a classe scroll ao nav quando faz scroll*/
    } else{
    navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded') /* adiciona a classe menu-expanded ao body quando o menu é aberto*/
}

function closeMenu() {
    document.body.classList.remove('menu-expanded') /* remove a classe menu-expanded quando o menu é fechado */
}