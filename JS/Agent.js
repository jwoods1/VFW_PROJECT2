/* 
Woods Jason
VFW 1302
Project 2 
JavaScript
*/
// wait until the dom is ready
window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theId = document.getElementById(x);
		return theId;
	}

	var addClient = $("myButton");
	var clientFn = $("Name");
	var changeBorder = function(){
		clientFn.setAttribute("class","hasFocus");
	}
	var defaultBorder = function(){
		clientFn.removeAttribute("class","hasFocus");
	}

	clientFn.addEventListener("focus", changeBorder);
	clientFn.addEventListener("blur", defaultBorder);
	console.log(clientFn);

	//set link
	var displayDataLink = $("DisplayData");
	displayDataLink.addEventListener("click", getData);
	var clearDataLink = $("ClearStoredData");
	clearDataLink.addEventListener("click", clearlocal);
	var saveData = $("myButton");
	savaData.addEventListener("click", storeData);
});