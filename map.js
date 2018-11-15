// Initialize map
mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb245MzAyIiwiYSI6ImNpdTNsNW83MTBoZG0yb2xrdXpwcXR6cTMifQ.mxXMrYp7gRrbTS125K3RiQ'; // replace this value with your own access token from Mapbox Studio

var map = new mapboxgl.Map({
    container: 'map', // this is the ID of the div in index.html where the map should go
    center: [-78.526668,38.036223], // set the centerpoint of the map programatically. Note that this is [longitude, latitude]!
    zoom: 12.6, // set the default zoom programatically
    style: 'mapbox://styles/lemon9302/cjnc4htrd0bxn2sqeqbtwyesb', // replace this value with the style URL from Mapbox Studio
    customAttribution: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)', // Custom text used to attribute data source(s)
});

map.on('load', function () {
      map.addLayer({
        "id": "251892957",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.dzwwkwbr'
        },
        "source-layer": "Routeline_251892957-6qskgl",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "251447145",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.91satxl0'
        },
        "source-layer": "Routeline_251447145-a5nw0h",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "251445567",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.akdaskmw'
        },
        "source-layer": "Routeline_251445567-39uxef",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "250787053",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.83q0t6s1'
        },
        "source-layer": "Routeline_250787053-4zv49n",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "369827",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.78cz1weu'
        },
        "source-layer": "Routeline_369827-6tcemz",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "334911",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.4pcvsgue'
        },
        "source-layer": "Routeline_334911-7o913o",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "217738",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.aguhjx5n'
        },
        "source-layer": "Routeline_217738-205m85",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "217645",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.6etvlk9y'
        },
        "source-layer": "Routeline_217645-a34tc0",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "208997",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.b6b3khlz'
        },
        "source-layer": "Routeline_208997-3k4zby",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "206724",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.dp5op6vz'
        },
        "source-layer": "Routeline_206724-0kqwa1",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "198182",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.5n3gg46h'
        },
        "source-layer": "Routeline_198182-2ejhf9",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "193459",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.cd4plvxf'
        },
        "source-layer": "Routeline_193459-1yqzfb",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "182953",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.csltlotr'
        },
        "source-layer": "Routeline_182953-1lopz2",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "181243",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.a6i9conb'
        },
        "source-layer": "Routeline_181243-0n82oz",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "175965",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.789k13sw'
        },
        "source-layer": "Routeline_175965-0qfvw2",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "111106",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.51ctjd3m'
        },
        "source-layer": "Routeline_111106-2j9gqp",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "82826",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.0ije0hrs'
        },
        "source-layer": "Routeline_82826-39h30c",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "42596",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.bcr0d9en'
        },
        "source-layer": "Routeline_42596-dnvtjc",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "29850",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.57k60539'
        },
        "source-layer": "Routeline_29850-8avh3f",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });
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

      var routes = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-routepoints']    // replace this with the name of the layer from the Mapbox Studio layers panel
    });

      // if the layer is empty, this if statement will exit the function (no popups created) -- this is a failsafe to avoid non-functioning popups
      if (routes.length == 0) {
        $('#info-window').slideUp();
        return;
    }
        $('#info-window').slideDown();
          $('#distance').html(routes[0].properties.Distance);
          $('#Elevation').html(routes[0].properties.Elevation);
          $('#Date').html(routes[0].properties.Date);
          


             map.flyTo({
             center: [routes[0].properties.Corx, routes[0].properties.Cory],
             zoom: 15,
             curve: 1,
             bearing:20,
             pitch:15
             });
  

        $("#zoomin").on('click', function() { 
              map.setLayoutProperty(routes[0].properties.Number, 'visibility', 'visible');
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
    
        map.on('mouseenter','cville-routepoints', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
        
        var routes = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-routepoints']    // replace this with the name of the layer from the Mapbox Studio layers panel
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
      popup.setLngLat(routes[0].geometry.coordinates);

      // Set the contents of the popup window
      popup.setHTML('<h2>Route name: </h2><h3>' + routes[0].properties.Name + '</h3>');
            // stops[0].properties.stop_id will become the title of the popup (<h3> element)
            // stops[0].properties.stop_name will become the body of the popup


        // popup.setHTML('<p>' + stops[0].properties.stop_name + '</p>')




                      // var marker = new mapboxgl.Marker()
                      // marker.setLngLat(routes[0].geometry.coordinates);

                      // // marker.bindPopup('<button class="button-default" >Click for more</button>');

                      // // return marker;      
                      // marker.addTo(map);

      // Add the popup to the map 
      popup.addTo(map);  // replace "map" with the name of the variable in line 4, if different

       map.on('mouseleave', 'cville-routepoints', function() {
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

