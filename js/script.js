let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('resultCalcProduct'),
	$input = $formCalcProd.querySelectorAll('input'),
	$btnPrint = document.getElementById('btnPrintCalcProd'),
	$total = document.getElementById('total'),
	$discount = document.getElementById('percent');

for (let i = 0; i < $input.length; i++) {
	$input[i].addEventListener('click', function (e) {
		let calcPrd = calcProduct();
		setResult(calcPrd);

		return false;
	});
}

$formCalcProd.addEventListener('submit', () => {
	let calcPrd = calcProduct();
	setResult(calcPrd);

	return false;
});

$btnPrint.addEventListener('click', function (e) {
	window.print();
});

/*
* Main functions
 */

function calcProduct() {
	let tariff = {};
	let services = [];
	let sale = {};

	let sum = 0, sum_checkbox = 0;

	for (let i = 0; i < $input.length; i++) {
		if ($input[i].type === 'number') {
			if ($input[i].value !== '' && $input[i].value !== undefined) {
				sale = {
					title: 'Скидка',
					price: +$input[i].value
				};
			}
		} else if ($input[i].type === 'radio') {
			if ($input[i].checked) {
				tariff = {
					title: $input[i].getAttribute('data-tariff-title'),
					price: +$input[i].value
				};
				sum =  +$input[i].value;
			}
		} else {
			if ($input[i].checked) {
				services.push({
					title: $input[i].getAttribute('data-add-title'),
					price: +$input[i].value
				})
			}
		}
	}

	if (services.length) {
		for (let i = 0 ; i < services.length ; i++) {
			sum_checkbox += services[i].price;
		}
	}

	let result = sum_checkbox + sum ;
	if (sale.price) {
		result = ( 100 - (sale.price > 100 ? 100 : sale.price)) * (result) / 100 ;
	}

	return [tariff, sale, services, result];
}

function setResult(result) {
	document.getElementById('choiceTariffTitle').innerHTML = result[0].title;
	document.getElementById('choiceTariffPrice').innerText = result[0].price;

	let $res_checkbox = document.getElementById('resultCheckbox');
	if(result[2].length) {
		$res_checkbox.classList.remove('d-none');
		let $ListCheckBox = $res_checkbox.getElementsByClassName('section-add-list');
		let li = document.createElement('li');

		let $li = $ListCheckBox[0].getElementsByTagName('li');
		if ($li.length) {
			for(let i=0; i < $li.length; i++) {
				$li[i].remove();
			}
		}

		for (let i = 0; i < result[2].length; i++) {
			li.innerHTML = result[2][i].title +' - <span id="speak">'+ result[2][i].price +'</span> <span>рублей</span>';

			$ListCheckBox[0].append(li);
		}
	}

	if (result[1]) {
		document.getElementById('percent').innerText = result[1].price || 0;
	}

	if (result[3]) {
		document.getElementById('total').innerText = result[3];
	}

	return false;
}



























