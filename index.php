<!DOCTYPE html>
<html>

<head>
    <title>Home</title>

    <link rel="stylesheet" type="text/css" href="src_files/css_files/">
    <link rel="shortcut icon" href="src_files/image_files/my_icon.ico" />

	<script type="application/javascript" src="src_files/js_files/theme.js"></script>
    <script src="src_files/js_files/jquery-3.4.0.js"></script>
    <script type="application/javascript" src="src_files/js_files/myScripts.js"></script>
	<script type="application/javascript" src="src_files/js_files/validate.js"></script>
	<script type="application/javascript" src="src_files/js_files/login.js"></script>
	<script type="application/javascript" src="src_files/js_files/change_theme.js"></script>
</head>

<body>

		<script>console.error("session storage key = " + sessionStorage.getItem('key'));</script>
		<script>console.error("session storage name = " + sessionStorage.getItem('name'));</script>





    <?php include "src_files/php_files/header.php" ?>




    <div class="overlay">
        <img class="mainlogo" src="src_files/image_files/logo.png" alt="Logo" >

		<script class="head" type="application/javascript" src="src_files/js_files/init.js"></script>

		<?php





			if ($_GET['type'] == "loggedIn")
			{
				echo "<script>alert('You are now logged in!');</script>";

				/*echo "<script>$('.mainlogo').css('visibility', 'visible');</script>";

				echo "<script>$('#user').text(sessionStorage.getItem('name'));</script>";

				echo "<script>$('#login').text('Logout');</script>";

				echo "<script>$('#login').click(function()
				{
					sessionStorage.removeItem('key');
					sessionStorage.removeItem('name');
					location = \"index.php?type=login\";
				
				})</script>";

				echo "<script>$('#user').removeAttr('href')</script>";

				echo "<script>$('nav').append('<a id=\"theme\" class=\"navbar\" style=\"float:right\">THEME</a>')</script>";*/
			}
			else if ($_GET['type'] == "login")
			{
				include "src_files/php_files/login_window.php";
			}
			else if ($_GET['type'] != "loggedIn")
			{
				include "src_files/php_files/signup_window.php";
			}


		?>


    </div>

	<?php

	if (isset($_GET['val']))
	{
		$temp = $_GET['val'];

		if ($temp == 1)
		{
			echo "<script>alert(\"Account creation failed. User already exists. -PHP-\" + '$temp');</script>";
		}
		else if ($temp == 2)
		{
			echo "<script>alert(\"Invalid email address entered. Please ensure that you enter a valid email address. -PHP-\");</script>";
		}
		else if ($temp == 3)
		{
			echo "<script>alert(\"Invalid name entered. Please ensure that you enter a valid name. -PHP-\");</script>";
		}
		else if ($temp == 4)
		{
			echo "<script>alert(\"Invalid surname entered. Please ensure that you enter a valid surname. -PHP-\");</script>";
		}
		else if ($temp == 5)
		{
			echo "<script>alert(\"Invalid password entered. Please ensure that your password between 9 and 32 characters, upper and lower case with at least one number and one symbol. -PHP-\");</script>";
		}
		else if ($temp == 6)
		{
			echo "<script>alert(\"Invalid email address entered. -PHP-\");</script>";
		}
		else if ($temp == 7)
		{
			echo "<script>alert(\"Invalid password entered. -PHP-\");</script>";
		}
		else if ($temp == 8)
		{
			echo "<script>alert(\"User does not exist. -PHP-\");</script>";
		}
		else if ($temp == 9)
		{
			echo "<script>alert(\"Password is invalid. -PHP-\");</script>";
		}


		if ($temp < 6)
		{
			echo "<script>location=\"index.php?type=signup\";</script>";
		}
		else
		{
			echo "<script>location=\"index.php?type=login\";</script>";
		}


	}

	if (isset($_GET['key']))
	{
		echo "<script>alert('Account successfully created!');</script>";

		echo "<script>$('form').hide();$('.mainlogo').css('visibility', 'visible');</script>";

		$temp = $_GET['key'];


		function alert($temp)
		{
			echo "<script>alert(\"Your API Key is: \" + '$temp');</script>";
		}

		alert($temp);

		echo "<script>location=\"index.php\";</script>";
	}

	?>



</body>
</html>