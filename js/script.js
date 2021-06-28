let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('formCalcProduct'),
	$input = $formCalcProd.querySelector('input'),
	$btnPrint = document.getElementById('btnPrintCalcProd');

$input.addEventListener('click', function (e) {
	console.log(e)

	calcProduct();

	return false;
});


$btnPrint.addEventListener('click', function (e) {
	window.print();;

	return false;
});


function calcProduct() {

	getResult();
}

function getResult() {

}