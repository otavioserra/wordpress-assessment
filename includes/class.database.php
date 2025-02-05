<?php

if( ! class_exists( 'Database' ) ){
    class Database {
        private static function get_database_scheme(){
            /*
                template database scheme
                    
                    'tableName' => 
                        'SQL_CODE'
                    ,
            */

            // Database scheme.
            $dataBase = Array(
                'tables' => Array(
                    'wa_form_submissions' => 
                        'CREATE TABLE IF NOT EXISTS `#prefix#wa_form_submissions` (
                            `id_wa_form_submissions` INT NOT NULL AUTO_INCREMENT,
                            `first_name` VARCHAR(100) NULL,
                            `last_name` VARCHAR(200) NULL,
                            `phone` VARCHAR(30) NULL,
                            `birthdate` DATE NULL,
                            `email` VARCHAR(255) NULL,
                            `country` VARCHAR(100) NULL,
                            `language` VARCHAR(100) NULL,
                            `framework` VARCHAR(100) NULL,
                            `bioOrResume` MEDIUMTEXT NULL,
                            `date_creation` DATETIME NULL,
                            PRIMARY KEY (`id_wa_form_submissions`))
                        ENGINE = InnoDB'
                    ,
                    'wa_languages' => 'CREATE TABLE IF NOT EXISTS `#prefix#wa_languages` (
                        `id_language` INT NOT NULL AUTO_INCREMENT,
                        `language_name` VARCHAR(100) NULL,
                        PRIMARY KEY (`id_language`))
                    ENGINE = InnoDB'
                    ,
                    'wa_frameworks' => 'CREATE TABLE IF NOT EXISTS `#prefix#wa_frameworks` (
                        `id_framework` INT NOT NULL AUTO_INCREMENT,
                        `framework_name` VARCHAR(100) NULL,
                        `id_language` INT NULL,
                        PRIMARY KEY (`id_framework`),
                        FOREIGN KEY (`id_language`) REFERENCES `#prefix#wa_languages`(`id_language`))
                    ENGINE = InnoDB'
                ),
                'inserts' => array(
                    'wa_languages' => array(
                        "INSERT INTO `#prefix#wa_languages` (`language_name`) VALUES ('PHP')",
                        "INSERT INTO `#prefix#wa_languages` (`language_name`) VALUES ('Java')",
                        "INSERT INTO `#prefix#wa_languages` (`language_name`) VALUES ('JavaScript')",
                        "INSERT INTO `#prefix#wa_languages` (`language_name`) VALUES ('C#')",
                    ),
                    'wa_frameworks' => array(
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Laravel', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'PHP'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Symfony', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'PHP'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Struts', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'Java'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Grails', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'Java'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('React', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'JavaScript'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Angular', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'JavaScript'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Node', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'JavaScript'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('ASP.NET', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'C#'))",
                        "INSERT INTO `#prefix#wa_frameworks` (`framework_name`, `id_language`) VALUES ('Blazor', (SELECT `id_language` FROM `#prefix#wa_languages` WHERE `language_name` = 'C#'))",
                    ),
                ),
            );

            return $dataBase;
        }

        public static function update_database() {
            // Get database scheme.
            $dataBase = self::get_database_scheme();

            // Require templates class to manipulate table prefix.
            require_once( OS_PATH . 'includes/class.templates.php' );

            // Scan all tables.
            global $wpdb;
            $all_tables = $wpdb->get_results( "SHOW TABLES", ARRAY_A );
            
            if( isset( $dataBase ) )
            foreach( $dataBase['tables'] as $table => $sql){
                // Search for the table
                $foundTable = false;
                foreach( $all_tables as $table_wp){
                    if( $table_wp['Tables_in_' . DB_NAME] == $wpdb->prefix . $table ){
                        $foundTable = true;
                        break;
                    }
                }
        
                // Create table if it does not exist, otherwise update fields.
                if( ! $foundTable ){
                    // Create table
                    $sql = Templates::change_variable_all( $sql, '#prefix#', $wpdb->prefix );
                    $wpdb->query( $sql );
                } else {
                    // Get all fields from the table.
                    $fields = $wpdb->get_results( "SHOW COLUMNS FROM `{$wpdb->prefix}{$table}`", ARRAY_A );

                    // Scan all SQL rows.
                    $alterTableAfter = '';
                    foreach( preg_split( "/((\r?\n)|(\r\n?))/", $sql ) as $lineSQL ){
                        $lineSQL = trim( $lineSQL );
                        $line_arr = explode( ' ', $lineSQL );
                        
                        if( $line_arr[0] ){
                            switch( $line_arr[0] ){
                                case 'CREATE':
                                case 'ENGINE':
                                case 'PRIMARY':
                                    // Ignore lineSQL
                                break;
                                default:
                                    // If you find the pattern `fieldName`. Checks if all fields exist.
                                    preg_match( '/`.*?`/', $lineSQL, $matches );
                                    
                                    if( $matches[0] ){
                                        $field = ltrim( rtrim( $matches[0], "`" ), "`" );

                                        $foundField = false;
                                        if( isset( $fields ) )
                                        foreach( $fields as $fieldDB ){
                                            if( $field == $fieldDB['Field'] ){
                                                $foundField = true;
                                                break;
                                            }
                                        }
                                        
                                        // If it doesn't find a field, it changes the table and includes the line.
                                        if( ! $foundField ){
                                            $fieldData = rtrim( $lineSQL, "," );
                                            $wpdb->query( 'ALTER TABLE `'.$wpdb->prefix.$table.'` ADD '.$fieldData . $alterTableAfter );
                                        }
                                        
                                        // After to put it in the correct sequence that comes from SQL.
                                        $alterTableAfter = ' AFTER `'.$field.'`';
                                    }
                                    
                            }
                        }
                    }
                }
            }

            // Inserting standard data.
            foreach( $dataBase['inserts'] as $table => $inserts ) {
                $tableNameWithPrefix = $wpdb->prefix . $table;
                $count = $wpdb->get_var( "SELECT COUNT(*) FROM {$tableNameWithPrefix}" );
                if( $count == 0 ) {
                    foreach( $inserts as $insertSQL ) {
                        $insertSQL = Templates::change_variable_all( $insertSQL, '#prefix#', $wpdb->prefix );
                        $wpdb->query( $insertSQL );
                    }
                }
            }
        }

        public static function drop_tables(){
            // Get database scheme.
            $dataBase = self::get_database_scheme();

            // Require templates class to manipulate table prefix.
            require_once( OS_PATH . 'includes/class.templates.php' );

            // Scan all tables.
            global $wpdb;
            $all_tables = $wpdb->get_results( "SHOW TABLES", ARRAY_A );
            
            if( isset( $dataBase ) )
            foreach( $dataBase['tables'] as $table => $sql){
                // Search for the table
                $foundTable = false;
                foreach( $all_tables as $table_wp){
                    if( $table_wp['Tables_in_' . DB_NAME] == $wpdb->prefix . $table ){
                        $foundTable = true;
                        break;
                    }
                }
        
                // Drop table if it exists.
                if( $foundTable ){
                    $wpdb->query( 'DROP TABLE `'.$wpdb->prefix.$table.'`' );
                }
            }
        }
    }
}