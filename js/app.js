let $tariffs = document.getElementsByClassName('services-content--item'),
	$tariffInner = document.getElementById('inner'),
	newTariff = document.getElementById('newTariff'),
	newServices = document.getElementById('newServices');

let newTariffJson = newTariff.getAttribute('data-json'),
 	newServicesJson = newServices.getAttribute('data-json'),
	newTariffJsonParse = JSON.parse(newTariffJson),
	newServicesJsonParse = JSON.parse(newServicesJson);







	for (let i = 1 ; i < newTariffJsonParse.length ; i++ ) {
		let $tariffsClone = $tariffs[0].cloneNode(true);
		$tariffsClone.querySelector('span').innerHTML = newTariffJsonParse[i].title + ' ' + newTariffJsonParse[i].price ;
		$tariffs[0].parentElement.append($tariffsClone);
	}


