let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('formCalcProduct'),
	$input = $formCalcProd.querySelectorAll('input'),
	$btnPrint = document.getElementById('btnPrintCalcProd');

for(let i = 1;  i <= $input.length; i++) {
	$input[i - 1].addEventListener('click', function (e) {
		calcProduct(this);

		return false;
	});
}


function calcProduct($self) {
	let price = +$self.value,
		$inputs = $formCalcProd.querySelectorAll('input'),
		tariff = {
			'title': '',
			'price': price
		},
		services = [
			{
				'title': '',
				'price': ''
			},
			{
				'title': '',
				'price': ''
			},
			{
				'title': '',
				'price': ''
			},
			{
				'title': '',
				'price': ''
			}
		],
		sale =  {
			'title': 'Скидка',
			'price': ''
	};


	console.log(services);
/*
* 	for(let i = 1;  i <= $inputs.length; i++) {
		if($inputs[i - 1].value) {
			console.log($inputs[i-1].value);
		}
	}
console.log($inputs[2]);

	getResult(result);
	*
* */


}

function getResult(result) {
	console.log(result)
}



$btnPrint.addEventListener('click', function (e) {
	window.print();

	return false;
});
