let inputStandard = document.querySelector('.services-content--standard');
let inputMiddle = document.querySelector('.services-content--middle');
let inputProf = document.querySelector('.services-content--profession');
let inputSpeak = document.querySelector('.add-content--speak');

let inputUnlimited = document.querySelector('.add-content--unlimited');
let inputGigabyte = document.querySelector('.add-content--gigabyte');
let inputCool = document.querySelector('.add-content--cool');
let inputGood = document.querySelector('.add-content--good');

let Speak = document.querySelector('#speak');
let Unlimited = document.querySelector('#unlimited');
let Gigabyte = document.querySelector('#gigabyte');
let Cool = document.querySelector('#cool');
let Good = document.querySelector('#good');

let inputDiscount = document.querySelector ('.discount-content--input');
let buttonDiscount = document.querySelector('.button-discount');
let price = document.querySelector ('.section-item--price');
let percent = document.querySelector('.section-discount--percent');

let total = document.querySelector('#total');



inputStandard.onclick = function () {
	let standard = +inputStandard.value ;
	price.innerHTML = standard ;
	console.log (price);

	if (price.innerHTML > 0) {
		total.innerHTML = price.innerHTML ;
	}

};

inputMiddle.onclick = function () {
	let middle = +inputMiddle.value ;
	price.innerHTML = middle ;

	if (price.innerHTML > 0) {
		total.innerHTML = price.innerHTML ;
	}

};

inputProf.onclick = function () {
	let prof = +inputProf.value ;
	price.innerHTML = prof ;

	if (price.innerHTML > 0) {
		total.innerHTML = price.innerHTML ;
	}

};

let array = [inputSpeak , inputUnlimited , inputGigabyte , inputCool , inputGood ];

array[0].onclick = function () {
	let services = +array[0].value;
	Speak.innerHTML = services;

	if (Speak.innerHTML > 0) {
		total.innerHTML = +Speak.innerHTML + +Unlimited.innerHTML + +Gigabyte.innerHTML + +Cool.innerHTML + +Good.innerHTML  + +price.innerHTML;

	}
	console.log(total.innerHTML);
};

array[1].onclick = function () {
	let services = +array[1].value;
	Unlimited.innerHTML = services;

	if (Unlimited.innerHTML > 0) {
		total.innerHTML = +Speak.innerHTML + +Unlimited.innerHTML + +Gigabyte.innerHTML + +Cool.innerHTML + +Good.innerHTML + +price.innerHTML;
	}
};

array[2].onclick = function () {
	let services = +array[2].value;
	Gigabyte.innerHTML = services;

	if (Gigabyte.innerHTML > 0) {
		total.innerHTML = +Speak.innerHTML + +Unlimited.innerHTML + +Gigabyte.innerHTML + +Cool.innerHTML + +Good.innerHTML + +price.innerHTML;
	}

};

array[3].onclick = function () {
	let services = +array[3].value;
	Cool.innerHTML = services;

	if (Cool.innerHTML > 0) {
		total.innerHTML = +Speak.innerHTML + +Unlimited.innerHTML + +Gigabyte.innerHTML + +Cool.innerHTML + +Good.innerHTML + +price.innerHTML;
	}
};

array[4].onclick = function () {
	let services = +array[4].value;
	Good.innerHTML = services;

	if (Good.innerHTML > 0) {
		total.innerHTML = +Speak.innerHTML + +Unlimited.innerHTML + +Gigabyte.innerHTML + +Cool.innerHTML + +Good.innerHTML + +price.innerHTML;
	}
};

buttonDiscount.onclick = function () {
	let discount = +inputDiscount.value ;
	percent.innerHTML = discount;

	let result = (total.innerHTML * percent.innerHTML / 100);
	total.innerHTML = total.innerHTML - result ;

	document.getElementById('btn').onclick = function () {
		false ;
	}

};

if (percent.innerHTML > 0 ) {
	let result = (total.innerHTML * percent.innerHTML / 100);
	total.innerHTML = total.innerHTML - result ;
}




