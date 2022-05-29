<?
    session_start();
    require_once "connect.php";

    $AutoLoggin = $_POST["AutoLoggin"];
    $AutoPassword = md5($_POST["AutoPassword"]);


    $check_User = mysqli_query($connect," SELECT * FROM `users` WHERE `loggin` = '{$AutoLoggin}' AND `password` = '{$AutoPassword}';");

    if(mysqli_num_rows($check_User) > 0){
        $user = mysqli_fetch_assoc($check_User);
        $_SESSION["user"] = [
            "id" => $user["id"],
            "loggin" => $user["loggin"],
            "avatar" => $user["avatar"],

        ];

        echo $user["id"]."<br>";
        echo $user["loggin"]."<br>";
        echo $user["avatar"]."<br>";

        header("Location: ../profile.php");


    }else{
        $_SESSION["message"] = "Не верный Логин или Пароль";
        header("Location: ../authorization.php");
    }

?>