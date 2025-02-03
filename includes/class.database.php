<?php

if( ! class_exists( 'Database' ) ){
    class Database {
        public static function update_database() {
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
                            `bioOrResume` MEDIUMTEXT NULL,
                            `date_creation` DATETIME NULL,
                            PRIMARY KEY (`id_wa_form_submissions`))
                        ENGINE = InnoDB'
                    ,
                )
            );

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
                    $sql = Templates::change_variable( $sql, '#prefix#', $wpdb->prefix );
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
        }
    }
}