const cloneElement = (elementToCloneSelector, wrapperElSelector) => {
	const el = document.querySelector(elementToCloneSelector).cloneNode(true);
	el.classList.remove('clone');
	document.querySelector(wrapperElSelector).append(el);
	return el;
};

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

	function getSelectedServices() {
		let selectedServices = [];
		let selectedSale = 0;
		let sum = 0;


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

		console.log(selectedSale);
		for ( let i = 0; i < selectedServices.length; i++) {
			sum += parseInt(selectedServices[i].price);
		}

		let buttonSale  = document.querySelector('#btnGetDiscount');
		buttonSale.addEventListener('click', function () {
			console.log("buttonSale");
		});

		return {
			selectedServices: selectedServices,
			selectedSale: selectedSale,
			sum: sum
		};
	}

	function getElementForRemove() {
		let elemetntsForRemove = document.querySelectorAll('.functional-area-check .functional-item:not(.clone)');  /*Ищем блок , потом его дочерний элемент и если не видим на нем класс clone удаляем ВСЕ кроме clone */
		elemetntsForRemove.forEach(function (item) {
			item.outerHTML = ''; /*вставляет вместе с оберткой */
		});
	}

	function getElementCloneServices() {
		for (let i = 0; i < $input.length; i++) {
			$input[i].addEventListener('click', () => {
				let selectedServices = getSelectedServices().selectedServices;

				getElementForRemove();

				for (let item of selectedServices) {
					let el = cloneElement('.functional-item.clone', '.functional-area-check');
					el.querySelector('.functional-item--title').innerText = item.title;
					el.querySelector('.functional-item--price').innerText = item.price;
					let totalPrice = document.querySelector('.total-price');
					totalPrice.innerText = getSelectedServices().sum;

				}
			});

		}
	}

	getElementCloneServices();
};
// wrapper
{/* <div class="functional-area"></div> */
}

// template
{/*
<div class="functional-check clone">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="functionalItemTitle">
    <label class="form-check-label" for="functionalItemTitle">
      <span class="functional-check--title"></span>
      <span class="functional-check--price"></span>
    </label>
  </div>
</div>
*/
}

// const {brief, functional} = data;
// const brief = data.brief;
// const functional = data.functional;

