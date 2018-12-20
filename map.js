
// Initialize map
mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb245MzAyIiwiYSI6ImNpdTNsNW83MTBoZG0yb2xrdXpwcXR6cTMifQ.mxXMrYp7gRrbTS125K3RiQ'; // replace this value with your own access token from Mapbox Studio

var map = new mapboxgl.Map({
    container: 'map', // this is the ID of the div in index.html where the map should go
    center: [-78.526668,38.036223], // set the centerpoint of the map programatically. Note that this is [longitude, latitude]!
    zoom: 12.6, // set the default zoom programatically
    style: 'mapbox://styles/lemon9302/cjnc4htrd0bxn2sqeqbtwyesb', // replace this value with the style URL from Mapbox Studio
    customAttribution: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)', // Custom text used to attribute data source(s)
});



// Show modal when About button is clicked
$("#about").on('click', function() { // Click event handler for the About button in jQuery, see https://api.jquery.com/click/
    $("#screen").fadeToggle(); // shows/hides the black screen behind modal, see https://api.jquery.com/fadeToggle/
    $(".modal").fadeToggle(); // shows/hides the modal itself, see https://api.jquery.com/fadeToggle/
});

$(".modal>.close-button").on('click', function() { // Click event handler for the modal's close button
    $("#screen").fadeToggle();
    $(".modal").fadeToggle();
});

map.on('load', function() {
    $('.modal-text').slideToggle('slow');

});


// Legend
var layers = [ // an array of the possible values you want to show in your legend
    'Civic Spaces',
    'Community Park',
    'Neighborhood Park',
    'Cemetery',
    'Urban Park',
    'Regional Park'
];

var colors = [ // an array of the color values for each legend item
    '#800000',
    '#800030',
    '#800060',
    '#80006c',
    '#800090',
    '#80009c'
];

// for loop to create individual legend items
for (i=0; i<layers.length; i++) {
    var layer =layers[i]; // name of the current legend item, from the layers array
    var color =colors[i]; // color value of the current legend item, from the colors array 
    
    var itemHTML = "<div><span class='legend-key'></span><span>" + layer + "</span></div>"; // create the HTML for the legend element to be added
    var item = $(itemHTML).appendTo("#legend"); // add the legend item to the legend
    var legendKey = $(item).find(".legend-key"); // find the legend key (colored circle) for the current item
    legendKey.css("background", color); // change the background color of the legend key
}

// 10.25 starts here----------------------------------------------
// INFO WINDOW CODE 
    // Create a popup on click 
    map.on('click', function(e) {   // Event listener to do some code when user clicks on the map

      var places = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-aptpt']    // replace this with the name of the layer from the Mapbox Studio layers panel
    });

      // if the layer is empty, this if statement will exit the function (no popups created) -- this is a failsafe to avoid non-functioning popups
      if (places.length == 0) {
        $('#info-window').slideUp();
        return;
    }
        $('#info-window').slideDown();
          $('#address').html(places[0].properties.Address);
          $('#Info').html(places[0].properties.Info);
          
          

             map.flyTo({
             center: [routes[0].properties.Corx, routes[0].properties.Cory],
             zoom: 15,
             curve: 1,
             bearing:20,
             pitch:15
             });
  

        $("#zoomin").on('click', function() { 
        window.open('www.zillow.com/'+ places[0].properties.Url)
   });

        $("#clear").on('click', function() { 
              var layers = [
             '42596',
             '29850',
             '82826',
             '111106',
             '175965',
             '181243',
             '182953',
             '193459',
             '198182',
             '206724',
             '208997',
             '217645',
             '217738',
             '334911',
             '369827',
             '250787053',
             '251445567',
             '251447145',
             '251892957',
              ]
              

              for (i=0; i<layers.length; i++) {
              map.setLayoutProperty(layers[i], 'visibility', 'none');
              };

             map.flyTo({
             center: [-78.526668,38.036223],
             zoom: 12.6,
             bearing: 0,
             pitch:0,
             });
             

        });
    });
    
        map.on('mouseenter','cville-aptpt', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
        
        var places = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-aptpt']    // replace this with the name of the layer from the Mapbox Studio layers panel
    });

      // if the layer is empty, this if statement will exit the function (no popups created) -- this is a failsafe to avoid non-functioning popups

    // Initiate the popup
    var popup = new mapboxgl.Popup({ 
        closeButton: true, // If true, a close button will appear in the top right corner of the popup. Default = true
        closeOnClick: true, // If true, the popup will automatically close if the user clicks anywhere on the map. Default = true
        anchor: 'bottom', // The popup's location relative to the feature. Options are 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left' and 'bottom-right'. If not set, the popup's location will be set dynamically to make sure it is always visible in the map container.
        offset: [0, -15] // A pixel offset from the centerpoint of the feature. Can be a single number, an [x,y] coordinate, or an object of [x,y] coordinates specifying an offset for each of the different anchor options (e.g. 'top' and 'bottom'). Negative numbers indicate left and up.
    });

      // Set the popup location based on each feature
      popup.setLngLat(places[0].geometry.coordinates);

      // Set the contents of the popup window
      popup.setHTML('<h2>' + places[0].properties.Name + '</h2><h3>$' + places[0].properties.Price + '+</h3>');
            // stops[0].properties.stop_id will become the title of the popup (<h3> element)
            // stops[0].properties.stop_name will become the body of the popup

      // Add the popup to the map 
      popup.addTo(map);  // replace "map" with the name of the variable in line 4, if different

       map.on('mouseleave', 'cville-aptpt', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
  });
      


$("#about").on('click', function() { 
  map.flyTo({
             center: [-78.526668,38.036223],
             zoom: 12.6,
             bearing: 0,
             pitch:0,
             speed:0.5,
             });

  $('#info-window').slideUp();

}); 
