// 电话号码验证开始
String.prototype.Trim = function() { 
	var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/); 
		return (m == null) ? "" : m[1]; 
		} 
	String.prototype.isMobile = function() { 
		return (/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/.test(this.Trim())); 
	} 
	String.prototype.isTel = function() 
	{ 
		//"兼容格式: 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)" 
		//return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(this.Trim())); 
		return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim())); 
	} 
	function chkForm() { 
		with(document.form1){ 
		if (tel.value.isMobile()||tel.value.isTel()) { 
		tel.value = tel.value.Trim(); 
		return true; 
	} 
	else { 
		alert("请输入正确的手机号码或电话号码\n\n例如:13916752109或0712-3614072"); 
		tel.focus(); 
		return false; 
	} 
	} 
}
// 电话号码验证结束
// 顶部导航下拉开始
$(function() {
	var site_menu=$(".site_menu"),
		selectDown=$(".selectDown"),
		timer=null;
		// 初始化下拉菜单
		selectDown.hide();
		// 鼠标移入时显示
		$(".site_menu li:nth-child(2)").hover(function() {

			// 获取当前li的下标
			
			clearTimeout(timer);

			var index=$(this).index();

			selectDown.stop().slideDown(500); 

		}, function() {

			clearTimeout(timer);

			timer=setTimeout(function(){

				selectDown.stop().slideUp(500)

			},300)

		});

		selectDown.hover(function() {
            // 清除定时炸弹，组断掉slideUp事件触发
            clearTimeout(timer);

        }, function() {
            // 当用户离开时，隐藏listDown
           selectDown.stop().slideUp();

        });
		// 底部横线显示隐藏
        $('.siteMenu li').mouseenter(function(event){

		var index=$(this).index();

		// alert(index);
		$('.underLine li').eq(index).attr('class','currentUn').siblings().attr('class','');
	});

});
// 顶部导航下拉结束
// banner开始
$(function() {
	function banner(){
	// 用来模拟点击获取的图片的下标
		var num = 0;

		var imgList = $('.imgList li');
		var btnList = $('.btnList li');
		var banner = $('.banner1');
		var len = btnList.length;
		var timer = null;

		//JQ初始化css
		imgList.first().show();
		
		// 封装向右走的功能
		function rightFn(event) {
			// 注意，永远我们只需要操作两张图片，num在没有加加之前是代表当前用户正在看到的那张图，加加之后，就表示下一张用户想要看到的图片
			imgList.eq(num).stop().fadeOut(500);
			btnList.eq(num).removeClass('current');
			// 每点击一次就让num加一次
			// 做一个极值判断
			num++;
			if(num > len - 1){
				num = 0;
			}
			// 让用户想要看到的哪一张淡入进来
			imgList.eq(num).stop().fadeIn(500);
			// 让用户想要看到的哪一张的角标添加上当前类
			btnList.eq(num).addClass('current');

		}
		//点击角标让对应的图片淡入进来，之前的淡出
		btnList.click(function(event) {
			imgList.eq(num).stop().fadeOut(500);
			btnList.eq(num).removeClass('current');
			// 这里一定注意，将你点击的那个元素的下标值赋值给num取得统一
			num = $(this).index();
			// 让用户想要看到的哪一张淡入进来
			imgList.eq(num).stop().fadeIn(500);
			// 让用户想要看到的哪一张的角标添加上当前类
			btnList.eq(num).addClass('current');
		});

		timer = setInterval(rightFn,3000);

		//鼠标移动到box上面去的时候清除定时器，离开定时器开启
		
		banner.hover(function() {
			clearInterval(timer);
		}, function() {
			clearInterval(timer);
			timer = setInterval(rightFn,3000);
		});
		}

		banner('.banner1');
});
// banner结束
// banner导航开始
$(function(){
		var timer=null;
		var fenleiright1=$('.fenleiright1');
	    var flright1=$('.flright1');
	
	        $('.navRight li').mouseenter(function(){
	
	            $(this).children('span').css('transform','rotate(135deg)');
	
	        }).mouseleave(function(){
	
	            $(this).children('span').css('transform','rotate(-45deg)');
	
	        })
	        $('.fenlei ul li:first-child').mouseenter(function(){

	            $('.fenleiright').fadeTo(0,1).stop().animate({'width':'669px'},300);
	
	        }).mouseleave(function(){
	
	        	clearTimeout(timer);
	
	        	$('.fenleiright').stop().fadeIn(400);
	
	        });
	
	        timer=setTimeout(function(){
	
					$('.fenleiright').stop().fadeOut(400);
	
				},100);
	
	        $('.fenleiright').hover(function() {
	        	 // 清除定时炸弹，组断掉animate事件触发
	            clearTimeout(timer);
	            $('.fenleiright').stop().fadeIn(400);
	        }, function() {
	        	 
	            $('.fenleiright').stop().fadeOut(400);
	        });
	
	        $('.fenlei ul li:first-child').mouseleave(function() {
	
	        	$('.fenleiright').stop().fadeOut(400);
	
	        });

	        // 第二个模块显示与隐藏

	        timer1=setTimeout(function(){
	
					$('.fenleiright1').stop().fadeOut(400);
	
				},100);


	        $('.fenlei ul li:nth-child(2)').hover(function() {

	        	 

	        	$('.fenleiright1').fadeTo(0,1).stop().animate({'width':'669px'},300);

	        	$('.fenleiright1').hover(function() {

	        		clearTimeout(timer1);

	        		$('.fenleiright1').fadeTo(0,1).stop().animate({'width':'669px'},300);

	        	}, function() {

	        		$('.fenleiright1').stop().fadeOut(400);

	        	});

	        }, function() {

	        	 $('.fenleiright1').stop().fadeOut(400);

	        });

	        // 第三个模块显示与隐藏
			timer1=setTimeout(function(){
	
					$('.fenleiright2').stop().fadeOut(400);
	
				},100);


	        $('.fenlei ul li:last-child').hover(function() {

	        	$('.fenleiright2').fadeTo(0,1).stop().animate({'width':'669px'},300);

	        	$('.fenleiright2').hover(function() {

	        		clearTimeout(timer1);

	        		$('.fenleiright2').fadeTo(0,1).stop().animate({'width':'669px'},300);

	        	}, function() {

	        		$('.fenleiright2').stop().fadeOut(400);

	        	});

	        }, function() {

	        	 $('.fenleiright2').stop().fadeOut(400);

	        });

	    });
