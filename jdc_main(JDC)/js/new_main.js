$(function () {

    //마우스 스크롤
    if ($(window).width() > 1199) {
        $('.page').mousewheel(function (e, delta) {//플러그인 호출 후 사용가능
            h = $(window).height();
            page = parseInt($(this).attr('data-page')) - delta;
            $('body,html').stop().animate({'scrollTop': (page - 1) * h}, 1000);
            return false;//기본마우스 휠 기능 제거
        });

        //20190801 수정
        $('.main_sns').mousewheel(function (e, delta) {
            event.stopPropagation();
        });

    };

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

        $('.main_nav li').removeClass('main_on');
        if(st<offset2-h*0.37){//1page조건
            $('.main_nav01').addClass('main_on')
        };
        if(st>=offset2-h*0.37 && st<offset3-h*0.65){//2page조건
            $('.main_nav02').addClass('main_on')
        };
        if(st>=offset3-h*0.65){//3page조건
            $('.main_nav03').addClass('main_on')
        };
    });





    $('#main_visual_slide').bxSlider({
        auto: true,
        speed: 700,
        mode:'fade',
        controls: false,
        autoControls:true, //20190718 수정
        pagerCustom: false
    });

    //20190718추가 START
    $('.main_visual .bx-stop').click(function () {
        $('.bx-stop').hide();
        $('.bx-start').css('display', 'block');
    });
    $('.main_visual .bx-start').click(function () {
        $('.bx-start').hide();
        $('.bx-stop').css('display', 'block');
    });
    //20190718추가 END

    $('#main_banner_slide').bxSlider({
        auto: true,
        speed: 700,
        mode:'fade',
        controls: false,
        autoControls:true, //20190822 수정
        pagerCustom: false,
        touchEnabled : navigator.maxTouchPoints > 0
    });

    //20190822추가 START
    $('.main_banner .bx-stop').click(function () {
        $('.bx-stop').hide();
        $('.bx-start').css('display', 'block');
    });
    $('.main_banner .bx-start').click(function () {
        $('.bx-start').hide();
        $('.bx-stop').css('display', 'block');
    });
    //20190822추가 END


    $(".main_page03_wrap > ul > li").bind("mouseenter focusin", function() {
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".main_page03_wrap > ul > li").bind("mouseleave focusout", function() {
        $(this).removeClass("on");
    });

    //sns
    $(".m_sns_btn > ul > li").bind("click", function() {
        $(this).addClass("m_sns_active").siblings().removeClass("m_sns_active");
        return false;
    });

    $('.m_sns01').click(function () {
        $('.main_sns').hide();
        $('.main_sns01').show();
    });
    $('.m_sns02').click(function () {
        $('.main_sns').hide();
        $('.main_sns02').show();
    });
    $('.m_sns03').click(function () {
        $('.main_sns').hide();
        $('.main_sns03').show();
    });



});
