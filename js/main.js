(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');




    var menu = new Menu({
        container:'.header__nav',
        toogleBtn:'.header__btnMenu',
        widthEnable: 1025
    })

    var carouselImgs = new Carrossel({
        container: '.notebook .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carrossel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })


    





})();