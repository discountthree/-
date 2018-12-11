jQuery(function ($) {
    $('.focus').arSlide();
});


$(function () {
    $(".firstClass").mouseenter(function () {
        $(this).parent().find("dd").show();
        $(this).parent().find("dd").mouseenter(function () {
            $(this).show();
            var index = $(this).index("dd");
            $(".show").find("div").eq(index).show();
            $(".show").find("div").eq(index).siblings("div").hide();
        })
    })
    $(".top_navAll").mouseleave(function () {
        $(this).find("dd").hide();
        $(".show").find("div").hide();
    })
    $(".personCenter").mouseover(function () {
        $(".personSub").show();
        $(this).find("a").css({"borderRight": "1px solid #fff"});
        $(this).prev("li").find("a").css({"borderRight": "1px solid #f2f2f2"});
        $(this).css({"background": "white"});

    })
    $(".personCenter").mouseout(function () {
        $(".personSub").hide();
        $(this).css({"background": "#f2f2f2"});
        $(this).find("a").css({"borderRight": "1px solid #666"});
        $(this).prev("li").find("a").css({"borderRight": "1px solid #666"});

    })
    $(".topService").mouseover(function () {
        $(".serviceSub").show();
        $(this).find("a").css({"borderRight": "1px solid #fff"});
        $(this).prev("li").find("a").css({"borderRight": "1px solid #f2f2f2"});
        $(this).css({"background": "white"});

    })
    $(".topService").mouseout(function () {
        $(".serviceSub").hide();
        $(this).css({"background": "#f2f2f2"});
        $(this).find("a").css({"borderRight": "1px solid #666"});
        $(this).prev("li").find("a").css({"borderRight": "1px solid #666"});

    })
    $(".topMore").mouseover(function () {
        $(".moreSub").show();

        $(this).prev("li").find("a").css({"borderRight": "1px solid #f2f2f2"});
        $(this).css({"background": "white"});

    })
    $(".topMore").mouseout(function () {
        $(".moreSub").hide();
        $(this).css({"background": "#f2f2f2"});
        $(this).prev("li").find("a").css({"borderRight": "1px solid #666"});

    })
    $(".babyNav").find("li").mouseenter(function () {
        $(this).find("span").show();
        var index = $(this).index();
        $(this).parent(".babyNav").next(".diaperSub").children("div").eq(index).show()
            .siblings().hide();

    })
    $(".babyNav").find("li").mouseleave(function () {
        $(this).find("span").hide();
    })
    var $nav = $('#loutiNav');
    // 1、给window绑定scroll事件
    $(window).on('scroll', function () {
        // 获取滚动过的距离
        var scrollTop = $(window).scrollTop();
        // 1）当滚动到一定距离时，显示导航条
        if (scrollTop >= 635) {
            $nav.show();
        } else {
            $nav.hide();
        }
    })
    // 2、点击导航条，滚动到相应的楼层
    $nav.on('click', 'li', function () {
        // 3、返回顶部
        if ($(this).hasClass('last')) {
            // $(window).scrollTop(0);
            $('html,body').animate({scrollTop: 0});
            return;
        }
        if (!$(this).hasClass('loutiCar')) {
            var index = $(this).index();
            var scrollTop = $(".cont").children("div").eq(index - 1).offset().top;

            // $(window).scrollTop(scrollTop);
            $('html,body').animate({scrollTop: scrollTop});
        }
    });

    $(".diaperSub").on("mouseenter", ".diaProMin", function () {
        $(this).find(".comment").show();


    });
    $(".diaperSub").on("mouseleave", ".diaProMin", function () {
        $(this).find(".comment").hide();


    });
    $(".diaperSub").on("click", ".diaProMin", function () {
        var goodId = $(this).find(".proId").html();
        console.log(goodId);
        location.href = "productDetail011.html?id=" + goodId;

    });

    // 鼠标进入轮播图显示前后箭头
    $(".focus").mouseenter(function () {
        $(".swiper-button-prev").show();
        $(".swiper-button-next").show();
    });

    $(".focus").mouseleave(function () {
        $(".swiper-button-prev").hide();
        $(".swiper-button-next").hide();
    });

    // 设置轮播图宽度
    $('.focus').width(innerWidth)

    // swiper pagination初始化
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay : 2500,
        autoplayDisableOnInteraction: false
    });


})

