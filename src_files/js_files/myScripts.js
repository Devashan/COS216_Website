var CALENDAR_INIT = function()
{
    var i;

    for (i = 1; i < 31; i++)
    {
        document.getElementsByTagName("td")[i - 1].innerText = i;
    }
}



var FEAT_INIT = function()
{
    var base, size;

    var REQUEST_01_CONF = new XMLHttpRequest();

    REQUEST_01_CONF.onreadystatechange = function()
    {
        if (REQUEST_01_CONF.readyState == 4 && REQUEST_01_CONF.status == 200)
        {
            var RESPONSE_01_CONF = JSON.parse(REQUEST_01_CONF.responseText);

            base = RESPONSE_01_CONF.images.base_url;

            size = RESPONSE_01_CONF.images.poster_sizes[6];

            console.log(RESPONSE_01_CONF);

            console.log(base);
            console.log(size);

            FEAT_MOVIE_01(base, size,"forbidden%20planet");

            FEAT_MOVIE_02(base, size,"the%20birds");

            FEAT_MOVIE_03(base, size,"black%20sabbath");

        }
    }

    REQUEST_01_CONF.open("GET", "https://api.themoviedb.org/3/configuration?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", true);

    REQUEST_01_CONF.send();
}



var FEAT_MOVIE_01 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();
        
    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
            {
                RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

                console.log(RESPONSE_01_ID);

                IMDBID_01 = RESPONSE_01_ID.imdbID

                console.log(IMDBID_01);


                document.getElementById("planetRating").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;

                document.getElementById("Rated").innerText = "AGE RATING: " + RESPONSE_01_ID.Rated.toUpperCase();


                REQUEST_01_IMAGE = new XMLHttpRequest();

                REQUEST_01_IMAGE.onreadystatechange = function()
                {
                    if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                    {
                        RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                        console.log(RESPONSE_01_IMAGE);

                        var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                        console.log(image_link);

                        document.querySelectorAll("#planet")[0].style.backgroundImage = "url(" + image_link + ")";

                    }
                }

                REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

                REQUEST_01_IMAGE.send();

            }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);
    
    REQUEST_01_ID.send();

};

var FEAT_MOVIE_02 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;


    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("birdsRating").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;

            document.getElementById("Rated2").innerText = "AGE RATING: " + RESPONSE_01_ID.Rated.toUpperCase();


            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#birds")[0].style.backgroundImage = "url(" + image_link + ")";

                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();

};

var FEAT_MOVIE_03 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;



    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("sabbathRating").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;

            document.getElementById("Rated3").innerText = "AGE RATING: " + RESPONSE_01_ID.Rated.toUpperCase();


            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#sabbath")[0].style.backgroundImage = "url(" + image_link + ")";

                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();

};






var TOP_RATED_INIT = function()
{
    //var base, size;

    var REQUEST_01_TOP = new XMLHttpRequest();

    var RESPONSE_01_TOP;

    REQUEST_01_TOP.onreadystatechange = function()
    {
        if (REQUEST_01_TOP.readyState == 4 && REQUEST_01_TOP.status == 200)
        {
            RESPONSE_01_TOP = JSON.parse(REQUEST_01_TOP.responseText);


            console.log(RESPONSE_01_TOP);

        }
    }

    REQUEST_01_TOP.open("GET", "https://api.themoviedb.org/3/movie/top_rated?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US&page=1", false);

    REQUEST_01_TOP.send();





    var base, size;

    var REQUEST_02_CONF = new XMLHttpRequest();

    REQUEST_02_CONF.onreadystatechange = function()
    {
        if (REQUEST_02_CONF.readyState == 4 && REQUEST_02_CONF.status == 200)
        {
            var RESPONSE_02_CONF = JSON.parse(REQUEST_02_CONF.responseText);

            base = RESPONSE_02_CONF.images.base_url;

            size = RESPONSE_02_CONF.images.poster_sizes[6];

            console.log(RESPONSE_02_CONF);

            console.log(base);
            console.log(size);





            TOP_MOVIE_01(base, size, RESPONSE_01_TOP.results[1].title);
            TOP_MOVIE_02(base, size, RESPONSE_01_TOP.results[2].title);
            TOP_MOVIE_03(base, size, RESPONSE_01_TOP.results[3].title);



        }
    }

    REQUEST_02_CONF.open("GET", "https://api.themoviedb.org/3/configuration?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

    REQUEST_02_CONF.send();
}



var TOP_MOVIE_01 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("topid1").innerText = movieName + " (" + RESPONSE_01_ID.Year + ")";

            document.getElementById("topscore1").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#top1")[0].src = image_link;

                    document.getElementById("topbox1").innerText = "BOX-OFFICE EARNINGS: $" + RESPONSE_01_IMAGE.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                    document.getElementById("topgenre1").innerText = "GENRE: " + RESPONSE_01_IMAGE.genres[0].name.toUpperCase();

                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();

};

