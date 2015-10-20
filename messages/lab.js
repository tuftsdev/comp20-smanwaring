
//Referenced: http://www.w3schools.com/json/json_http.asp 
function parse() {
	var xhr = new XMLHttpRequest(); 
	var fileURL = "http://messagehub.herokuapp.com/messages.json"; 

	xhr.open("GET", fileURL, true); 

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			parsedData = JSON.parse(xhr.responseText); 
			print(parsedData); 
		}
	} 
	xhr.send(null); 
}

function print(parsedData) {
	elem = document.getElementById("messages");
	for (count = 0; count < parsedData.length; count++) {
		elem.innerHTML += "<p>" + parsedData[count]["content"] + " - " + 
		parsedData[count]["username"] + "</p";
	}
}
