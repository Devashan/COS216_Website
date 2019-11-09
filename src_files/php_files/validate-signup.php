<?php

	//echo $_POST["username"];

	require_once 'config.php';

	$email = $_POST['emailaddress'];
	$username = $_POST['username'];
	$surname = $_POST['surname'];
	$password = $_POST['passwd'];



	function CHECK_EMAIL($email)
	{
		if ($email == "")
		{
			return false;
		}

		return preg_match("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/",$email);
	}

	function CHECK_USER($username)
	{
		if ($username == "")
		{
			return false;
		}

		return true;
	}

	function CHECK_SURNAME($surname)
	{
		if ($surname == "")
		{
			return false;
		}

		return true;
	}

	function CHECK_PASS($password)
	{
		if ($password == "")
		{
			return false;
		}

		return preg_match("/(?=^.{9,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?\/&gt;.&lt;,])(?!.*\s).*$/",$password);
	}



	$results = $db_conn->query("SELECT * FROM main_table WHERE email = '".$_POST['emailaddress']."'");

	if ($results->num_rows > 0)
	{
		header('Location: ../../index.php?val=1');
	}
	else if (!CHECK_EMAIL($email))
	{
		header('Location: ../../index.php?val=2');
	}
	else if (!CHECK_USER($username))
	{
		header('Location: ../../index.php?val=3');
	}
	else if (!CHECK_SURNAME($surname))
	{
		header('Location: ../../index.php?val=4');
	}
	else if (!CHECK_PASS($password))
	{
		header('Location: ../../index.php?val=5');
	}
	else
	{
		$key = bin2hex(openssl_random_pseudo_bytes(16));
		$salt = bin2hex(openssl_random_pseudo_bytes(32));

		$db_conn->query("INSERT INTO main_table(name, surname, email, password, API_key, salt) VALUES ('".$_POST['username']."', '".$_POST['surname']."', '".$_POST['emailaddress']."', '".hash('haval256,5', $_POST['passwd'] . $salt)."', '".$key."', '".$salt."')");


		header('Location: ../../index.php?key='.$key);
	}

	$db_conn->close();

?>