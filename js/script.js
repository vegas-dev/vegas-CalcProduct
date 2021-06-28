let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('formCalcProduct'),
	$input = $formCalcProd.querySelector('input'),
	$btnPrint = document.getElementById('btnPrintCalcProd');

$input.addEventListener('click', function (e) {
	calcProduct(this);

	return false;
});


$btnPrint.addEventListener('click', function (e) {
	window.print();

	return false;
});


function calcProduct($self) {
	let price = +$self.value,
		$inputs = $formCalcProd.querySelectorAll('input'),
		result = [
		/*	{
				'tariffs': {
					'title': '',
					'price': ''
				}
			},
			{
				'services': [
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
				]
			},
			{
				'sale': {
					'title': 'Скидка',
					'price': ''
				}
			}*/
		];

	for(let i = 1;  i <= $inputs.length; i++) {
		if($inputs[i - 1].value) {
			console.log($inputs[i - 1].value)
		}
	}

	getResult(result);
}

function getResult(result) {
	console.log(result)
}