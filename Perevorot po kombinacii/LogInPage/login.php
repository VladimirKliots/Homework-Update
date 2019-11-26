<?php
    $login = $_GET['login'];
    $pass = $_GET['password'];
    $deviceName = $_GET['deviceName'];

    $link = mysqli_connect('localhost', 'root', '', 'users') 
    or die("Ошибка " . mysqli_error($link));

    $query ="SELECT * FROM login where Password = '$pass'and Login = '$login' and DeviceName = '$deviceName'";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

    if($result)
    {
        $example = "";
        $rows = mysqli_num_rows($result);

        for ($i = 0 ; $i < $rows ; ++$i)
        {
        $row = mysqli_fetch_row($result);
            for ($j = 0 ; $j < 5 ; ++$j){
                $example = "$row[$j] " ;
            } 
        }
        if($example == ""){
            echo "<script>
            localStorage.setItem('status', 'cancel');
            window.location.href = 'http://site/';
            </script>";
          }
            if($example){
                 echo "<script>
            localStorage.setItem('status', 'success');
            localStorage.setItem('Name','$example');
            window.location.href = 'http://site/';
            </script>";
                } 
            mysqli_free_result($result);
        }
    mysqli_close($link);
?>
