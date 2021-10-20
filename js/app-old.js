// let $tariffInner = document.getElementById('inner'),
// 	newTariff = document.getElementById('newTariff'),
// 	newServices = document.getElementById('newServices'),
// 	$addServices = document.getElementById('add-services');
//
// let newTariffJson = newTariff.getAttribute('data-json'),
// 	newServicesJson = newServices.getAttribute('data-json'),
// 	newTariffJsonParse = JSON.parse(newTariffJson),
// 	newServicesJsonParse = JSON.parse(newServicesJson);
//
//
// for (let i = 0; i < newServicesJsonParse.length; i++) {
// 	createServiceElement(newServicesJsonParse[i], $addServices);
// }
//
// for (let i = 0; i < newTariffJsonParse.length; i++) {
// 	createTariffElement(newTariffJsonParse[i], $tariffInner);
// }
//
//
// function createTariffElement(tariff, $tariffWrapperEl) {
// 	// создать DOM элемент
// 	const $tariffDiv = document.createElement('div');
// 	// добавить класс
// 	$tariffDiv.classList.add('services-content--item');
// 	// вставить внутрь HTML с шаблонным литералом и динамическими переменными
// 	$tariffDiv.innerHTML = `
// 	<label class="label" for="tariff-${tariff.name}">
// 		<input class="services-content--${tariff.name}" id="tariff-${tariff.name}" checked data-tariff-title="${tariff.title}" name="rate" type="radio" value="${tariff.price}">
// 		<span >${tariff.title} ${tariff.price}р</span>
// 	</label>
// 	`;
// 	// добавить новый DOM элемент внутрь DOM элемента враппера
// 	$tariffWrapperEl.append($tariffDiv);
// }
//
// function createServiceElement(service, $serviceWrapperEl) {
// 	const $addServiceElement = document.createElement('label');
// 	$addServiceElement.setAttribute('for', `add-${service.name}`);
// 	$addServiceElement.innerHTML = `
// 	${service.title}- <span>${service.price} руб.</span>
// 	<input data-add-title="${service.dataTitle}" id="add-${service.name}" class="add-content--${service.name}" name="add" type="checkbox" value="${service.price}">
// 	`;
// 	$serviceWrapperEl.append($addServiceElement);
// }