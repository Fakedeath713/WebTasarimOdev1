window.addEventListener('load', 
  	function() { 
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
				'X-RapidAPI-Key': 'a16a7edcd8mshceb2534418b0740p1d05afjsnf97a162adfae'
			}
		};
		var p1 = document.getElementById('p1')
		fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=475', options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
				h1.innerHTML = response.title
				p1.innerHTML = response.description
				p2.innerHTML = 'The minimum system requirements are:\nGraphics Card:' + response.minimum_system_requirements.graphics
				+ ' \nMinimum Memory' + response.minimum_system_requirements.memory + ' '+ response.minimum_system_requirements.os 
				+ '\n	Average Processor Needed:' + response.minimum_system_requirements.processor + 
				'\nStorage Needed:' + response.minimum_system_requirements.storage
				i1.src = response.screenshots[0].image
			})
			.catch(err => console.error(err))
  	}, false);