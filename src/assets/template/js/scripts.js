$(function() {

    $('select.selectric').selectric({
        maxHeight: 210
    });

    $('.select__city .selectric').click(function(){
        $(this).toggleClass('selectricOpen');
    });

    $('body').on('mouseleave','.select__city .selectric',function(){
        $(this).removeClass('selectricOpen');
    });

    $('.zoom').magnificPopup({
        type  : 'image'
    });

    $('.faq__item').click(function(){
        $(this).toggleClass('active');
    });

    $('.b-product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.b-product__slider-nav'
    });

    $('.b-product__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.b-product__slider',
        dots: false,
        arrows: true,
        centerPadding: '0px',
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },{
                breakpoint: 620,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.b-product__slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 100 // don't foget to change the duration also in CSS
        },
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled:true
        }
    });

    $(".fa-bars").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile_menu_bg'
    });

});