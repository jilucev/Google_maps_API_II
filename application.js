 // var vancouver = new google.maps.LatLng(49.2569777,-123.123904);
     var jerichoBeach = new google.maps.LatLng(49.2740734,-123.194372);
     var troutLake = new google.maps.LatLng(49.255425,-123.065519);
     var spiritPark = new google.maps.LatLng(49.2576803,-123.2297588,13);
     var markers = [];
     var map;

     var sitesArray = [jerichoBeach, troutLake, spiritPark];

  function initialize() {
    var mapOptions = {
      zoom: 12,
      center: jerichoBeach
     
    }
   
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   addMarker1(jerichoBeach);
   addMarker2(troutLake);
   addMarker3(spiritPark);

  //   google.maps.event.addListener(map, 'click', function(event) {
  //   addMarker(event.latLng);
  // });


  var contentStringJerichoBeach = '<div id="content" >'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Jericho Beach</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Jericho Beach</b>is a lovely place to run and barbeque.' +
      '<p>Attribution: Jericho Beach, <a href="http://en.wikipedia.org/wiki/Jericho_Beach">'+
      '</a> '+
      '</p>'+
      '</div>'+
      '</div>';

  var jbinfowindow = new google.maps.InfoWindow({
      content: contentStringJerichoBeach
  });

   var contentStringTroutLake = '<div id="content" >'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Trout Lake</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Trout Lake</b>is a lovely place to drink wine and smoke cigarettes.' +
      '<p>Attribution: Trout Lake, <a href="http://en.wikipedia.org/wiki/John_Hendry_Park">'+
      '</a> '+
      '</p>'+
      '</div>'+
      '</div>';

  var tlinfowindow = new google.maps.InfoWindow({
      content: contentStringTroutLake
  });

   var contentStringSpiritPark = '<div id="content" >'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Spirit Park</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Spirit Park</b>is a creepy place to run and cycle.' +
      '<p>Attribution: Spirit Park, <a href="http://en.wikipedia.org/wiki/Bodies_of_water_in_Vancouver">'+
      '</a> '+
      '</p>'+
      '</div>'+
      '</div>';

  var spinfowindow = new google.maps.InfoWindow({
      content: contentStringSpiritPark
  });


    function addMarker1(location) {
    marker1 = new google.maps.Marker({
        position: jerichoBeach,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Jericho Beach'
    });

      markers.push(marker1);
      }
    

      google.maps.event.addListener(marker1,'click', function() {
        jbinfowindow.open(map,marker1);
        toggleBounce(marker1);
      });


        
        $('#marker1').change(function() {
          if (!($('#marker1').is(':checked'))) {
          marker1.setMap(null);
          }
          else {
           marker1.setMap(map);
         }
        });


    function addMarker2(location) {
    marker2 = new google.maps.Marker({
        position: troutLake,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Trout Lake'
    }); 
    markers.push(marker2);
      }


      google.maps.event.addListener(marker2,'click', function() {
          tlinfowindow.open(map,marker2);
          toggleBounce(marker2);
        });

        $('#marker2').change(function() {
          if (!($('#marker2').is(':checked'))) {
          marker2.setMap(null);
          }
          else {
           marker2.setMap(map);
         }
        });



      
    function addMarker3(location) {
    marker3 = new google.maps.Marker({
        position: spiritPark,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Spirit Park'
    });
    markers.push(marker3);
  }

      google.maps.event.addListener(marker3,'click', function() {
        spinfowindow.open(map,marker3);
        toggleBounce(marker3);
      });

        $('#marker3').change(function() {
          if (!($('#marker3').is(':checked'))) {
          marker3.setMap(null);
          }
          else {
           marker3.setMap(map);
         }
        });




  }

  



  function toggleBounce(marker) {
    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }



  google.maps.event.addDomListener(window, 'load', initialize);


  //  function clearMarker(marker) {
  //   console.log('in the method');
  //   if (marker == marker1) {
  //     markers[0].setMap(null)
  //     showMarkers(markers);
  //   }
  //   else if (marker == marker2) {
  //     markers[1] = null
  //   }
  //   else {
  //     markers[2] = null 
  //   }
  // }
  //   function showMarkers(markers) {
  //     console.log('in show markers' + markers);
  //   // setAllMap(map);



function setAllMap(map, markers) {
  console.log('in setAll map' + markers);
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}



 



 
  

