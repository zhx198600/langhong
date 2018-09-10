$(function () {
    // jQuery(window).scroll(function(){
    //     jQuery(window).scrollTop(0);
    // });
	$(".ss button").click(function(){
		$(".ss input").show();
		$(".ss input").focus();
	})
	var dw = $("#dingwei").val();
	if (dw != "") {
	    $('.fixed_r a').eq(dw).click();
	}
	else {
	    $(".jian_img1").animate({ opacity: '1' }, 3000);
	    setTimeout(function () {
	        $(".jian_img1").animate({ opacity: '0' }, 3000);
	    }, 3000);
	    setTimeout(function () {
	        $(".jian_img2").animate({ opacity: '1' }, 3000);
	    }, 6000);
	    setTimeout(function () {
	        $(".jian_img2").animate({ opacity: '0' }, 3000);
	    }, 9000);
	    setTimeout(function () {
	        $(".jianjian").css("display", "none");
            // alert(2);
			// $(".box").animate({ bottom: '0' }, 1500); 页面向上滑动
	    }, 12000);
	}
	$(".two_ping_ul a").hover(function(){
		$(this).find(".white_line").animate({width:'198'},200);
	},function(){
		$(this).find(".white_line").animate({width:'18'},200);
	}
	)
});
/* �������?����֮�� www.lanrenzhijia.com */
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
$('.num').eq(0).find('p').stop().animate({},500)
	},500);
	
function qpgd(a){
	var z =$('.ddw').val();
    b = parseInt(z);
	c = $('.num').length;
if(a<0){
	if(-b==c-1){
		return;
	}
	b-=1;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b+=1;
	$('.ddw2').val(1);
	}
if(-b==1){

$('.num').eq(1).find('.two_left').animate({'left':'0'},1500);
$('.num').eq(1).find('.two_middle').animate({'bottom':'0'},1500);
$('.num').eq(1).find('.two_right').animate({'right':'0'},1500);
	
	}else if(-b==3){

$('.num').eq(3).find('.three_left').animate({'left':'0'},1500);
$('.num').eq(3).find('.three_middle').animate({'bottom':'0'},1500);
$('.num').eq(3).find('.three_right').animate({'right':'0'},1500);
	
	}

$('.ddw').val(b);
$('.fixed_r a').eq(-b).addClass('on').siblings('a').removeClass('on');
var single_hh = $(window).height();
click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
}
	$('.fixed_r a').eq(0).addClass('on');
	$('.fixed_r a').click(function(){
		var b = $(this).index();
		$(this).addClass('on').siblings('a').removeClass('on');
		
		$('.ddw').val(-b);
       if(b==1){

$('.num').eq(1).find('.two_left').animate({'left':'0'},1500);
$('.num').eq(1).find('.two_middle').animate({'bottom':'0'},1500);
$('.num').eq(1).find('.two_right').animate({'right':'0'},1500);
	
	}else if(b==3){

$('.num').eq(3).find('.three_left').animate({'left':'0'},1500);
$('.num').eq(3).find('.three_middle').animate({'bottom':'0'},1500);
$('.num').eq(3).find('.three_right').animate({'right':'0'},1500);
	
	}

/*---------------------*/



var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})
function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
var two_ban=(single_hh-606)/2;
//var three_ping=$(".three_ping").height();
$('.num').height(single_hh);
//$('.foot_num').height(three_ping);
$('.slide').height(single_hh-110);
$('.two_ping').height(single_hh-110);
$('.three_ping').height(single_hh-110);
$('.four_ping').height(single_hh-110);
//$('.three_ping').css("margin-top",single_hh);
$('.two_ping_ul').css("margin-top",two_ban);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});

/* �������?����֮�� www.lanrenzhijia.com */



/* -------------banner------------------------- */




