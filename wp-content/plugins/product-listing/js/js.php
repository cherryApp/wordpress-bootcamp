<?php

$files = array(
	'jquery-2.2.3.min.js',
	'angular.min.js',
	'bootstrap.min.js',
	'main.js'
);

$js_content = '';
foreach( $files as $_file ) {
	$js_content .= ";\n//$_file: \n".file_get_contents( $_file );
}

header( "Content-type", "application/javascript" );
echo $js_content;