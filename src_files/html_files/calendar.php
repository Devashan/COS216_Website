<!DOCTYPE html>
<html>

<head>
    <title>Calendar</title>

    <link rel="stylesheet" type="text/css" href="../css_files/">
    <link rel="shortcut icon" href="../image_files/my_icon.ico" />

	<script type="application/javascript" src="../js_files/theme.js"></script>

	<script src="../js_files/jquery-3.4.0.js"></script>
    <script type="application/javascript" src="../js_files/myScripts.js"></script>
	<script type="application/javascript" src="../js_files/change_theme.js"></script>

</head>

<body onLoad="CALENDAR_INIT()">

    <?php include "../php_files/header.php" ?>
    <script class="head" type="application/javascript" src="../js_files/init.js"></script>

	<script>console.error("session storage key = " + sessionStorage.getItem('key'));</script>
	<script>console.error("session storage name = " + sessionStorage.getItem('name'));</script>

    
    <div class="error">
        <a  class="navbar" style="float: left; font-size: 35.5px; padding: 0px;">
            &lt;
        </a>
        
        
        <a class="errormessage">
            JANUARY
        </a>
        
        <a  class="navbar" style="float: right; font-size: 35.5px; padding: 0px;">
            &gt;
        </a>
    
    </div>
    
    
    <div id="cal" class="overlay">
        <table class="calendar">
            <tr>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                
            
            </tr>
            <tr>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                
            
            </tr>
            <tr>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                
            
            </tr>
            <tr>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                
            
            </tr>
            <tr>
                <td>
                    X
                
                </td>
                <td>
                    X
                
                </td>
                
                
            
            </tr>
        
        </table>
        
        
        
    </div>
    

</body>
</html>