// banner导航结束
// 小banner开始
$(function() {
	var timer = null;
	// 这个变量是用来控制自动走的下标值
	var num = 0;
	var imgListLit = $('.imgListLit li');
	var box = $('.littleBan');
	var cooper=$('.cooper');
	var arrowLr=$('.arrowLr');
	var em=$('.arrowLr em');
	var i=$('.arrowLr i');
	var len=imgListLit.length;

	// 点击角标让对应的图片淡入进来，并且其他图片直接消失
		em.click(function(event) {
			// 获取用户点击的那个元素的下标
			// 这里一定要将定时器里面的num和我们的下标统一起来
			num = $(this).index();
			// 实现两个排他
			imgListLit.eq(num).stop().fadeIn().siblings().hide();
		});
		i.click(function(event) {
			// 获取用户点击的那个元素的下标
			// 这里一定要将定时器里面的num和我们的下标统一起来
			num = $(this).index();
			// 实现两个排他
			imgListLit.eq(num).stop().fadeIn().siblings().hide();
		});

		// 自动走
		timer = setInterval(autoPlay, 3000);

		function autoPlay(){
			num++;
			if(num > len - 1){
				num = 0;
			}
			imgListLit.eq(num).stop().fadeIn(300).siblings().hide(300);
		}

		box.hover(function() {

			clearTimeout(timer);

			cooper.stop().show(400);

			arrowLr.stop().show(400);

		}, function() {
			
			clearTimeout(timer);

			timer = setInterval(autoPlay, 3000);

			cooper.stop().hide(400);

			arrowLr.stop().hide(400);

		});

});
// 小banner结束
// 咨询开始
$(function() {
	var wrong_btn=$('.wrong_btn');
	var footerContact=$('.footerContact');

	wrong_btn.click(function(event) {
		footerContact.stop().hide(600);
		wrong_btn.stop().hide(600);
	});
});
// 咨询结束
// 侧栏咨询开始
$(function() {

	var img=$('.weixn'),
		$li=$('.conRight li:nth-child(3)'),
		timer=null,
		$conRight=$('.conRight'),
	 	viewHeight = $(window).height(),	
	 	$Li1=$('.conRight li:nth-child(2)'),
	 	$Li2=$('.conRight li:nth-child(4)'),
	 	$Li3=$('.conRight li:nth-child(1)');


		timer=setTimeout(function(){

			img.stop().fadeOut(500);

		}, 100)

		$Li1.hover(function() {

			$('.telSnum').stop().slideDown(400);

		}, function() {
			$('.telSnum').stop().slideUp(400);
		});

		$Li2.hover(function() {
			$('.liuyan').stop().show(400);
		}, function() {
			$('.liuyan').stop().hide(400);
		});

		$Li3.hover(function() {
			$('.peopleCon').stop().show(400);
		}, function() {
			$('.peopleCon').stop().hide(400);
		});






		$li.hover(function() {

			clearTimeout(timer);

			img.stop().fadeIn(500);

		}, function() {

			img.stop().fadeOut(500);

		});

		img.hover(function() {

			clearTimeout(timer);

			img.stop().fadeIn(500);

		}, function() {

			clearTimeout(timer);
			
			img.stop().fadeOut(500);

		});

		// 获取当前屏幕的高度
		var viewHeight = $(window).height();

		$(window).scroll(function(event) {

			var myTop = $(window).scrollTop();

			// 检测当前是否滚动一屏高度
			if (myTop>viewHeight) {

				$('.conRight').show(400);

			} else{

				$('.conRight').hide(400);

			};

		});

		$('.conRight li:last-child').click(function(event) {
			
			$('html,body').stop().animate({'scrollTop':0}, 500);

		});

});
// 侧栏咨询结束
// 推荐商标开始
$(function() {
	
	$('.calssify li').mouseenter(function(event){

		var index=$(this).index();

		// alert(index);

		$('.calssify li').eq(index).attr('class','curr').siblings().attr('class','');

		$('.currentShow>li').eq(index).attr('class','current').siblings().attr('class','');
	})
}); 
// 推荐商标结束
// 客户心声开始
$(function() {
	var lunboCon=$('.lunboCon');
	var lunboList=$('.lunboList li');
 	var num=0;
 	var len=lunboList.length;
 	var timer=null;
 	var lunbo=$('.lunbo');
 	var imgWidth = lunboList.width();
 	var huochetou=$('.lunboList');
 	var rightBtn = $('.right_btn');
	var leftBtn  = $('.left_btn');
	
	// 点击右按钮让ul往左走
		rightBtn.click(rightFn);
	// 点击左按钮让ul往右走
		leftBtn.click(leftFn);

 	timer=setInterval(rightFn, 10000);

 	lunbo.hover(function() {

 		clearTimeout(timer);

 	}, function() {

 		clearTimeout(timer);
 		timer=setInterval(rightFn, 10000);
 	});
 	//往左走的功能
	function leftFn(){
		//让索引值++
		num--;
		// 做一个判断
		if(num < 0){
			num = 23;
		}
		go();
	}
 	// 往右走的功能
 	function rightFn(){

 		num++;

 		if (num>23) {

 			num=0;

 			huochetou.css('left',0);
 		}

 		go();

 	}

 	// 往左走的功能

 	function go(){

 		var s=-imgWidth*num;

 		huochetou.stop().animate({'left':s},500);

 	}
});
// 客户心声结束
// 客户图片显示对应的说明开始
$(function() {
	
	$('.lunboList li').mouseenter(function(event){

		var index=$(this).index();

		// alert(index);

		// $('.sideBarList li').eq(index).attr('class','current4').siblings().attr('class','');

		$('.cusShow>li').eq(index).attr('class','current5').siblings().attr('class','');
	})




});
// 客户图片显示对应的说明结束
// 商品分类开始
$(function() {



	$('.sideBarList li').mouseenter(function(event){

		var index=$(this).index();

		// alert(index);

		$('.sideBarList li').eq(index).attr('class','current4').siblings().attr('class','');

		$('.contentSh>li').eq(index).attr('class','current3').siblings().attr('class','');
	});

	$('.sideBarList').niceScroll({
                cursorcolor: "#ccc",//#CC0071 光标颜色
                cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //像素光标的宽度
                cursorborder: "0", // 	游标边框css定义
                cursorborderradius: "5px",//以像素为光标边界半径
                autohidemode: true //是否隐藏滚动条
            });
});
// 商品分类结束






























