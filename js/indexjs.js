$(function(){
	$("#btn1").click(function(){
		if (($("#user").val() == "")||($("#user").val() == null)) {
			alert("请输入姓名");
		}else if (($("#pwd").val() == "")||($("#pwd").val() == null)) {
			alert("请输入学号");
		}else if ($("#user").val() == "梁定富" && $("#pwd").val() == "07160628") {
			window.open('main.html');
		}else{
			alert("用户名或学号错误");
		}
	});
});
