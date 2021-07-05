let $formCalcProd = document.getElementById('formCalcProduct'),
	$resultCalcProd = document.getElementById('formCalcProduct'),
	$input = $formCalcProd.querySelectorAll('input'),
	$btnPrint = document.getElementById('btnPrintCalcProd'),
	$total = document.getElementById('total'),
	$discount = document.getElementById('percent');
	$btn = document.getElementById('btn');
	$inputContent = document.querySelector('input[name=content]');

for (let i = 0; i < $input.length; i++) {
	$input[i].addEventListener('click', function (e) {
		calcProduct(this);

		return false;
	});
}

let tariffPrice = 0 ;
let addPrice = 0 ;
let discount = 0 ;


$btn.addEventListener('click', () => {
	discount = +$inputContent.value || 0;
	if (discount > 100 ) {
		discount = 100 ;
	}
	$discount.innerText = discount ;
	$total.innerText = (100 - discount) * (tariffPrice + addPrice) / 100 ;
});

function calcProduct($self) {
	let price = +$self.value;
	if ( $self.getAttribute('name') === 'rate' ) {
		tariffPrice = price;
	} else {
		if ($self.checked) {
			addPrice += price ;
			// чебокс активен
		} else {
			addPrice -= price ;
			// чекбокс не активен
		}
	}
	$total.innerText = (100 - discount) * (tariffPrice + addPrice) / 100 ;
	console.log(addPrice);
		// tariff = [
		// 	{
		// 		'title': 'Стандартный',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Средний',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Проффесиональный',
		// 		'price': price
		// 	},
		// ],
		// services = [
		// 	{
		// 		'title': 'Разговоры',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Безлимит',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Гигабайты',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Крутая услуга',
		// 		'price': price
		// 	},
		// 	{
		// 		'title': 'Хорошая услуга',
		// 		'price': price
		// 	}
		// ],
		// sale = [
		// 	{
		// 		'title': 'Скидка',
		// 		'price': price
		// 	}
		// ];
}


$btnPrint.addEventListener('click', function (e) {
	window.print();
});