var TOP_MOVIE_02 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("topid2").innerText = movieName + " (" + RESPONSE_01_ID.Year + ")";

            document.getElementById("topscore2").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#top2")[0].src = image_link;

                    document.getElementById("topbox2").innerText = "BOX-OFFICE EARNINGS: $" + RESPONSE_01_IMAGE.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                    document.getElementById("topgenre2").innerText = "GENRE: " + RESPONSE_01_IMAGE.genres[0].name.toUpperCase();

                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();

};

var TOP_MOVIE_03 = function(base, size, movieName)
{

    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("topid3").innerText = movieName + " (" + RESPONSE_01_ID.Year + ")";

            document.getElementById("topscore3").innerText = "IMDB SCORE: " + RESPONSE_01_ID.imdbRating;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#top3")[0].src = image_link;

                    document.getElementById("topbox3").innerText = "BOX-OFFICE EARNINGS: $" + RESPONSE_01_IMAGE.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                    document.getElementById("topgenre3").innerText = "GENRE: " + RESPONSE_01_IMAGE.genres[0].name.toUpperCase();

                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();

};





var LATEST_INIT = function()
{
    var REQUEST_01_LATEST = new XMLHttpRequest();

    var RESPONSE_01_LATEST;

    REQUEST_01_LATEST.onreadystatechange = function()
    {
        if (REQUEST_01_LATEST.readyState == 4 && REQUEST_01_LATEST.status == 200)
        {
            RESPONSE_01_LATEST = JSON.parse(REQUEST_01_LATEST.responseText);


            console.log(RESPONSE_01_LATEST);

        }
    }

    REQUEST_01_LATEST.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US&page=1", false);

    REQUEST_01_LATEST.send();








    var base, size;

    var REQUEST_03_CONF = new XMLHttpRequest();

    REQUEST_03_CONF.onreadystatechange = function()
    {
        if (REQUEST_03_CONF.readyState == 4 && REQUEST_03_CONF.status == 200)
        {
            var RESPONSE_03_CONF = JSON.parse(REQUEST_03_CONF.responseText);

            base = RESPONSE_03_CONF.images.base_url;

            size = RESPONSE_03_CONF.images.poster_sizes[6];

            console.log(RESPONSE_03_CONF);

            console.log(base);
            console.log(size);

            LATEST_MOVIE_01(base, size, RESPONSE_01_LATEST.results[0].title);
            LATEST_MOVIE_02(base, size, RESPONSE_01_LATEST.results[1].title);
            LATEST_MOVIE_03(base, size, RESPONSE_01_LATEST.results[2].title);
            LATEST_MOVIE_04(base, size, RESPONSE_01_LATEST.results[3].title);






        }
    }

    REQUEST_03_CONF.open("GET", "https://api.themoviedb.org/3/configuration?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

    REQUEST_03_CONF.send();
}



var LATEST_MOVIE_01 = function(base, size, movieName)
{
    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("latestid1").innerText = movieName.toUpperCase();

            document.getElementById("latestrel1").innerText = "RELEASE DATE: " + RESPONSE_01_ID.Released;

            document.getElementById("latestrun1").innerText = "RUNTIME: " + RESPONSE_01_ID.Runtime;








            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#latestimg1")[0].src = image_link;

                    document.getElementById("latestc1").innerText = RESPONSE_01_IMAGE.production_countries[0].name.toUpperCase();







                    REQUEST_01_VIDEO = new XMLHttpRequest();

                    REQUEST_01_VIDEO.onreadystatechange = function()
                    {
                        if (REQUEST_01_VIDEO.readyState == 4 && REQUEST_01_VIDEO.status == 200)
                        {
                            RESPONSE_01_VIDEO = JSON.parse(REQUEST_01_VIDEO.responseText);

                            console.log(RESPONSE_01_VIDEO);


                            var i;


                            for (i = 0; i < RESPONSE_01_VIDEO.results.length; i++)
                            {
                                if (RESPONSE_01_VIDEO.results[i].type == "Trailer")
                                {
                                    document.querySelectorAll("#latestiframe1")[0].src = "https://www.youtube.com/embed/" + RESPONSE_01_VIDEO.results[i].key;

                                    break;
                                }
                            }

                        }
                    }

                    REQUEST_01_VIDEO.open("GET", "https://api.themoviedb.org/3/movie/" + RESPONSE_01_IMAGE.id + "/videos?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US", false);

                    REQUEST_01_VIDEO.send();







                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();
}

var LATEST_MOVIE_02 = function(base, size, movieName)
{
    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("latestid2").innerText = movieName.toUpperCase();

            document.getElementById("latestrel2").innerText = "RELEASE DATE: " + RESPONSE_01_ID.Released;

            document.getElementById("latestrun2").innerText = "RUNTIME: " + RESPONSE_01_ID.Runtime;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#latestimg2")[0].src = image_link;

                    document.getElementById("latestc2").innerText = RESPONSE_01_IMAGE.production_countries[0].name.toUpperCase();




                    REQUEST_01_VIDEO = new XMLHttpRequest();

                    REQUEST_01_VIDEO.onreadystatechange = function()
                    {
                        if (REQUEST_01_VIDEO.readyState == 4 && REQUEST_01_VIDEO.status == 200)
                        {
                            RESPONSE_01_VIDEO = JSON.parse(REQUEST_01_VIDEO.responseText);

                            console.log(RESPONSE_01_VIDEO);


                            var i;


                            for (i = 0; i < RESPONSE_01_VIDEO.results.length; i++)
                            {
                                if (RESPONSE_01_VIDEO.results[i].type == "Trailer")
                                {
                                    document.querySelectorAll("#latestiframe2")[0].src = "https://www.youtube.com/embed/" + RESPONSE_01_VIDEO.results[i].key;

                                    break;
                                }
                            }

                        }
                    }

                    REQUEST_01_VIDEO.open("GET", "https://api.themoviedb.org/3/movie/" + RESPONSE_01_IMAGE.id + "/videos?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US", false);

                    REQUEST_01_VIDEO.send();


                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();
}

var LATEST_MOVIE_03 = function(base, size, movieName)
{
    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("latestid3").innerText = movieName.toUpperCase();


            document.getElementById("latestrel3").innerText = "RELEASE DATE: " + RESPONSE_01_ID.Released;

            document.getElementById("latestrun3").innerText = "RUNTIME: " + RESPONSE_01_ID.Runtime;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#latestimg3")[0].src = image_link;

                    document.getElementById("latestc3").innerText = RESPONSE_01_IMAGE.production_countries[0].name.toUpperCase();


                    REQUEST_01_VIDEO = new XMLHttpRequest();

                    REQUEST_01_VIDEO.onreadystatechange = function()
                    {
                        if (REQUEST_01_VIDEO.readyState == 4 && REQUEST_01_VIDEO.status == 200)
                        {
                            RESPONSE_01_VIDEO = JSON.parse(REQUEST_01_VIDEO.responseText);

                            console.log(RESPONSE_01_VIDEO);


                            var i;


                            for (i = 0; i < RESPONSE_01_VIDEO.results.length; i++)
                            {
                                if (RESPONSE_01_VIDEO.results[i].type == "Trailer")
                                {
                                    document.querySelectorAll("#latestiframe3")[0].src = "https://www.youtube.com/embed/" + RESPONSE_01_VIDEO.results[i].key;

                                    break;
                                }
                            }

                        }
                    }

                    REQUEST_01_VIDEO.open("GET", "https://api.themoviedb.org/3/movie/" + RESPONSE_01_IMAGE.id + "/videos?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US", false);

                    REQUEST_01_VIDEO.send();


                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();
}

var LATEST_MOVIE_04 = function(base, size, movieName)
{
    var REQUEST_01_ID;

    var RESPONSE_01_ID;

    var IMDBID_01;

    REQUEST_01_ID = new XMLHttpRequest();

    REQUEST_01_ID.onreadystatechange = function()
    {
        if (REQUEST_01_ID.readyState == 4 && REQUEST_01_ID.status == 200)
        {
            RESPONSE_01_ID = JSON.parse(REQUEST_01_ID.responseText);

            console.log(RESPONSE_01_ID);

            IMDBID_01 = RESPONSE_01_ID.imdbID

            console.log(IMDBID_01);


            document.getElementById("latestid4").innerText = movieName.toUpperCase();

            document.getElementById("latestrel4").innerText = "RELEASE DATE: " + RESPONSE_01_ID.Released;

            document.getElementById("latestrun4").innerText = "RUNTIME: " + RESPONSE_01_ID.Runtime;






            REQUEST_01_IMAGE = new XMLHttpRequest();

            REQUEST_01_IMAGE.onreadystatechange = function()
            {
                if (REQUEST_01_IMAGE.readyState == 4 && REQUEST_01_IMAGE.status == 200)
                {
                    RESPONSE_01_IMAGE = JSON.parse(REQUEST_01_IMAGE.responseText);

                    console.log(RESPONSE_01_IMAGE);

                    var image_link = base + size + RESPONSE_01_IMAGE.poster_path;

                    console.log(image_link);

                    document.querySelectorAll("#latestimg4")[0].src = image_link;


                    document.getElementById("latestc4").innerText = RESPONSE_01_IMAGE.production_countries[0].name.toUpperCase();




                    REQUEST_01_VIDEO = new XMLHttpRequest();

                    REQUEST_01_VIDEO.onreadystatechange = function()
                    {
                        if (REQUEST_01_VIDEO.readyState == 4 && REQUEST_01_VIDEO.status == 200)
                        {
                            RESPONSE_01_VIDEO = JSON.parse(REQUEST_01_VIDEO.responseText);

                            console.log(RESPONSE_01_VIDEO);


                            var i;


                            for (i = 0; i < RESPONSE_01_VIDEO.results.length; i++)
                            {
                                if (RESPONSE_01_VIDEO.results[i].type == "Trailer")
                                {
                                    document.querySelectorAll("#latestiframe4")[0].src = "https://www.youtube.com/embed/" + RESPONSE_01_VIDEO.results[i].key;

                                    break;
                                }
                            }

                        }
                    }

                    REQUEST_01_VIDEO.open("GET", "https://api.themoviedb.org/3/movie/" + RESPONSE_01_IMAGE.id + "/videos?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US", false);

                    REQUEST_01_VIDEO.send();


                }
            }

            REQUEST_01_IMAGE.open("GET", "https://api.themoviedb.org/3/movie/" + IMDBID_01 + "?api_key=2dcb74713355d5056e48bbbc7e9ad7bd", false);

            REQUEST_01_IMAGE.send();

        }
    }

    REQUEST_01_ID.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, true);

    REQUEST_01_ID.send();
}





