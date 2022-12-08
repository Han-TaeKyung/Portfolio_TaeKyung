$(function () {
    //gnb
    $(window).resize(function(){ //리사이징 gnb
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
            //로케이션
            /*var jbOffset = $( '.location' ).offset();
            $( window ).scroll( function() {
                if ( $( document ).scrollTop() >= jbOffset.top ) {
                    $( '.location' ).addClass( 'locationFixed' );
                    $( '.sub_container' ).addClass( 'pt_56' );
                }
                else {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
            });*/
            $(".gnb_wrap").show();
        } else {
            $(".m_gnbOpen").click(function () {
                $(".gnb_wrap").show();
                $(".m_gnbOpen").hide();
                $(".m_gnbClose").show();
                $(".m_gnb_bg").show();
            });
            $(".m_gnbClose").click(function () {
                $(".gnb_wrap").hide();
                $(".m_gnbOpen").show();
                $(".m_gnbClose").hide();
                $(".m_gnb_bg").hide();
            });
            $(".gnb_wrap > ul > li > a").bind("click", function () {
                $(this).parent().toggleClass("m_gnb_on").siblings().removeClass("m_gnb_on");
            });
            $(".gnb_3dep").bind("click", function () {
                $(this).toggleClass("m_gnb_on02");
            });
            $(".gnb_wrap").hide();

            //로케이션
            /*var jbOffset = $( '.location' ).offset();
            $( window ).scroll( function() {
                if ( $( document ).scrollTop() >= jbOffset.top ) {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
                else {
                    $( '.location' ).removeClass( 'locationFixed' );
                    $( '.sub_container' ).removeClass( 'pt_56' );
                }
            });*/
        };

    });

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
        //로케이션
        /*var jbOffset = $( '.location' ).offset();
        $( window ).scroll( function() {
            if ( $( document ).scrollTop() >= jbOffset.top ) {
                $( '.location' ).addClass( 'locationFixed' );
                $( '.sub_container' ).addClass( 'pt_56' );
            }
            else {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
        });*/

    } else {
        $(".m_gnbOpen").click(function () {
            $(".gnb_wrap").show();
            $(".m_gnbOpen").hide();
            $(".m_gnbClose").show();
            $(".m_gnb_bg").show();
        });
        $(".m_gnbClose").click(function () {
            $(".gnb_wrap").hide();
            $(".m_gnbOpen").show();
            $(".m_gnbClose").hide();
            $(".m_gnb_bg").hide();
        });
        $(".gnb_wrap > ul > li > a").bind("click", function () {
            $(this).parent().toggleClass("m_gnb_on").siblings().removeClass("m_gnb_on");
        });
        $(".gnb_3dep").bind("click", function () {
            $(this).toggleClass("m_gnb_on02");
        });

        //로케이션
        /*var jbOffset = $( '.location' ).offset();
        $( window ).scroll( function() {
            if ( $( document ).scrollTop() >= jbOffset.top ) {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
            else {
                $( '.location' ).removeClass( 'locationFixed' );
                $( '.sub_container' ).removeClass( 'pt_56' );
            }
        });*/
    }





    $(".location_wrap > ul > li > a").bind("click", function () {
        $(this).parent().toggleClass("location_on").siblings().removeClass("location_on");
        return false;
    });
});
