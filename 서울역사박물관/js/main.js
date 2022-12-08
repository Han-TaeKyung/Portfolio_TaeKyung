$(function(){
    //온라인전시
    var swiper = new Swiper( '.swiper-container.two', {
        slidesPerView: 3,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        //effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        coverflow: {
            rotate: 0
        },
        breakpoints: {
            1199: {
                slidesPerView:3,
                spaceBetween:0
            }
        }
    } );

    //기획전시
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        speed: 400,
        accessibility: true,
        focusOnChange : true,
    });
   
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 3,
            arrows:false,
            slidesToScroll: 3,
            spaceBetween : 30,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
               }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
           }
            }]
        });
   
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });

    //메인배너 
    if (matchMedia("(min-width: 1200px)").matches) {
        var main_banner =$('#main_banner01').bxSlider({
            auto: true,
            speed: 1000,
            //mode:'fade',
            controls: false,
            autoControls:false,
            pagerCustom: false,
            moveSlides: 1,
            slideWidth: 'auto',
            maxSlides: 2,
            slideMargin: 30,
            responsive:true
        });

        $( '.banner_prev' ).on( 'click', function () {
            main_banner.goToPrevSlide();
            return false;
        });

        $( '.banner_next' ).on( 'click', function () {
            main_banner.goToNextSlide();
            return false;
        });

        $('.main_banner_btn a').on('keydown', function(e){
            if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
                main_banner.reloadSlider({
                    auto: false,
                    infiniteLoop : false,
                    autoHover : false,
                    pager:false,
                    slideWidth: 'auto',
                    slideMargin: 30,
                    moveSlides: 1,
                    maxSlides: 2,
                    controls: false
                });
            }
        });
    }else{
        var main_banner =$('#main_banner01').bxSlider({
            auto: true,
            speed: 1000,
            mode:'fade',
            controls: false,
            autoControls:false,
            pagerCustom: false,
            moveSlides: 1,
            slideWidth: 'auto',
            maxSlides: 1,
            slideMargin:0,
            responsive:true
        });
        $( '.banner_prev' ).on( 'click', function () {
            main_banner.goToPrevSlide();
            return false;
        });

        $( '.banner_next' ).on( 'click', function () {
            main_banner.goToNextSlide();
            return false;
        });
    }

    //행사교육
    $('#slide-counter02').prepend('<span class="current-index"></span> / ');

    var edu_slider =$('#edu_slider').bxSlider({
        auto: false,
        speed: 1000,
        //mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,
        moveSlides: 1,
        slideWidth: 'auto',
        maxSlides: 2,
        slideMargin: 40,
        onSliderLoad: function (currentIndex){
            $('#slide-counter02 .current-index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter02 .current-index').text(newIndex + 1);
        }
    });

    $( '.edu_prev' ).on( 'click', function () {
        edu_slider.goToPrevSlide();
        return false;
    });

    $( '.edu_next' ).on( 'click', function () {
        edu_slider.goToNextSlide();
        return false;
    });
    $('#slide-counter02').append(edu_slider.getSlideCount());

    $('.edu_prev').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            edu_slider.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : false,
                pager:false,
                slideWidth: 'auto',
                slideMargin: 40,
                moveSlides: 1,
                maxSlides: 2,
                controls: false
            });
        }
    });

    $('.notice_latest dt a').click(function () {
		$(this).parent('dt').addClass('on').siblings('dt').removeClass('on');
		return false;
	});



    //유물소개 - 주요유물
    $('#slide-counter03').prepend('<span class="current-index03"></span> / ');

    var art_slider01 =$('#art_slider01').bxSlider({
        auto: false,
        speed: 1000,
        //mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,
        moveSlides: 1,
        slideWidth: 'auto',
        maxSlides: 3,
        slideMargin: 60,
        onSliderLoad: function (currentIndex){
            $('#slide-counter03 .current-index03').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter03 .current-index03').text(newIndex + 1);
        }
    });

    $( '.art_prev01' ).on( 'click', function () {
        art_slider01.goToPrevSlide();
        return false;
    });

    $( '.art_next01' ).on( 'click', function () {
        art_slider01.goToNextSlide();
        return false;
    });
    $('#slide-counter03').append(art_slider01.getSlideCount());

    $('.art_prev01').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            art_slider01.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : false,
                pager:false,
                slideWidth: 'auto',
                slideMargin:60,
                moveSlides: 1,
                maxSlides: 3,
                controls: false
            });
        }
    });

    //유물소개 - 소장유물
    $('#slide-counter04').prepend('<span class="current-index04"></span> / ');

    var art_slider02 =$('#art_slider02').bxSlider({
        auto: false,
        speed: 1000,
        //mode:'fade',
        controls: false,
        autoControls:false,
        pagerCustom: true,
        moveSlides: 1,
        slideWidth: 'auto',
        maxSlides: 3,
        slideMargin: 60,
        onSliderLoad: function (currentIndex){
            $('#slide-counter04 .current-index04').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter04 .current-index04').text(newIndex + 1);
        }
    });

    $( '.art_prev02' ).on( 'click', function () {
        art_slider02.goToPrevSlide();
        return false;
    });

    $( '.art_next02' ).on( 'click', function () {
        art_slider02.goToNextSlide();
        return false;
    });
    $('#slide-counter04').append(art_slider02.getSlideCount());

    $('.art_prev02').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            art_slider02.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : false,
                pager:false,
                slideWidth: 'auto',
                slideMargin:60,
                moveSlides: 1,
                maxSlides: 3,
                controls: false
            });
        }
    });

    $(".art_tab01").click(function(){
        $(".art_slide01").show();
        $(".art_slide02").hide();
        $(".art_tab01").addClass("art_tab_on");
        $(".art_tab02").removeClass("art_tab_on");
        art_slider01.reloadSlider();
        return false;
    });
    $(".art_tab02").click(function(){
        $(".art_slide02").show();
        $(".art_slide01").hide();
        $(".art_tab02").addClass("art_tab_on");
        $(".art_tab01").removeClass("art_tab_on");
        art_slider02.reloadSlider();
        return false;
    });

    //분관소개
    $(".branch_list ul li").bind("mouseenter focusin", function () { 
        $(this).addClass("branch_list_on").parents().addClass("branch_list_off");
    });
    $(".branch_list").bind("mouseleave", function () { 
        $(this).removeClass("branch_list_off");
    });
 
});