var DISC_INIT = function()
{
    createError("ENTER KEYWORD ABOVE FOR RESULTS");


    var REQUEST_01_GENRE = new XMLHttpRequest();

    REQUEST_01_GENRE.onreadystatechange = function()
    {
        if (REQUEST_01_GENRE.readyState == 4 && REQUEST_01_GENRE.status == 200)
        {
            var RESPONSE_01_GENRE = JSON.parse(REQUEST_01_GENRE.responseText);


            //console.log(RESPONSE_01_GENRE);

            var option = document.createElement("option");

            var i;

            for (i = 0; i < RESPONSE_01_GENRE.genres.length; i++)
            {
                var option = document.createElement("option");

                option.value = RESPONSE_01_GENRE.genres[i].id;
                option.innerText = RESPONSE_01_GENRE.genres[i].name;

                document.getElementById("genre-select").appendChild(option);
            }


        }

    }

    REQUEST_01_GENRE.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US", true);

    REQUEST_01_GENRE.send();








}


var createError = function(text)
{
    removeError();

    var notfound = document.createElement("div");

    var message = document.createElement("a");

    notfound.className = "error";

    message.className = "errormessage";

    message.innerText = text;

    notfound.appendChild(message);

    document.body.appendChild(notfound);
}

var removeError = function ()
{
    var children = document.getElementsByClassName("error");

    while (children[0])
    {
        children[0].parentNode.removeChild(children[0]);
    }
}

