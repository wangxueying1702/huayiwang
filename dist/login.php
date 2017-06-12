<?php
	header("Content-type","text/html;charset=utf-8");
	
	//一、接收用户的数据（用户名，密码）
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","root","123456");
	
	//2、选择数据库
	mysql_select_db("user",$conn);
	//3、执行SQL语句
	
	$sqlStr ="select * from username where username='".$userName."' and userPass='".$userPass."'";
	$result = mysql_query($sqlStr,$conn);
	$rows = mysql_num_rows($result);
	//4、关闭数据库
	mysql_close($conn);
	
	if($rows==0){
		echo "false";
	}else{
		echo "true";
	}
?>