$(document).ready(function(){
	var header = $('.section-header').height(); 
    $(".main-content").css("margin-top",header);
    $(".section-top").css("margin-top",header);

    var owlImages = $("#owlImages");
    owlImages.owlCarousel({
        margin:20,
        items:1,
        nav:false,
        loop:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:50000,
        smartSpeed: 1000,
    });
    var owlBS = $("#owlBS");
    owlBS.owlCarousel({
        margin:20,
        items:1,
        nav:false,
        loop:false,
        dots:true,
        autoplay:false,
        autoplayTimeout:50000,
        smartSpeed: 1000,
    });
    $("#nextDoc").click(function(){
        owlBS.trigger('next.owl.carousel');
    });
    $("#prevDoc").click(function(){
        owlBS.trigger('prev.owl.carousel');
    });

    var owlGallery = $("#owl-gallery");
    owlGallery.owlCarousel({
        margin:20,
        stagePadding: 150,
        center:true,
        nav:false,
        loop:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:50000,
        smartSpeed: 1000,
    });
    $("#nextImg").click(function(){
        owlGallery.trigger('next.owl.carousel');
    });
    $("#prevImg").click(function(){
        owlGallery.trigger('prev.owl.carousel');
    });

    $(document).scroll(function () {
        var $nav = $(".section-header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
