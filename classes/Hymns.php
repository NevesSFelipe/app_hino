<?php

    require_once 'classes/Database.php';
    
    class Hymns {

        private Database $database;

        public function __construct()
        {
            $this->database = new Database();
        }

        public function show_hymns(string $table): array
        {
            $return = $this->database->read($table);
            $array_return = array();

            while($rows = mysqli_fetch_assoc($return)) {
                array_push($array_return, $rows);
            }

            return $array_return;

        }

    }

?>