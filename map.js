<html>
  <head>
    <title>It's time to Ruunnnn!</title>

<!--link to mapbox gl js [library]-->
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.js'></script>

<!--link to jquery library-->
    <script
     src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>

<!--link to mapbox gl js css style sheet-->
      <!--The href attribute specifies the URL of the page the link goes to-->
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css' rel='stylesheet' />

<!-- Link to our custom stylesheet -->  
  <link rel="stylesheet" href="style.css">

<!-- Link to Google font library -->    
  <link rel='stylesheet' type='text/css'
href='http://fonts.googleapis.com/css?family=Condiment'>
  <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet">
  
  </head>



  <body>
    <!-- About this map button -->
    <button id="about" class='button-default'>Ruunnn!</button>

    <div class="modal1" >
         <div class='modal-text'>
         <h1 class='modal1-title'>Rental places in walkble distance for A-school students </h1>

         <p class='modal-body'>
          Use this map to check all possible rental spaces in 10, 20, 25 min walking distance to UVA A-school! It's time to walk to school!!!
         </p>
                    <div id='modal1-hint' style= 'display:inline;'><p> Click for details!</p></div>
         </div>
    </div>
     <!-- Layers control (populated by javascript code) -->
    <div id='layers-control'></div>
   

  <div class='map-overlay'  id='info-window'>
    <div>
          <div style="height: 50px;">
           <h2>Rental information</h2>
           <button id="zoomin" class='button-zoom' >Go!</button>
           <button id="clear" class='button-clear' >CL</button>
          </div>
          <table border="0" cellpadding="0">
        <thead></thead>
        <tfoot></tfoot>
        <tbody>
            <tr style="margin-bottom: 20px">
                <td style="vertical-align: top; width: 250px; height: auto; "> 
                    <h4>Address:</h4>
                    <p style="margin-top: 10px;" class="notranslate">
                        <span class="large_number" id="address" style = "font-size:15px; color:#000;">n/a</span>
                        <span style="font-size: 12px; color: #fff; font-weight: 400; margin-left: 10px;">
                        
                        </span>
                    </p>
                </td>

                <td style="border-left: 1px solid #fff; padding-left: 20 px; vertical-align: top; width: 300px;">
                    <h4 style="padding-left:10px;">Details</h4>
                        <span class="large_number" id="Info" style = "padding-left:10px; vertical-align: middle; font-size:15px; color:#000;">n/a</span>
                    </p>
                </td>

            </tr>
        </tbody>
    </table>

    </div>
  </div>
  

  
  <div id="map"></div>
   

  </body>
  <!-- Link to our custom javascript, must be placed at the end of the index.html file -->  
  <script src="map.js"></script>
</html>
