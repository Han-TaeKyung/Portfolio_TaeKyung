$(function () {
    //gnb

    if (window.matchMedia("(min-width: 1199px)").matches) {
        $(".gnb_wrap > ul > li").bind("mouseenter focusin", function () {
            $(this).addClass("gnb_on").siblings().removeClass("gnb_on");
        });

        $(".gnb_wrap > ul > li").bind("mouseleave focusout", function () {
            $(this).removeClass("gnb_on");
        });

        $(".gnb_3dep").bind("mouseenter focusin", function () {
            $(this).addClass("gnb_3dep_on").siblings().removeClass("gnb_3dep_on");
        });

        $(".gnb_3dep").bind("mouseleave focusout", function () {
            $(this).removeClass("gnb_3dep_on");
        });

        } else {
            $(".m_gnbOpen").click(function () {
                $(".gnb_wrap").show();
                $(".m_gnbOpen").hide();
                $(".m_gnbClose").show();
                $(".m_gnb_bg").show();
                $("#container, .page").hide();
            });
            $(".m_gnbClose").click(function () {
                $(".gnb_wrap").hide();
                $(".m_gnbOpen").show();
                $(".m_gnbClose").hide();
                $(".m_gnb_bg").hide();
                $("#container, .page").show();
            });
            $(".gnb_wrap > ul > li > a").bind("click", function () {
                $(this).parent().toggleClass("m_gnb_on").siblings().removeClass("m_gnb_on");
            });
            $(".gnb_3dep").bind("click", function () {
                $(this).toggleClass("m_gnb_on02");
            });
            $(".gnb_wrap").hide();
        };







    $(".location_wrap > ul > li > a").bind("click", function () {
        $(this).parent().toggleClass("location_on").siblings().removeClass("location_on");
        return false;
    });
});
