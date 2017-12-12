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

});