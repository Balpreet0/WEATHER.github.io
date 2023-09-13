



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a46320730msh29b9e4703ae22aep14c6b1jsn6057929fe1af',
		'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com'
	}
};
fetch('https://national-weather-service.p.rapidapi.com/zones/%7Btype%7D/%7BzoneId%7D/forecast',options)
.then(response =>response.json())
.then(response => console.log(response))
.catch(err =>console.error(err));



// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2a46320730msh29b9e4703ae22aep14c6b1jsn6057929fe1af',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }










// const url = 'https://national-weather-service.p.rapidapi.com/zones/%7Btype%7D/%7BzoneId%7D/forecast';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2a46320730msh29b9e4703ae22aep14c6b1jsn6057929fe1af',
// 		'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