var removeResults = function()
{
    var children = document.getElementsByClassName("sheet");

    while (children[0])
    {
        children[0].parentNode.removeChild(children[0]);
    }
}






var SEARCH = function()
{
    createError("LOADING RESULTS...");

    var keyword = document.getElementById("searchinput").value;

    var year = document.getElementById("year-select").value;

    var genre = document.getElementById("genre-select").value;

    //console.log(keyword);
    //console.log(year);
    //console.log(genre);





    var REQUEST_SEARCH = new XMLHttpRequest();

    REQUEST_SEARCH.onreadystatechange = function()
    {

        removeResults();


        if (REQUEST_SEARCH.readyState == 4 && REQUEST_SEARCH.status == 200)
        {
            var RESPONSE_SEARCH = JSON.parse(REQUEST_SEARCH.responseText);



            //console.log(RESPONSE_SEARCH);



            if (RESPONSE_SEARCH.total_results == 0)
            {
                createError("NO RESULTS FOUND");

            }
            else
            {
                var i, j;

                var amount = 0;


                for (i = 0; i < RESPONSE_SEARCH.results.length; i++)
                {

                    if (genre != 0)
                    {
                        for (j = 0; j < RESPONSE_SEARCH.results[i].genre_ids.length; j++)
                        {
                            if (RESPONSE_SEARCH.results[i].genre_ids[j] == genre)
                            {

                                DISC_MOVIE(RESPONSE_SEARCH.results[i].title, RESPONSE_SEARCH.results[i].vote_average, i);

                                document.getElementsByClassName("errormessage")[0].innerText = "SHOWING " + i + " RESULTS";

                                break;
                            }
                        }
                    }
                    else
                    {
                        DISC_MOVIE(RESPONSE_SEARCH.results[i].title, RESPONSE_SEARCH.results[i].vote_average, i);

                        document.getElementsByClassName("errormessage")[0].innerText = "SHOWING " + i + " RESULTS";
                    }

                }


            }
        }
        else
        {
            createError("NO RESULTS FOUND");
        }


    }

    REQUEST_SEARCH.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=2dcb74713355d5056e48bbbc7e9ad7bd&language=en-US&query=" + keyword + "&page=1&include_adult=false&year=" + year, false);

    REQUEST_SEARCH.send();


}




