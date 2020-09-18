$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
});

function initMap() {
    // The location of Uluru
    var magnity = {lat: 48.874135, lng: 2.309950};
    // The map, centered at magnity
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: magnity});
    // The marker, positioned at magnity
    var marker = new google.maps.Marker({position: magnity, map: map});
  }