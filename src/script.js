fetch('/public/numberboxes.json')
  .then(function (response) {
		return response.json();
    // The JSON data will arrive here
	})
	.then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
		console.log('error: ' + err);
    // If an error occured, you will catch it here
	});

function appendData(data) {
	var mainContainer = document.getElementsByClassName("calc-form__calculate-cal--prenumber left");

	for (var i = 0; i < data.length; i++) {
		// append each box to our pages

	var div = document.createElement("div");

	div.innerHTML = 'Name: ' + data[i].number + ' ' + data[i].box;

	mainContainer.appendChild(div);
	
  }
}

   
    