$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});

    //removendo a rolagem suave ao clicar no botão deslizante
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // aplicando novamente a rolagem suave nos itens do menu clique
    $('html').css("scrollBehavior", "smooth");
});

// alternar script de menu/barra de navegação
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

 // digitando script de animação de texto
 var typed = new Typed(".typing", {
    strings: ["Programador Web", "Técnico em Informática", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// roteiro de carrossel de coruja
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
