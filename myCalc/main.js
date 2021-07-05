/*========== Текстовый инпут ==========*/
const totalCost = document.getElementById('total-cost'),
	totalAnInitialFree = document.getElementById('an-initial-fee'),
	totalCreditTerm = document.getElementById('credit-term');

/*========== Значение из range инпутов ==========*/
const totalCostRange = document.getElementById('total-cost-range'),
	totalAnInitialFreeRange = document.getElementById('an-initial-fee-range'),
	totalCreditTermRange = document.getElementById('credit-term-range');

/*========== Итоговые выводимые расчетные значения==========*/
const totalAmountOfCredit = document.getElementById('amount-of-credit'),
	totalMonthlyPayment = document.getElementById('monthly-payment'),
	totalRecommendedIncome = document.getElementById('recommended-income');

/*========== Все range==========*/
const inputsRange = document.querySelectorAll('.input-range');

/*========== Все кнопки с процентной ставкой==========*/
const BankBtns = document.querySelectorAll('.bank');

const assignValue = () => {
	totalCost.value = totalCostRange.value;
	totalAnInitialFree.value = totalAnInitialFreeRange.value;
	totalCreditTerm.value = totalCreditTermRange.value;
};
assignValue();

const banks = [
	{
		name: 'alfa',
		precents: 8.7
	},
	{
		name: 'sberbank',
		precents: 8.4
	},
	{
		name: 'pochta',
		precents: 7.9
	},
	{
		name: 'tinkoff',
		precents: 9.2
	}
];

	let currentPrecent = banks[0].precents;

	for (let bank of BankBtns) {
		bank.addEventListener('click', () => {
			for (let item of BankBtns) {
				item.classList.remove('active')
			}
		bank.classList.add('active');
			takeActiveBank(bank);
		})
	}

	const takeActiveBank = currentActive => {
		const dataAttrValue = currentActive.dataset.name;
		const currentBank = banks.find(bank => bank.name === dataAttrValue);
		currentPrecent = currentBank.precents ;
		console.log(currentPrecent);
};
	for(let inputs of inputsRange){
		inputs = addEventListener('input', () => {
			assignValue();
		})
	}

	const calculator = (totalCost = 0, totalAnInitialFree = 100000, totalCreditTerm = 1 ) => {

		/* ЕП = ежемесячный платеж
		*  РК = размер кредита
		* Пс - процентная ставка
		* КМ - кол -во месяцев
		*
		* ЕП = (РК + (((РК / 100) * ПС) / 12) * КМ) / КМ */
		let monthlyPayment; //Ежемесячный платеж
		let lounAmount = totalCost - totalAnInitialFree ; // размер кредита


}