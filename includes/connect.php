<?php

    $connect = mysqli_connect("localhost","root", "", "dbUsersReg");
    if(!$connect){
        die("Error connect");
    }