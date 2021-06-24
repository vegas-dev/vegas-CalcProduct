
let inputDiscount = document.querySelector ('.discount-content--input');
let buttonDiscount = document.querySelector('.button');
let price = document.querySelector ('.section-item--price');

buttonDiscount.onclick = function () {
	let a = inputDiscount.value ;
	console.log (a * 5);

};