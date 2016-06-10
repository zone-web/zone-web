$(function(){
	$('#under>li>a').mouseenter(function(){
		$(this).addClass('underline');
	}).mouseleave(function(){
		$(this).removeClass('underline');
	});

	//1、拿到pathname  判断是哪个页面 高亮第几个

	var pathName = location.pathname;

	switch(pathName){
		//首页
		case '/':
		$(".container_right ul li").eq(0).addClass('active');
		break;
		case '/notes/list':
		$(".container_right ul li").eq(1).addClass('active');
		break;
	}


	// 

})
