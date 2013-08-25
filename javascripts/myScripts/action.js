$(function () {

	$('[id^="select"]').on('click', function() {
		event.preventDefault();
	    $(this).css('background-color', '#333');
	})

	// debugger
	$.getJSON("https://api.forecast.io/forecast/9e41a1e5e83f8692e157cd10a5cdcb45/32.7150,-117.1564?callback=?",

		function (data) {


			//OLD SCHOOL
			// var displayWeather;

			// displayWeather = document.getElementsByTagName('body')[0];
			// displayWeather.style.backgroundColor = "red";

			// NEW SCHOOL
			// if (data.currently.summary === "Clear") {
			// 	$('body').css({backgroundColor: 'red'});
			// 	// console.log("it's working");
			// } else if (data.currently.summary === "Partly Cloudy") {
			// 	$('body').css({backgroundColor: 'red'});
			// } else if (data.currently.summary === "Mostly Cloudy") {
			// 	$('body').css({backgroundColor: 'blue'});
			// }
		});


});

