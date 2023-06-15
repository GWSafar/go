var fillInPage = (function() {
    var updateCityText = function(geoipResponse) {
  
      var cName = geoipResponse.country.iso_code;
  
      if (cName != 'US') {
       
        document.body.innerHTML = ''
      }
    };
  
    var onSuccess = function(geoipResponse) {
      updateCityText(geoipResponse);
    };
  
    var onError = function(error) {
      document.getElementById('main').innerHTML = 'an error!  Please try again..'
    };
  
    return function() {
      if (typeof geoip2 !== 'undefined') {
        geoip2.country(onSuccess, onError);
      } else {
      }
    };
  }());
  
  fillInPage();
