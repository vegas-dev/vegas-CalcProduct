const cloneElement = (elementToCloneSelector, wrapperElSelector) => {
	const el = document.querySelector(elementToCloneSelector).cloneNode(true);
	el.classList.remove('clone');
	document.querySelector(wrapperElSelector).append(el);
	return el;
};

let btnPrint = document.querySelector('#btnPrintCalcProd');
btnPrint.addEventListener('click', function (e) {
 	window.print();
});

const setData = (data) => {
	const {brief, functional} = data;

	let index = 0;
	for (let item of functional) {
		const el = cloneElement('.functional-check.clone', '.functional-area');
		const {title, price} = item;

		el.querySelector('.functional-check--title').innerText = title;
		el.querySelector('.functional-check--price').innerText = price;
		el.querySelector('.form-check-input').value = price;
		el.querySelector('.form-check-input').id += index;
		el.querySelector('.form-check-label').htmlFor += index;
		index++;
	}

	const el = cloneElement('.brief-area.clone', '.brief-wrapper');
	el.querySelector('.brief-title').innerText = brief.title;
	el.querySelector('.brief-price').innerText = brief.price;

	const $input = document.querySelectorAll('input');

	function getSelectedServices(selectedServices = [], selectedSale = 0 ) {

		$input.forEach(function ($el) {
			if ($el.type === 'checkbox') {
				if ($el.checked) {
					selectedServices.push({
						price: $el.value,
						title: $el.parentElement.querySelector('.functional-check--title').innerText,
					});
				}
			} else if ($el.type === 'number') {
				if ($el.value !== '' && $el.value !== undefined) {
					selectedSale = +$el.value;
				}
			}
		});

		return {
			selectedServices: selectedServices,
			selectedSale: selectedSale,
		};
	}

	function getSumServices() {
		let sum = brief.price,
			discount = getSelectedServices().selectedServices;

		for (let i = 0; i < discount.length; i++) {
			sum += parseInt(discount[i].price);
		}

		return sum ;
	}

	function calc() {
		let sumServices = getSumServices();

		let discount = getSelectedServices().selectedSale;
		if (discount) {
			sumServices = (100 - discount) / 100 * sumServices;
		}

		document.querySelector('.total-price').innerText = sumServices;
	}

	function ElementForRemove() {
		let elementsForRemove = document.querySelectorAll('.functional-area-check .functional-item:not(.clone)');  /*Ищем блок , потом его дочерний элемент и если не видим на нем класс clone удаляем ВСЕ кроме clone */
		elementsForRemove.forEach(function (item) {
			item.outerHTML = ''; /*вставляет вместе с оберткой */
		});
	}

	function pastSelectedServices() {
		let selectedServices = getSelectedServices().selectedServices;

		for (let item of selectedServices) {
			let el = cloneElement('.functional-item.clone', '.functional-area-check');
			el.querySelector('.functional-item--title').innerText = item.title;
			el.querySelector('.functional-item--price').innerText = item.price;
		}
	}

	for (let i = 0; i < $input.length; i++) {
		$input[i].addEventListener('click', () => {
			ElementForRemove();
			pastSelectedServices();
			calc();
		});
	}

	document.querySelector('#btnGetDiscount').onclick = function () {
		calc();
	};
};
