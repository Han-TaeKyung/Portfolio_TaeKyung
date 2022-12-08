$(function () {
    $("#gnb > ul > li").bind("mouseenter focusin", function() {
        $(this).addClass("gnb_on").siblings().removeClass("gnb_on");
    });
    $("#gnb > ul > li.gnb_2dep").bind("mouseenter focusin", function() {
        $(".gnb_2depth_bg").show();
    });
    $("#gnb").bind("mouseleave focusout", function () {
        $(".gnb_2dep").removeClass("gnb_on");
        $(".gnb_2depth_bg").hide();
    })
});