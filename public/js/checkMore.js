$(document).ready(function(){
	//copy url
	$(".api-url-copy").on("click",function(){
		layer.msg('好的，链接已经复制到剪贴板', {icon: 6});
	});

	$(".api-delete").on("click",function(){
		layer.msg('好的，已经成功删除该记录', {icon: 1});
		window.location.reload()
	});
});