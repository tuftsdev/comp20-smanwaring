
//Referenced: http://www.w3schools.com/json/json_http.asp 
function parse() {
	var xhr = new XLMHttpRequest(); 
	var fileURL = "data.json"; 

	xhr.open("GET", fileURL, true); 

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			parsedData = JSON.parse(xhr.responseText);
			console.log(parsedData); 
			//print(parsedData); 
		}
	} 
	xhr.send(null); 
}


function print(parsedData) {
	elem = document.getElementById("messages");
	for (count = 0; count < parsedData.length; count++) {
		
	}
}
