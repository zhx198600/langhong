$(document).ready(function () {
    $(".h100").height($(window).height());
    $(".banner_case").height($(window).height() - 120);


    //head muen��Ӣ���л�
    $(".menu li").hover(function () {
        $(this).find("span").fadeOut("fast");
//		$(this).find("a").show();
    }, function () {
//		$(this).find("a").hide()
        $(this).find("span").fadeIn("fast");
    });

    //meun hover������ʧЧ��
    $("#header").hover(function () {
        if ($(window).scrollTop() != 0) {
            $("#header").animate({"top": "0", "height": "76"}, 10);
        }
    }, function () {
        if ($(window).scrollTop() != 0) {
            $("#header").animate({"top": "-76", "height": "76"}, 10);
        }
    });

// foot
    $(".footwx").mouseenter(function () {
        $(".wxcode").fadeIn("fast");
    });
    $(".footwx").mouseleave(function () {
        $(".wxcode").fadeOut("fast");
    });
    $(".footmail").mouseenter(function () {
        $(".footmail2").fadeIn("fast");
    });
    $(".footmail2").mouseleave(function () {
        $(this).fadeOut("fast");
    });

//	
    $(".mapframebg").height($(window).height());
    $(".btn_more_foot").click(function () {
        $(".mapframebg").fadeIn();
    });
    $(".close2").click(function () {
        $(".mapframebg").fadeOut();
    });

    $('#gotop').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 300);
//          $('#gotop').fadeOut('fast');
    });
// zhx添加
    $('.tab-title li').on('click', function () {
        $('.caselisti').addClass('hide');
        $('.tab-title li').removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).children('a').attr('class')).removeClass('hide');
    })

});

$(window).resize(function () {
    $(".h100").height($(window).height());
    $(".banner_case").height($(window).height() - 76);
    $(".mapframebg").height($(window).height());
});


$(function () {
    $(window).scroll(function () {
        var header = $('#wrapper');
        if (header.offset().top - document.documentElement.scrollTop - document.body.scrollTop < -76) {
            $("#header").animate({"top": "0", "height": "76"}, 10);
            $('#gotop').fadeIn(300);
        } else {
            $('#header').animate({"top": "0", "height": "76"}, 10);
            $('#gotop').fadeOut(300);
        }
        ;
    });
});



