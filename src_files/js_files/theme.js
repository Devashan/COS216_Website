if (sessionStorage.getItem('theme') != null)
{
	if (sessionStorage.getItem('theme') == 1)
	{
		document.querySelector("link[rel='stylesheet']").href = document.querySelector("link[rel='stylesheet']").href + "myStyleLight.css";
	}
	else
	{
		document.querySelector("link[rel='stylesheet']").href = document.querySelector("link[rel='stylesheet']").href + "myStyle.css";
	}
}
else
{
	document.querySelector("link[rel='stylesheet']").href = document.querySelector("link[rel='stylesheet']").href + "myStyle.css";

}