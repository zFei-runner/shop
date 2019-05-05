<?php
include("./config.php");
$id = $_GET["id"];
$num = $_GET["num"];
$price = $_GET["price"];
$sql = "update shoplist set price=$price,num=$num where id=$id";
$res = mysql_query($sql);
if($res){
    echo json_encode(array(
        "res_code" => 1,
        "res_message" => "修改成功"
    ));
}else{
    echo json_encode(array(
        "res_code" => 0,
        "res_message" => "修改失败！！！"
    ));
}
?>