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
				d1.innerHTML = response.description
				r1.innerHTML = 'The minimum system requirements are:' 
				r2.innerHTML = 'Graphics Card: ' + response.minimum_system_requirements.graphics
				r3.innerHTML = 'Minimum Memory: ' + response.minimum_system_requirements.memory
				r4.innerHTML = 'Operating system: ' + response.minimum_system_requirements.os
				r5.innerHTML = 'Average Processor Needed: ' + response.minimum_system_requirements.processor
				r6.innerHTML = 'Storage Needed: ' + response.minimum_system_requirements.storage
				i1.src = response.screenshots[0].image
				i2.src = response.screenshots[1].image
			})
			.catch(err => console.error(err))
  	}, false);