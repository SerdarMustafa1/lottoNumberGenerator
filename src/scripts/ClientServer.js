var wsClient = function() {
	var Model, View, Controller;

	Model = {
		socket: null,
		connect: function(callback) {
			if (typeof socket == 'undefined' || socket.readyState == 3) {
				socket = new WebSocket($('#wsEndpoint').val());
				socket.onmessage = function(event) {
					callback(event.data);
				};
			}
		},
		disconnect: function() {
			if (typeof socket != 'undefined' && socket.readyState == 1) {
				socket.close();
			}
		}
	};

	View = {
		display: function(data) {
			$('#luckyNumbers').append(data + ' ');
		}
	};

	Controller = {
		socket: null,
		start: function() {
			Model.connect(View.display);
		},
		stop: function() {
			Model.disconnect();
		},
		init: function() {
			setTimeout(function() {
				$('#luckyNumbers').on('click', Controller.start);
				$('#stopButton').on('click', Controller.stop);
			}, 1000);
		}
	};

	return {
		init: Controller.init
	};
};

app.get('/numbers', function(request, response) {
	var timesRun = 0;
	var interval = setInterval(function() {
		timesRun += 1;
		if (timesRun === 6) {
			clearInterval(interval);
		}
		const luckyNumber = Math.floor(Math.random() * 100 + 1);
		response.json(luckyNumber);
		console.log(luckyNumber);
	}, 1000);
	setTimeout(function() {}, 1000);
});
