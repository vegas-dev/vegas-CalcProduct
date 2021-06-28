let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('formCalcProduct'),
	$input = $formCalcProd.querySelector('input');

$input.addEventListener('click', function (e) {
	console.log(e)

	calcProduct();

	return false;
});

function calcProduct($self) {

	getResult();
}

function getResult() {

}