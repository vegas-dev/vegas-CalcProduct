let request = new XMLHttpRequest();
request.open('get', 'server.php', true);
request.onload = function () {
	console.log(request.responseText);
};
request.send(null);