let request = new XMLHttpRequest();
request.open('post', 'server.php', true);
request.onload = function () {
	let data = JSON.parse(request.responseText);

	// console.log(data.brief.title)
	// console.log(data.brief.price)

	// for (let i = 0; i < data.functional.length; i++) {
		
	// }
	setData(data);
};
request.send(null);