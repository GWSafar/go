var fillInPage = (function() {
    var updateCityText = function(geoipResponse) {
  
      var cityName = geoipResponse.country.iso_code;
  
      document.getElementById('country').innerHTML = cityName
      if (cityName == 'US') {
        //document.getElementById('main').innerHTML = ''
        document.getElementsByClassName("body lsc").innerHTML = ''
      }
    };
  
    var onSuccess = function(geoipResponse) {
      updateCityText(geoipResponse);
    };
  
    // If we get an error, we will display an error message
    var onError = function(error) {
      document.getElementById('country').innerHTML = 'an error!  Please try again..'
    };
  
    return function() {
      if (typeof geoip2 !== 'undefined') {
        geoip2.country(onSuccess, onError);
      } else {
      }
    };
  }());
  
  fillInPage();
