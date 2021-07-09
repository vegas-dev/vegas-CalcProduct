let $formCalculator = document.getElementById('formCalculator'),
	$input = $formCalculator.querySelectorAll('input[type="range"]'),
	$bankBtn = document.querySelectorAll('.bank'),
	calc = new Calculator();

for (let i = 0; i < $input.length; i++) {
	$input[i].addEventListener('input', () => {
		let val = $input[i].value;
		let idCopyTo = $input[i].dataset.copyTo;
		document.getElementById(idCopyTo).value = val;

		calc.run();

		return false;
	});
}


let sum ;

for (let i = 0; i < $bankBtn.length ; i++ ) {
	$bankBtn[i].addEventListener('click', () => {

		let banks = [
			{
				title: 'alfa',
				price: 8.7
			},
			{
				title: 'sberbank',
				price: 8.4
			},
			{
				title: 'pochta',
				price: 7.9
			},
			{
				title: 'tinkoff',
				price: 9.2
			},
		];


		for (let item of $bankBtn) {
			item.classList.remove('active')
		}
		$bankBtn[i].classList.add('active');

		if (banks.length) {
			for (let i = 0 ; i < banks.length ; i++) {
				sum = banks[i].price;
			}
		}
		console.log(sum);

		// for (let i = 0; i < banks.length ; i++){
		// 	if (banks[i]) {
		// 		let sum = banks[i].price ;
		// 	}
		// }




		calc.run();

		return [banks];
	});

}



function Calculator() {
	this.run = function() {
		/* ЕП = ежемесячный платеж
// 		*  СК = сумма кредита
// 		* Пс - процентная ставка
// 		* КМ - кол -во месяцев
// 		*
// 		* ЕП = (СК + (((СК / 100) * ПС) / 12) * КМ) / КМ */

	let monthlyPayment; /* ЕП = ежемесячный платеж */

		let creditAmount ;


		//
		this.fill(100, 101, 102);
	};

	this.fill = function (sum, pl, dh) {
		document.getElementById('amount-of-credit').innerHTML = sum;
		document.getElementById('monthly-payment').innerHTML = pl;
		document.getElementById('recommended-income').innerHTML = dh;
	}
}


// /*========== Текстовый инпут ==========*/
// const totalCost = document.getElementById('total-cost'),
// 	totalAnInitialFree = document.getElementById('an-initial-fee'),
// 	totalCreditTerm = document.getElementById('credit-term');
//
// /*========== Значение из range инпутов ==========*/
// const totalCostRange = document.getElementById('total-cost-range'),
// 	totalAnInitialFreeRange = document.getElementById('an-initial-fee-range'),
// 	totalCreditTermRange = document.getElementById('credit-term-range');
//
// const inputsRange = document.querySelectorAll('.input-range');
//
//
//
// const assignValue = () => {
// 	totalCost.value = totalCostRange.value;
// 	totalAnInitialFree.value = totalAnInitialFreeRange.value;
// 	totalCreditTerm.value = totalCreditTermRange.value;
// };
// assignValue();
//
// for(let inputs of inputsRange){
// 	inputs = addEventListener('input', () => {
// 		assignValue();
// 	})
// }

// const banks = [
// 	{
// 		name: 'alfa',
// 		precents: 8.7
// 	},
// 	{
// 		name: 'sberbank',
// 		precents: 8.4
// 	},
// 	{
// 		name: 'pochta',
// 		precents: 7.9
// 	},
// 	{
// 		name: 'tinkoff',
// 		precents: 9.2
// 	}
// ];
//
// 	let currentPrecent = banks[0].precents;


//
// 	const takeActiveBank = currentActive => {
// 		const dataAttrValue = currentActive.dataset.name;
// 		const currentBank = banks.find(bank => bank.name === dataAttrValue);
// 		currentPrecent = currentBank.precents ;
// 		console.log(currentPrecent);
// };

//
// 	const calculator = (totalCost = 0, totalAnInitialFree = 100000, totalCreditTerm = 1 ) => {
//
//
// 		let monthlyPayment; //Ежемесячный платеж
// 		let lounAmount = totalCost - totalAnInitialFree ; // размер кредита
//
//
// }