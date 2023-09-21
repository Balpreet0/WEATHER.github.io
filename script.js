const url = 'http://api.weatherapi.com/v1/current.json?key=60d2228f57704a2c84193052231909&q=London&aqi=no'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60d2228f57704a2c84193052231909',
		'X-RapidAPI-Host': 'api.weatherapi.com'
	}
};
async function fetchWeatherData() {
	try {
		const response = await fetch(url, options);{


			wind_kph.innerHTML = response.wind_kph
		wind_degree.innerHTML = response.wind_degree
		wind_dir.innerHTML = response.wind_dir
		pressure_in.innerHTML = response.pressure_in
		humidity.innerHTML = response.humidity
		cloud.innerHTML = response.cloud
		feelslike_c.innerHTML = response.feelslike_c
		feelslike_f.innerHTML = response.feelslike_f
		temp_c.innerHTML =response.temp_c
		gust_mph.innerHTML = response.gust_mph
		gust_kph.innerHTML = response.gust_kph



		};
		const result = await response.json();  // If the API returns JSON, use .json() instead of .text()

		
		


		console.log(result) ;







	} catch (error) {
		console.error(error);
	}
}

fetchWeatherData();  // Invoke the async function



