<?php
    include("./config.php");
    $sql = "select * from shoplist";
    $res = mysql_query($sql);
    $arr = array();
    
    while($row = mysql_fetch_assoc($res)){
        array_push($arr,$row);
    }
    //  echo $arr;
    echo json_encode($arr);
?>



