<?php

class Database {

    const SERVER   = "localhost";
    const USER     = "root";
    const PASSWORD = "";
    const DATABASE = "emanuel_baptist_church";

    private object $connect;

    public function __construct()
    {
        $this->connect = mysqli_connect(self::SERVER, self::USER, self::PASSWORD, self::DATABASE);
        $this->connect->set_charset("utf8mb4");
        
        if(!$this->connect) {
            die("Não foi possível conectar no banco. Por favor, tente novamente mais tarde!");
        }
    }

    public function read($table): object
    {
        $sql = "SELECT * FROM $table";

        $return = mysqli_query($this->connect, $sql);

        if(!$return) {
            die("Não foi possível consultar no banco. Por favor, tente novamente mais tarde!");
        }

        return $return;

    }

}

