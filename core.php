<?php

    require_once 'classes/Hymns.php';
    $hymns = new Hymns;

    $action = $_REQUEST['action'];

    switch($action) {

        case "list":
            print_r(json_encode($hymns->show_hymns($_REQUEST["table"])));
        break;

    }