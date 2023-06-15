var fillInPage = (function() {
    var updateBlock = function(geoipResponse) {
    
    const allowCountries = ['US', 'FR', 'DE']
      var countryiso = geoipResponse.country.iso_code;
  
      if (allowCountries.indexOf(countryiso) !== -1) {
       
      } else {
        document.body.innerHTML = ''
        }
    };
  
    var onSuccess = function(geoipResponse) {
        updateBlock(geoipResponse);
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
