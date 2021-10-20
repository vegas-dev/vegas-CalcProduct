let request = new XMLHttpRequest();
request.open('post', 'server.php', true);
request.onload = function () {
	let data = JSON.parse(request.responseText);

	setData(data);
};
request.send(null);