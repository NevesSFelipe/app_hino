<?php

    require_once 'classes/Hymns.php';
    $hymns = new Hymns;

    $action = $_REQUEST['action'];

    switch($action) {

        case "list":
            header('Content-Type: application/json');
            echo json_encode($hymns->show_hymns($_REQUEST["table"]));
        break;

    }