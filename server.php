<?php

$brief = [
	'title' => 'Лендинг',
	'price' => 20000
];

$functional = [
	[
		'title' => 'События, мероприятия',
		'price' => 1000
	],
	[
		'title' => 'Команда / сотрудники',
		'price' => 500
	],
	[
		'title' => 'Каталог товаров',
		'price' => 5000
	],
	[
		'title' => 'Документы для скачивания',
		'price' => 750
	],
	[
		'title' => 'Интеграция с соц сетями',
		'price' => 500
	],
	[
		'title' => 'Опросы',
		'price' => 500
	]
];

echo json_encode([
	'brief' => $brief,
	'functional' => $functional
]);