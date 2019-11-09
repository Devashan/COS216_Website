<!DOCTYPE html>
<html>

<head>
    <title>Discover</title>

    <link rel="stylesheet" type="text/css" href="../css_files/">
    <link rel="shortcut icon" href="../image_files/my_icon.ico" />

	<script type="application/javascript" src="../js_files/theme.js"></script>


	<script src="../js_files/jquery-3.4.0.js"></script>
    <script type="application/javascript" src="../js_files/myScripts.js"></script>
	<script type="application/javascript" src="../js_files/change_theme.js"></script>

</head>

<body onLoad="DISC_INIT()">

    <?php include "../php_files/header.php" ?>
    <script class="head" type="application/javascript" src="../js_files/init.js"></script>

    <div id="searchbar">
        <a class="unclickable" style="float:left">BROWSE MOVIES:</a>
        <input id="searchinput" type="text" placeholder="">
        <a class="navbar" style="float:right" onClick="SEARCH()">SEARCH</a>    
    </div>
    
    
    
    
    
    <div class="filter">
        <a class="unclickable" style="float:left">FILTERS:</a>
        <a  class="unclickable genre2" style="float:left">BROWSE BY GENRE</a>
        
        
        <select id="genre-select" class="custom-select"  style="float:left">
            <option value="0">N/A</option>
             
        </select> 
        
        
        
        <a  class="unclickable genre2" style="float:left">BROWSE BY YEAR</a>
        
        
        <input id="year-select" type="text" placeholder="N/A" style="float:left">
        
        
        
         
        
        <a id="applyfilter" class="navbar" style="float:right;" onClick="SEARCH()">APPLY FILTERS</a>
        
    </div>

</body>

</html> 