chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
    text = document.getElementById('text');
    var data = JSON.stringify({
  		"text": selection[0]
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    text.innerHTML = JSON.parse(this.responseText)[0].replacement_string;
	  }
	});

	xhr.open("POST", "http://6048d1c6.ngrok.io/alex-text-replace");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.send(data);
});
