// 首页

// 店长推荐
$(function(){
    $('.caidan .cd_tp').mouseenter(function(){
        var idx = $(this).index();
        $('.caidan .cd_tp .words').eq(idx).stop().slideDown(300);
    }).mouseleave(function(){
        var idx = $(this).index();
        $('.caidan .cd_tp .words').eq(idx).stop().slideUp(300);
    })
})
// 我们的新闻
$(function(){
    $('.news_anniu li').click(function(){
        var idx = $(this).index();
        $('.news_main .con').eq(idx).slideDown(300);
        $('.news_main .con').not($('.news_main .con').eq(idx)).slideUp(300);
        $(this).addClass("act").siblings().removeClass("act");
    })
})
// 加盟发展
$(function(){
    $('.join_main').mouseenter(function(){
        $('.opacity').stop().slideDown(500);
    }).mouseleave(function(){
        $('.opacity').stop().slideUp(500);
    })
})



// 美食系列页面

// 新品上市
$(function(){
    $('.new_arrival_anniu li').click(function(){
        var idx = $(this).index();
        $('.main_xinpin').eq(idx).show();
        $('.main_xinpin').not($('.main_xinpin').eq(idx)).hide();
        $(this).addClass("act").siblings().removeClass("act");
    })
})

//美食系列
$(function(){
    $('.food_list li').mouseenter(function(){
        var idx = $(this).index();
        $('.food_list li .opacity').eq(idx).stop().slideDown(500);
    }).mouseleave(function(){
        var idx = $(this).index();
        $('.food_list li .opacity').eq(idx).stop().slideUp(500);
    })
})
//意面
$(function(){
    $(function(){
        $('.yimian li').mouseenter(function(){
            var idx = $(this).index();
            $('.yimian li .opacity').eq(idx).stop().slideDown(500);
        }).mouseleave(function(){
            var idx = $(this).index();
            $('.yimian li .opacity').eq(idx).stop().slideUp(500);
        })
    })
})
//披萨
$(function(){
    $(function(){
        $('.pisa li').mouseenter(function(){
            var idx = $(this).index();
            $('.pisa li .opacity').eq(idx).stop().slideDown(500);
        }).mouseleave(function(){
            var idx = $(this).index();
            $('.pisa li .opacity').eq(idx).stop().slideUp(500);
        })
    })
})
//甜品
$(function(){
    $(function(){
        $('.tianpin li').mouseenter(function(){
            var idx = $(this).index();
            $('.tianpin li .opacity').eq(idx).stop().slideDown(500);
        }).mouseleave(function(){
            var idx = $(this).index();
            $('.tianpin li .opacity').eq(idx).stop().slideUp(500);
        })
    })
})
//饮料
$(function(){
    $(function(){
        $('.yinliao li').mouseenter(function(){
            var idx = $(this).index();
            $('.yinliao li .opacity').eq(idx).stop().slideDown(500);
        }).mouseleave(function(){
            var idx = $(this).index();
            $('.yinliao li .opacity').eq(idx).stop().slideUp(500);
        })
    })
})
//五大菜系转换
$(function(){
    $('.food_name li').click(function(){
        var idx = $(this).index();
        $('.msxl').eq(idx).show();
        $('.msxl').not($('.msxl').eq(idx)).hide();
        $(this).addClass("ho").siblings().removeClass("ho");
    })
})

//新闻中心页面
$(function(){
    $('.anniu li').click(function(){
        var idx = $(this).index();
        $('.news_list').eq(idx).show();
        $('.news_list').not($('.news_list').eq(idx)).hide();
        $(this).addClass("act").siblings().removeClass("act");
    })
})
