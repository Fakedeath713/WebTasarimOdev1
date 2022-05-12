<?php
    if(isset($_POST['email']) && isset($_POST['password']))
    {
        if($_POST['email'] == "b211210098@sakarya.edu.tr")
        {
            if($_POST['password'] == "b211210098")
                echo 'alert("Hoşgeldiniz\"b211210098\"")';
        }
    }
?>