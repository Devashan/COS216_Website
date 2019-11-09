<?php

	$email = $_POST['emailaddress'];
	$password = $_POST['passwd'];

	require_once 'config.php';





	function LOGIN($email)
	{
		$req = curl_init();

		$url = 'http://u16029063:Trustno1@wheatley.cs.up.ac.za/u16029063/api.php';

		curl_setopt($req, CURLOPT_PROXY, "phugeet.cs.up.ac.za:3128");
		curl_setopt($req, CURLOPT_POST, 1);
		curl_setopt($req, CURLOPT_POSTFIELDS,'type=login&email='.$email);
		curl_setopt($req, CURLOPT_URL, $url);
		curl_setopt($req, CURLOPT_RETURNTRANSFER, 1);

		$returned = curl_exec($req);

/*		header('Location: ../../index.php?type=loggedIn');*/

		echo $returned;

		echo "<script>location=\"../../index.php?type=loggedIn\";</script>";

/*		return curl_getinfo($req, CURLINFO_HTTP_CODE);*/
	}


	function CHECK_EMAIL($email)
	{
		if ($email == "")
		{
			return false;
		}

		return preg_match("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/",$email);
	}

	function CHECK_PASS($password)
	{
		if ($password == "")
		{
			return false;
		}

		return preg_match("/(?=^.{9,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?\/&gt;.&lt;,])(?!.*\s).*$/",$password);
	}



	if (!CHECK_EMAIL($email))
	{
		header('Location: ../../index.php?val=6&type=login');
	}
	else if (!CHECK_PASS($password))
	{
		header('Location: ../../index.php?val=7&type=login');
	}
	else if ($db_conn->query("SELECT email FROM main_table WHERE email = '".$email."'")->num_rows == 0)
	{
		header('Location: ../../index.php?val=8&type=login');
	}
	else
	{
		if (hash('haval256,5', $_POST['passwd'] . $db_conn->query("SELECT salt FROM main_table WHERE email = '".$_POST['emailaddress']."'")->fetch_assoc()['salt']) != $db_conn->query("SELECT password FROM main_table WHERE email = '".$_POST['emailaddress']."'")->fetch_assoc()['password'])
		{
			header('Location: ../../index.php?val=9&type=login');
		}
		else
		{

			LOGIN($email);

			/*if (LOGIN($email) == 200)
			{
				header('Location: ../../index.php?type=loggedIn');
			}
			else
			{
				header('Location: ../../index.php?type=login');
			}*/





			/*$apikey = $db_conn->query("SELECT API_key FROM main_table WHERE email = '".$_POST['emailaddress']."'")->fetch_assoc()['API_key'];

			echo "<script>sessionStorage.setItem('key','$apikey')</script>";*/

		}
	}

	$db_conn->close();

?>