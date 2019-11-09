function LOGIN()
{
	var input = $("input");
	var email = input.eq(0).val();
	var passwd = input.eq(1).val();

	if (!CHECK_EMAIL(email))
	{
		alert("Invalid email address entered.")
	}
	else if (!CHECK_PASS(passwd))
	{
		alert("Invalid password entered.")
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

function CHECK_PASS(passwd)
{
	if (passwd.length > 32)
	{
		return false;
	}

	var re = /(?=^.{9,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

	return re.test(passwd);
}