console.log('chicken');

const axios = require('axios');

// $('#luckyButton').click(function() {
// 	$('#numberSelect').change(function() {
// 		const numbers = $(this).val();
// 		console.log(numbers);
// 	});

// 	$('#lowestNumberInput').change(function() {
// 		const lowNumber = $(this).val();
// 		console.log(lowNumber);
// 	});

// 	$('#highestNumberInput').change(function() {
// 		const highNumber = $(this).val();
// 		console.log(highNumber);
// 	});

// 	$('#bonusSelect').change(function() {
// 		const bonusNumber = $(this).val();
// 		console.log(bonusNumber);
// 	});
// });

// $('p').append(
// 	$(':input')
// 		.map(function() {
// 			if ($(this).is('select')) {
// 				return $(this).val();
// 			} else if ($(this).attr('type') == 'checkbox') {
// 				return $(this).attr('checked');
// 			} else {
// 				return $(this).attr('name');
// 			}
// 		})
// 		.get()
// 		.join(', ')
// );

// $('#luckyButton').click(function() {
// 	const getMyNumbers = axios({
// 		url: 'http://localhost:8100/numbers',
// 		method: 'get',
// 		dataType: 'JSON',
// 		success: function(data) {
// 			$('#luckyNumbers').append(data);
// 		}
// 	});
// 	console.log(getMyNumbers);
// });

// $('#luckyButton').click(function() {
// 	const getLuckyNumbers = async () => {
// 		try {
// 			return await axios.get('http://localhost:8100/numbers');
// 			console.log(getLuckyNumbers);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
// })();

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
