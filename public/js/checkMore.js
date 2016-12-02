$(document).ready(function(){
	//copy url
	$(".api-url-copy").on("click",function(){
		layer.msg('好的，链接已经复制到剪贴板', {icon: 6});
	});

	$(".api-delete").on("click",function(){
		layer.confirm('你确定要删除该条数据？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  layer.msg('好的，你已经成功删除该记录！', {icon: 1});
		  window.location.reload()
		}, function(){
		  return true;
		});
		
		
	});
});