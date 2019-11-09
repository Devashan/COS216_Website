function VALIDATE_FORM()
{
	var input = $("input");
    var email = input.eq(0).val();
	var username = input.eq(1).val();
	var surname = input.eq(2).val();
	var passwd = input.eq(3).val();

    if (!CHECK_EMAIL(email))
	{
		alert("Invalid email address entered. Please ensure that you enter a valid email address.")
	}
    else if (!CHECK_USER(username))
	{
		alert("Invalid name entered. Please ensure that you enter a valid name.")
	}
	else if (!CHECK_SURNAME(surname))
	{
		alert("Invalid surname entered. Please ensure that you enter a valid surname.")
	}
    else if (!CHECK_PASS(passwd))
	{
		alert("Invalid password entered. Please ensure that your password between 9 and 32 characters, upper and lower case with at least one number and one symbol.")
	}
    else
	{
		$("form").submit();
	}
}

function CHECK_EMAIL(email)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function CHECK_USER(username)
{
	if (username == "")
	{
		return false;
	}

	return true;
}

function CHECK_SURNAME(surname)
{
	if (surname == "")
	{
		return false;
	}

	return true;
}

function CHECK_PASS(passwd)
{
	if (passwd.length > 32)
	{
		return false;
	}

	var re = /(?=^.{9,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

	return re.test(passwd);
}