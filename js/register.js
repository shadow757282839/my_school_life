
var judge_user = false;
var judge_pwd = false;
var judge_repass = false;
var judge_sex = false;
var judge_birthday = false;
var judge_tel = false;
var judge_email = false;
$(function(){

	//用户名
	$('#user').blur(function(){
	  if ((/^[0-9A-Za-z\u4e00-\u9fa5]{2,14}$/).test($("#user").val())){
	    $('#img1').attr("src","../images/right.jpg");
	    judge_user = true;
	  }else {
	   $('#img1').attr("src","../images/wrong.jpg");
	    judge_user = false;
	  }
	});

	//密码
	$('#pwd').blur(function(){
	  if ((/^[a-z0-9_-]{6,12}$/).test($("#pwd").val())){
	   $('#img2').attr("src","../images/right.jpg");
	    judge_pwd = true;
  	  }else {
	    $('#img2').attr("src","../images/wrong.jpg");
	    judge_pwd = false;
   	  }
   });

   //确认密码
$('#repass').blur(function(){
  if (($("#pwd").val())==($("#repass").val())){
     $('#img3').attr("src","../images/right.jpg");
	   judge_repass = true;
  }else {
     $('#img3').attr("src","../images/wrong.jpg");
	   judge_repass = false;
  }
});

//性别
$('input:radio[name="gender"]').click(function(){
if($('input:radio[name="gender"]:checked').val() != null){  
       $('#img4').attr("src","../images/right.jpg");
	   judge_sex = true;  
}else{  
       $('#img4').attr("src","../images/right.jpg");
	   judge_sex = false;
} 
});

 // 生日
$('#birthday').blur(function(){
  if ((/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/).test($("#birthday").val())){
    $('#img5').attr("src","../images/right.jpg");
	    judge_birthday = true;
  }else {
   $('#img5').attr("src","../images/wrong.jpg");
	    judge_birthday = false;
  }
});

 // 联系电话
$('#tel').blur(function(){
  if ((/^1[34578]\d{9}$/).test($("#tel").val())){
    $('#img6').attr("src","../images/right.jpg");
	    judge_tel = true;
  }else {
   $('#img6').attr("src","../images/wrong.jpg");
	    judge_tel = false;
  }
});

 //电子邮箱
$('#email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#email").val())){
   $('#img7').attr("src","../images/right.jpg");
	    judge_email = true;
  }else {
    $('#img7').attr("src","../images/wrong.jpg");
	    judge_email = false;
  }
});

//提交
$('#sub').click(function(){
  if(judge_user==true && judge_pwd==true && judge_repass==true && judge_sex==true && judge_birthday==true && judge_tel==true && judge_email==true && $('#check').is(':checked')){
    window.open("index.html");
  }else{
    alert("请完善信息");
    return false;
  }
});


});
