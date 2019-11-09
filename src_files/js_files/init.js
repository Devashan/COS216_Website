var id = 666;

switch ($(document).attr('title'))
{
    case "Home":
        id = 0;
        break;

    case "Discover":
        id = 1;
        break;

    case "Featured":
        id = 2;
        break;

    case "Top Rated":
        id = 3;
        break;

    case "Latest":
        id = 4;
        break;

    case "Calendar":
        id = 5;
        break;
}

var nav = $(".navbar");

nav.eq(id).attr("id", "current");

var i;

if (id == 0)
{
    for (i = 1; i < 6; i++)
    {
        nav.eq(i).attr("href", "src_files/html_files/" + nav.eq(i).attr("href"));
    }
}
else if (id == 666)
{
    console.error(id);
}
else
{
    nav.eq(0).attr("href", "../../" + nav.eq(0).attr("href"));
    nav.eq(6).attr("href", "../../" + nav.eq(6).attr("href"));
    nav.eq(7).attr("href", "../../" + nav.eq(7).attr("href"));
}

if (sessionStorage.getItem('key')!= null)
{

    $('.mainlogo').css('visibility', 'visible');

    $('#user').text(sessionStorage.getItem('name'));

    $('#login').text('Logout');

    $('#login').click(function()
    {
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('theme');
        location = "../../index.php?type=login";
    });

    $('#user').removeAttr('href');

    $('nav').append('<a id="theme" class="navbar" onClick="CHANGE_THEME()" style="float:right">THEME</a>');

    
}
