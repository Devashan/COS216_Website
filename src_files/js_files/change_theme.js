function CHANGE_THEME()
{
	var THEME_CHANGE_REQ = new XMLHttpRequest();

	var key = sessionStorage.getItem('key');






	THEME_CHANGE_REQ.onreadystatechange = function()
	{



		if (THEME_CHANGE_REQ.readyState == 4 && THEME_CHANGE_REQ.status == 200)
		{
			var theme = THEME_CHANGE_REQ.responseText;

			sessionStorage.setItem('theme', theme);

/*
			location = "../../index.php?type=loggedIn";
*/

		}
	};


	THEME_CHANGE_REQ.open("POST", "http://u16029063:Trustno1@wheatley.cs.up.ac.za/u16029063/api.php", true);
	THEME_CHANGE_REQ.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	THEME_CHANGE_REQ.send("type=theme&key=" + key);
}