var DISC_MOVIE = function(movieName, vote, index)
{
    var sheet = document.createElement("div");
    var poster = document.createElement("img");
    var title = document.createElement("a");
    var synopsis = document.createElement("p");
    var corating = document.createElement("a");
    var imdbrating = document.createElement("a");
    var agerating = document.createElement("a");


    poster.className = "poster";
    sheet.className = "sheet";
    title.className = "title";
    corating.className = "rating";
    imdbrating.className = "rating";
    agerating.className = "restriction";


    corating.innerText = "N/A";
    imdbrating.innerText = "N/A";
    agerating.innerText = "N/A";
    synopsis.innerText = "N/A";
    poster.src = "../image_files/200w.gif"

    title.innerText = "LOADING...";

    sheet.appendChild(poster);
    sheet.appendChild(title);
    sheet.appendChild(synopsis);
    sheet.appendChild(corating);
    sheet.appendChild(imdbrating);
    sheet.appendChild(agerating);
    document.body.appendChild(sheet);


    REQUEST_DISC = new XMLHttpRequest();

    REQUEST_DISC.onreadystatechange = function()
    {
        if (REQUEST_DISC.readyState == 4 && REQUEST_DISC.status == 200)
        {
            var RESPONSE_DISC = JSON.parse(REQUEST_DISC.responseText);


            //console.log(RESPONSE_DISC);

            if (RESPONSE_DISC.Response == "True")
            {

                title.innerText = movieName + " (" + RESPONSE_DISC.Year + ")";


                corating.innerText = "CO RATING: " + vote;

                if (RESPONSE_DISC.imdbRating == "undefined") {
                    imdbrating.innerText = "IMDB RATING: N/A";
                } else {
                    imdbrating.innerText = "IMDB RATING: " + RESPONSE_DISC.imdbRating;
                }


                agerating.innerText = "AGE RATING: " + RESPONSE_DISC.Rated;
                synopsis.innerText = RESPONSE_DISC.Plot;
                poster.src = RESPONSE_DISC.Poster;
            }




        }
    }

    REQUEST_DISC.open("GET", "http://www.omdbapi.com/?apikey=7501af51&t=" + movieName, false);

    REQUEST_DISC.send();
}

/*
function random()
{
    console.log("success");

    var moviename = "harry";

    var REQUEST_SEARCH = new XMLHttpRequest();

    REQUEST_SEARCH.onreadystatechange = function()
    {



        if (REQUEST_SEARCH.readyState == 4 && REQUEST_SEARCH.status == 200)
        {
           /!* var RESPONSE_SEARCH = JSON.parse(REQUEST_SEARCH.responseText);

            console.log(RESPONSE_SEARCH);*!/

           console.log(REQUEST_SEARCH.responseText);

        }
    };

    REQUEST_SEARCH.open("POST", "http://u16029063:Trustno1@wheatley.cs.up.ac.za/u16029063/api.php", true);
    REQUEST_SEARCH.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    REQUEST_SEARCH.send("name=" + moviename);


}*/
