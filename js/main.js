$(function(){//GNB메뉴
	$("#GNB > ul > li").hover(
		function(){
			$(this).find("ul").stop().fadeIn(300);
		},
		function(){
			$(this).find("ul").stop().fadeOut(300);
		}
	);

	$(".sub").hide();



	$(".main").click(function(e){
		e.preventDefault();
		if($(this).hasClass("on") == false){
			$(".main").removeClass("on");
			$(this).addClass("on");
			$(".sub").slideUp(300);
			$(this).next().slideDown(300);
		}else{
			$(this).removeClass("on");
			$(this).next().slideUp(300);
		}
	});
	//keyvisual
	$(".keyvisual li").eq(0).addClass("active");
	var n1=0;

	setInterval(function(){
		if(n1 < 2){
			n1=n1+1;
		}
		else{
			n1=0;
		}

		$(".keyvisual  li").removeClass("active");
		$(".keyvisual  li").eq(n1).addClass("active");
	},3000);


	//메뉴버튼 click
	// $(".menu_container").hide();
	/*
	$("#menu_btn").click(function(){
		$(".small_menu_container").show();
	});*/

	var menuFlag=false;

	$("#menu_btn, .close").click(function(){
		console.log("clicked");
		$(".menu_overlay").toggleClass("active");

		if(menuFlag == false){ // 기본 플래그 값
			menuFlag=true;
			$("#small_menu_zone").animate({right:0}, 300);
		}
		else{
			menuFlag=false;
			$("#small_menu_zone").animate({right:-240}, 300);
		}
	});

	var w1, keyW, keyH;
	var timer1;

	$(window).resize(function(){
		clearTimeout(timer1);

		timer1=setTimeout(function(){
			w1=$(window).width();

			if(w1 >= 1800){
				keyW=1800;
			}
			else{
				keyW=w1;
			}

			keyH=$(".keyvisual img").height();
			// console.log(keyW+" : "+keyH);

			$(".keyvisual").css({width:keyW, height:keyH});
		}, 10);
	});

// 메뉴 ~
	var total; // Ŭ���� �� �ִ� ��ȣ �����Դϴ�.
	var n=0; // �¿� ��ư���� �����Ǵ� ��ȣ �����Դϴ�.
	var w; // �������� ���� ũ�� �����Դϴ�.
	var bestW; // ���� �ϳ�(li)�� ���� ũ�� �����Դϴ�.
	var distance; // ���� ����(ul)�� ��ġ�� ���� ��ġ �����Դϴ�.
	var timer; // ȭ���� ���������� ���쿡 ������ �� Ÿ�̸� �����Դϴ�.

	$(".menu_controller div").hover(
		function(){
			$(this).addClass("ov");
		},
		function(){
			$(".menu_controller div").removeClass("ov");
		}
	);
	$(".menu_right_controls").click(function(e){
		e.preventDefault();

		if(n < total){
			n=n+1;
		}
		distance=(bestW*n)*(-1);
		$(".menu_images ul").css({left:distance});
	});
	$(".menu_left_controls").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
		}
		distance=(bestW*n)*(-1);
		$(".menu_images ul").css({left:distance});
	});
	$(window).resize(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			w=$(this).width();
			bestW=$(".menu_images li").width();
			$(".menu_images ul").css({left:0});
			n=0;

			if(w > 956){
				total=1;
			}else if(w <= 956 && w > 710){
				total=2;
			}else if(w <= 710 && w > 480){
				total=3;
			}else {
				total=4;
			}
		}, 300);
	});
	$(window).trigger("resize");
});
