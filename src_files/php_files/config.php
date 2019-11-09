<?php
	$CONFIG["db"] = new stdClass();
	$CONFIG['db']->user = 'u16029063';
	$CONFIG['db']->pw = 'Trustno1';
	$CONFIG['db']->host = '127.0.0.1';

	$db_conn = new mysqli($CONFIG['db']->host, $CONFIG['db']->user, $CONFIG['db']->pw);

	$db_conn->select_db('u16029063');


