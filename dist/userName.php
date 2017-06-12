<?php
	//
		header("Content-type","text/html;charset=utf-8");
	
	//1、接收客户端的数据
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","root","123456");
	
	//2、选择数据库
	mysql_select_db("user",$conn);
	
	
	//3、执行SQL语句
	$sqlStr ="insert into username(username,userpass) values('".$userName."','".$userPass."')";
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);
	//echo "注册成功！<a href='index.html'>进入主页</a>";
    //echo $sqlStr;
    if($sqlStr){
		echo "1";
	}else{
		echo "0";
	}
	
?>