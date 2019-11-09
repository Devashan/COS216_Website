<?php

echo "

<form method=\"post\" action=\"src_files/php_files/validate-login.php\">
			<div class=\"loginWindow\">
				<a class=\"heading\">LOGIN</a>
				<div class=\"enterbox\">
					<a class=\"heading2\">ENTER YOUR EMAIL ADDRESS</a>
					<input class=\"signupinput\" type=\"text\" name=\"emailaddress\" placeholder=\"Email\"><br>
				</div>
				<div class=\"enterbox\">
					<a class=\"heading2\">ENTER YOUR PASSWORD</a>
					<input id=\"pass\" class=\"signupinput\" type=\"password\" name=\"passwd\" placeholder=\"Password\"><br>
				</div>
				<button class=\"submit\" type=\"button\" onclick=\"LOGIN()\" >LOGIN</button>
			</div>
		</form>

";