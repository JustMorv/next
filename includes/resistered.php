<?php
    session_start();
    require_once "connect.php";

    $regFullName = $_POST["regFullName"];
    $regLoggin = $_POST["regLoggin"];
    $regEmaill = $_POST["regEmaill"];
    $regPassword = $_POST["regPassword"];
    $regPasswordAccept = $_POST["regPasswordAccept"];




        if ($regPassword === $regPasswordAccept){
            $path = "drop/" . time() .$_FILES["regAvatar"]["name"];
            
            if(!move_uploaded_file($_FILES["regAvatar"]["tmp_name"], "../" . $path)){
                $_SESSION["message"] = "ошибка при загрузке изображения";
                header("location: ../register.php");
            }
    
            $regPassword = md5($regPassword);
            mysqli_query($connect, "INSERT INTO `users` (`id`,`full_name`, `loggin`, `email`, `password`, `avatar`) VALUES (NULL,'{$regFullName}', '{$regLoggin}', '{$regEmaill}', '{$regPassword}', '{$path}');");
            $_SESSION["message"] = "Регистрация прошла успешна!";
    
            header("location: ../authorization.php");
    
        }else{
            $_SESSION["message"] = "Пороли не совпадают";
            header("location: ../register.php");
        }
    ?>
