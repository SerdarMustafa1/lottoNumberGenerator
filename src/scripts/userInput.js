$('#luckyButton').click(function() {
	$.getJSON('http://localhost:8321/numbers')
		.done(function(data) {
			console.log(data);
			$('#luckyNumbers').attr('src', data.message);
		})
		.fail(function() {
			console.log('PROBLEM, Server Stopped!');
		});
});
