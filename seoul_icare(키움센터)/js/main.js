$(function () {
    //마우스 스크롤
    if ($(window).width() > 1199) {
        $('.page').mousewheel(function (e, delta) {//플러그인 호출 후 사용가능
            h = $(window).height();
            page = parseInt($(this).attr('data-page')) - delta;
            $('body,html').stop().animate({'scrollTop': (page - 1) * h}, 700);
            return false;//기본마우스 휠 기능 제거
        });

    }

    //스크롤이벤트
    $('.main_nav li').click(function(){
        //스크롤 애니메이션
        n=$(this).attr('data-n');
        target=$('.main_page0'+n).offset().top;
        $('body,html').stop().animate({'scrollTop':target},700)
    });
    $(window).scroll(function(){//스크롤 이벤트가 발생했을때
        st=$(window).scrollTop();//수직스크롤 값을 가져오기
        h=$(window).height();
        offset2=$('.main_page02').offset().top;
        offset3=$('.main_page03').offset().top;
        offset4=$('.main_page04').offset().top;

        $('.main_nav li').removeClass('main_on');
        if(st<offset2-h*0.25){//1page조건
            $('.main_nav01').addClass('main_on')
        }
        if(st>=offset2-h*0.25 && st<offset3-h*0.5){//2page조건
            $('.main_nav02').addClass('main_on')
        }
        if(st>=offset3-h*0.5 && st<offset4-h*0.75){//3page조건
            $('.main_nav03').addClass('main_on')
        }
        if(st>=offset4-h*0.75){//4page조건
            $('.main_nav04').addClass('main_on')
        }
    });


    //메인비주얼
    $('#slide-counter01').prepend('<span class="current-index01"></span> / ');
    var main_slider = $('#main_slider').bxSlider({
        auto: true,
        speed: 1000,
        mode:"fade",
        controls: false,
        autoControls:false,
        pagerCustom: true,
        onSliderLoad: function (currentIndex){
            $('#slide-counter01 .current-index01').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter01 .current-index01').text(newIndex + 1);
        }
    });

    $('#slide-counter01').append(main_slider.getSlideCount());

    $( '.visual_prev' ).on( 'click', function () {
        main_slider.goToPrevSlide();
        return false;
    } );

    $( '.visual_next' ).on( 'click', function () {
        main_slider.goToNextSlide();
        return false;
    } );

    $( '.visual_stop' ).on( 'click',function(){
        main_slider.stopAuto();
        return false;

    });

    $( '.visual_play' ).on( 'click',function(){
        main_slider.startAuto();
        return false;
    });

    $('.visual_play').click(function(){
        $('.visual_stop').show();
        $('.visual_play').hide();
    });
    $('.visual_stop').click(function(){
        $('.visual_stop').hide();
        $('.visual_play').show();
    });

    //우리키움참여단의 활동
    var main_post_slide = $('#main_post_slide').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        //touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: true,
        //minSlides: 6,
        maxSlides:3,
        moveSlides: 1,
        slideWidth: 392, //20191125 수정
        slideMargin: 12 //20191125 수정
    });

    // 탭키 접근성 추가 20200103 START
    $('.post_prev').on('keydown', function(e){
        if(e.which == 9 && !e.shiftKey ){ // 탭키이동시
            main_post_slide.reloadSlider({
                auto: false,
                infiniteLoop : false,
                autoHover : true,
                pager:false,
                slideWidth: 392,
                slideMargin: 12,
                moveSlides: 1,
                maxSlides:3,
                controls: false
            });
        }
    });
    // 탭키 접근성 추가 20200103 END

    $( '.post_prev' ).on( 'click', function () {
        main_post_slide.goToPrevSlide();
        return false;
    });

    $( '.post_next' ).on( 'click', function () {
        main_post_slide.goToNextSlide();
        return false;
    });


    //갤러리
    var gallery_slide = $('#gallery_slide').bxSlider({
        auto: false,
        speed: 700,
        //mode:'fade',
        //touchEnabled:navigator.maxTouchPoints > 0,
        controls: false,
        autoControls:false,
        pagerCustom: false,
        //minSlides: 6,
        maxSlides:2,
        moveSlides: 1,
        slideWidth: 294, //20191125 수정
        slideMargin: 12 //20191125 수정

    });

});


//탭
jQuery(function($){
    var tab = $('.tab_list');
    //tab.removeClass('js_off');
    tab.css('height', tab.find('>ul>li>ul:visible').height()+40);
    function onSelectTab(){
        var t = $(this);
        var myClass = t.parent('li').attr('class');
        t.parents('.tab_list:first').attr('class', 'tab_list '+myClass);
        tab.css('height', t.next('ul').height()+40);
    }
    tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});