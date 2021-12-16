$(document).ready(function() {
    $(function(){                       /* Прокрутка */
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    $('.order-call').click(function(event) {                //обработка заказа звонка
        $('.feedback-bell, .bg-popup').show(300, "swing");
        let pagePosition = window.scrollY;
        document.body.dataset.position = pagePosition;
          document.body.style.top = -pagePosition + 'px';
          $("body").addClass('.fixed') ;
     }) 
          
     $('.cross , .bg-popup').click(function(event){
         $('.bg-popup , .feedback-bell').hide(300, "swing");
         let pagePosition = parseInt(document.body.dataset.position, 10);
         $("body").removeClass('.fixed') ;
         window.scroll({ top: pagePosition, left: 0 });
        
     })  //////

               
     $('.close-left-menu').click(function(event){                 //  закрытие меню
         $('.form-doc').hide();
         $('.bread li:last-child').remove();
         $('.arrow').removeClass('rotate-arrow');
         
         })  //////

    $('.bread').click(function(){                                    // обработка главного меню
        $('.arrow').removeClass('rotate-arrow');
        $('.link-big').css('background-color','none') 
        $('.bread li:last-child').remove();
    })
    
     $('.b1').click(function(){                                    
        $('.link-big').css('background-color','transparent') 
        $('.b1').css('background-color','#d2a9cf');
        if ($('.ms').css('display') === 'none') {
            $('.ms').show(400, "swing");
            $('.a1').addClass('rotate-arrow');
        }
        else {
            $('.ms').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Медицинские справки</span></li>')
    });

     $('.b2').click(function(){
        $('.link-big').css('background-color','transparent'); 
        $('.b2').css('background-color','#d2a9cf');
        if ($('.doc-work').css('display') === 'none') {
            $('.doc-work').show(400, "swing");
            $('.a2').addClass('rotate-arrow');
        }
        else {
            $('.doc-work').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Справки для работы</span></li>');
    });

    $('.b3').click(function(){
        $('.link-big').css('background-color','transparent'); 
        $('.b3').css('background-color','#d2a9cf'); 
        if ($('.doc-studi').css('display') === 'none') {
            $('.doc-studi').show(400, "swing");
            $('.a3').addClass('rotate-arrow');
        }
        else {
            $('.doc-studi').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Справки для учебы</span></li>');
    });
    $('.b4').click(function(){
        $('.link-big').css('background-color','transparent'); 
        $('.b4').css('background-color','#d2a9cf'); 
        if ($('.doc-relax').css('display') === 'none') {
            $('.doc-relax').show(400, "swing");
            $('.a4').addClass('rotate-arrow');
        }
        else {
            $('.doc-relax').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Справки для отдыха</span></li>'); 
    })
    $('.b5').click(function(){
        $('.link-big').css('background-color','transparent');
        $('.b5').css('background-color','#d2a9cf'); 
        if ($('.doc-child').css('display') === 'none') {
            $('.doc-child').show(400, "swing");
            $('.a5').addClass('rotate-arrow');
        }
        else {
            $('.doc-child').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Справки для детей</span></li>');
    })
    $('.b6').click(function(){
        $('.link-big').css('background-color','transparent'); 
        if ($('.doc-medic').css('display') === 'none') {
            $('.doc-medic').show(400, "swing");
            $('.a6').addClass('rotate-arrow');
        }
        else {
            $('.doc-medic').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        }
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Справки от врача</span></li>');
    })
    $('.b7').click(function(){
        $('.link-big').css('background-color','transparent');
        if ($('.doc-vaccin').css('display') === 'none') {
            $('.doc-vaccin').show(400, "swing");
            $('.a7').addClass('rotate-arrow');
        }
        else {
            $('.doc-vaccin').hide(400, "swing");
            $('.arrow').removeClass('rotate-arrow');
        } 
            const summaLi= $('.bread li').length;
            if ( summaLi >= 2) {
            $('.bread li:last-child').remove();}
        $('.bread').append('<li><span>Медицинские анализы</span></li>'); 
    })
    
/*$('.link-card').click(function(){
    $('.right-box-hero').hide();
    $('.form-doc').show(400, "swing");;
    $('.title-form-doc').remove();
    $('.form-doc').append('<h2 class="title-form-doc">Справка</h2>');
})*/

/*$('.f-link').click(function(){                               // обработка цен из футера
    $('.right-box-hero').hide();
    $('#form-doc').show(400, "swing");
   // $('#form-doc').css('background-color','#fff');
    $('.title-form-doc').remove();
})*/

$('.f1').click(function(){
$('.li-price').hide();    
$('.ul-price, .l1').show(400,'swing');
})
$('.f2').click(function(){
$('.li-price').hide();
$('.ul-price, .l2').show(400,'swing');
})
$('.f3').click(function(){
$('.li-price').hide();
$('.ul-price, .l3').show(400,'swing');
})
$('.f4').click(function(){
$('.li-price').hide();
$('.ul-price, .l4').show(400,'swing');
})
$('.f5').click(function(){
$('.li-price').hide();
$('.ul-price, .l5').show(400,'swing');
})
$('.f6').click(function(){
$('.li-price').hide();
$('.ul-price, .l6').show(400,'swing');
})
$('.f7').click(function(){
$('.li-price').hide();
$('.ul-price, .l7').show(400,'swing');
})

}); /*----------- end function ------------------*/