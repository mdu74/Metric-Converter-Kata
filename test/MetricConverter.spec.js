describe("Convert kilometers to miles,", function () {
	[
		{ km: 0, miles: 0 },
		{ km: 1, miles: 0.621371 },
		{ km: 2, miles: 1.242742 },
		{ km: 3, miles: 1.864113 },
		{ km: 100, miles: 62.1371 }
	].forEach(function (toConvert) {
		it("Given " + toConvert.km + "km should return " + toConvert.miles + "mi", function () {
			// arrange
			var metricConverter = new MetricConverter();
			// act
			var result = metricConverter.KilometersToMiles(toConvert.km);
			// assert
			expect(result).toBe(toConvert.miles);
		});
	});
	it("Given words should return 0mi", function () {
		// arrange
		var metricConverter = new MetricConverter();
		// act
		var result = metricConverter.KilometersToMiles("words");
		// assert
		expect(result).toBe(0);
	});
});

describe("Convert celsius to fahrenheit,", function () {
	[
		{ celsius: 0, fahrenheit: 32 },
		{ celsius: 1, fahrenheit: 33.8 },
		{ celsius: 2, fahrenheit: 35.6 },
		{ celsius: 10, fahrenheit: 50 }
	].forEach(function (toConvert) {
		it("Given " + toConvert.celsius + " C should return " + toConvert.fahrenheit + " F", function () {
			// arrange
			var metricConverter = new MetricConverter();
			// act
			var result = metricConverter.CelsiusToFahrenheit(toConvert.celsius);
			// assert
			expect(result).toBe(toConvert.fahrenheit);
		});
	});
	it("Given words should return 0F", function () {
		// arrange
		var metricConverter = new MetricConverter();
		// act
		var result = metricConverter.CelsiusToFahrenheit("words");
		// assert
		expect(result).toBe(0);
	});
});

describe("Convert kilograms to pounds,", function () {
	[
		{ kilograms: 0, pounds: 0 },
		{ kilograms: 1, pounds: 2.205 },
		{ kilograms: 5, pounds: 11.023 },
		{ kilograms: 10, pounds: 22.046 },
		{ kilograms: 20, pounds: 44.092 }
	].forEach(function (toConvert) {
		it("Given " + toConvert.kilograms + " kg should return " + toConvert.pounds + " lb", function () {
			// arrange
			var metricConverter = new MetricConverter();
			// act
			var result = metricConverter.KilogramToPound(toConvert.kilograms);
			expect(result).toBe(toConvert.pounds);
		});
	});
	it("Given words should return 0lb", function () {
		// arrange
		var metricConverter = new MetricConverter();
		// act
		var result = metricConverter.KilogramToPound("hello");
		expect(result).toBe(0);
	});
});

describe("Convert liters to", function () {
	describe("US gallons,", function () {
		[
			{ liters: 0, targetUnit: "US", gallons: 0 },
			{ liters: 3.785411784, targetUnit: "US", gallons: 1 },
			{ liters: 7.57082, targetUnit: "US", gallons: 2 },
			{ liters: 11.3562353, targetUnit: "US", gallons: 3 },
			{ liters: 37.8541178, targetUnit: "US", gallons: 10 },
			{ liters: 378.541178, targetUnit: "US", gallons: 100 },
		].forEach(function (toConvert) {
			it("Given " + toConvert.liters + " l should return " + toConvert.gallons + " gal", function () {
				// arrange
				var metricConverter = new MetricConverter();
				// act
				var result = metricConverter.LitersToGallons(toConvert.liters, toConvert.targetUnit);
				expect(result).toBe(toConvert.gallons);
			});
		});
	});
	describe("UK gallons,", function () {
		[
			{ liters: 0, targetUnit: "UK", gallons: 0 },
			{ liters: 4.54609, targetUnit: "UK", gallons: 1 },
			{ liters: 9.09218, targetUnit: "UK", gallons: 2 },			
			{ liters: 13.63827, targetUnit: "UK", gallons: 3 },			
			{ liters: 45.4609, targetUnit: "UK", gallons: 10 },			
			{ liters: 454.609, targetUnit: "UK", gallons: 100 }
		].forEach(function (toConvert) {
			it("Given " + toConvert.liters + " l should return " + toConvert.gallons + " gal", function () {
				// arrange
				var metricConverter = new MetricConverter();
				// act
				var result = metricConverter.LitersToGallons(toConvert.liters, toConvert.targetUnit);
				expect(result).toBe(toConvert.gallons);
			});
		});
		[
			{ liters: "hello", targetUnit: "UK", gallons: 0 },
		].forEach(function (toConvert) {
			it("Given liters as words should return 0 gal", function () {
				// arrange
				var metricConverter = new MetricConverter();
				// act
				var result = metricConverter.LitersToGallons(toConvert.liters, toConvert.targetUnit);
				expect(result).toBe(toConvert.gallons);
			});
		});
	});
});