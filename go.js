var fillInPage = (function() {
    var updateCityText = function(geoipResponse) {
  
      var cName = geoipResponse.country.iso_code;
  
      document.getElementById('country').innerHTML = cName
      if (cName != 'US') {
   
        document.body.innerHTML = ''
      }
    };
  
    var onSuccess = function(geoipResponse) {
      updateCityText(geoipResponse);
    };
  
    // If we get an error, we will display an error message
   
  
    return function() {
      if (typeof geoip2 !== 'undefined') {
        geoip2.country(onSuccess);
      } else {
      }
    };
  }());
  
  fillInPage();
