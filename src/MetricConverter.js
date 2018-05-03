function MetricConverter() {
  this.KilometersToMiles = function (kilometer) {
    if(isNaN(kilometer)) return 0;

    var getMiles = calculateMilesFrom(kilometer);
    var miles = roundOffImperialBy(6, getMiles);

    return miles;
  }

  this.CelsiusToFahrenheit = function (celsius) {   
    if(isNaN(celsius)) return 0; 

    var getFahrenheit = calculateFehrenheitFrom(celsius);

    return getFahrenheit;
  }

  this.KilogramToPound = function (kilograms) { 
    if(isNaN(kilograms)) return 0; 
    
    var getPounds = calculatePoundsFrom(kilograms);
    var pounds = roundOffImperialBy(3, getPounds);
    
    return pounds;
  }

  this.LitersToGallons = function (liters, targetUnit) { 
    if(isNaN(liters)) return 0;

    var getGallons = 0;

    if(targetUnit == "UK") {
      getGallons = calculateUKGallonsFrom(liters);
    }

    if(targetUnit == "US") {
      getGallons = calculateUSGallonsFrom(liters);
    }

    var gallons = roundOffImperialBy(1, getGallons);

    return gallons;
  }

  function roundOffImperialBy(number, imperial) {
    return parseFloat(imperial.toFixed(number));
  }

  function calculateFehrenheitFrom(celsius) {
    return (celsius * 1.8) + 32;
  }

  function calculateMilesFrom(kilometer) {
    return kilometer * 0.621371;
  }

  function calculatePoundsFrom(kilograms) {
    return kilograms / 0.45359237;
  }

  function calculateUSGallonsFrom(liters) {
    return liters / 3.785411784;
  }

  function calculateUKGallonsFrom(liters) {
    return liters / 4.54609;
  }
}
