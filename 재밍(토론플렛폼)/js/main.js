$(function () {
    //마우스 스크롤
    if ($(window).width() > 1399) {
        $('.page').mousewheel(function (e, delta) {
            h = $(window).height();
            page = parseInt($(this).attr('data-page')) - delta;
            $('body,html').stop().animate({'scrollTop': (page - 1) * h}, 700);
            return false;//기본마우스 휠 기능 제거
        });
    }
    $('.main_info_btn').click(function(){
        target=$('.main_page02').offset().top;
        $('body,html').stop().animate({'scrollTop':target},700)
    });
});