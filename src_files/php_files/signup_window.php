<?php

echo "
<form method=\"post\" action=\"src_files/php_files/validate-signup.php\">
            <div class=\"signupWindow\">
                <a class=\"heading\">SIGN UP</a>
                <div class=\"enterbox\">
                    <a class=\"heading2\">ENTER YOUR EMAIL ADDRESS</a>
                    <input class=\"signupinput\" type=\"text\" name=\"emailaddress\" placeholder=\"Email\"><br>
                </div>
                <div class=\"enterbox\">
                    <a class=\"heading2\">ENTER YOUR NAME</a>
                    <input class=\"signupinput\" type=\"text\" name=\"username\" placeholder=\"Username\"><br>
                </div>
				<div class=\"enterbox\">
					<a class=\"heading2\">ENTER YOUR SURNAME</a>
					<input class=\"signupinput\" type=\"text\" name=\"surname\" placeholder=\"Surname\"><br>
				</div>
                <div class=\"enterbox\">
                    <a class=\"heading2\">CREATE A PASSWORD</a>
                    <input id=\"pass\" class=\"signupinput\" type=\"password\" name=\"passwd\" placeholder=\"Password\"><br>
                    <a id=\"passreq\" style=\"color: #999; font-size: 11px;\">*must contain at least 9 characters, upper and lower case with at least 1 number and symbol</a>
                </div>
                <button class=\"submit\" type=\"button\" onclick=\"VALIDATE_FORM()\" >SUBMIT</button>
            </div>
        </form>

";