$(document).ready(function(){
    const owl = $('#clients-slider');
    owl.owlCarousel({
        items: 1,
        loop: true
    });

    $('#sliderPrev').click(function () {
        owl.trigger('prev.owl.carousel')
    });

    $('#sliderNext').click(function () {
        owl.trigger('next.owl.carousel')
    });
});