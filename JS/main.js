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
	function gT(x){
		var theTag = document.getElementsByTagName(x);
		return theTag;
	}

	//create select fields
	/*function makeCats (){
		var formTag = document.getElementsByTagName("form"),
		selectLi = $()
	}
*/

	function storeData(){
		var id      = Math.floor(Math.random()*100000001);
		//gather up all our form field values and store them in an object
		// Object properties contain array with the form label and input values.
		var item 			= {};
			item.group		= ["Group", $("groups").value];
			item.fname  	= ["First Name", $("Name").value];
			item.lname  	= ["Last Name", $("Lname").value];
			item.email  	= ["Email", $("email").value];
			item.inType		= ["Insurance Type", typevalue];
			item.numPoliy   = ["",];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Contact Saved");

	}
	function getData(){
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "Items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.lenght; i<len;i++){
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key[i];
			var value = localStorage.getItem(key);
			//convert the string from local storage value back to an Object by useing JSON.parse()
			var saved = JSON.parse(value);
			var makeSubLi = document.createElement("ul");
			makeLi.appendChild(makeSubLi);
			for(var n in saved){
				var makeSublist = document.createElement("li");
				makeSubLi.appendChild(makeSublist);
				var optSubText = saved[n][0]+" "+saved[n][1];
				makeSublist.innerHTML = optSubText;
			}
		}
	}
	var companies = ["Select Insurance Company", "American Mod", "Farmers", "State Farm", "Progressive"];
	//set link
	var displayDataLink = $("DisplayData");
		displayDataLink.addEventListener("click", getData);
	var clearDataLink = $("ClearStoredData");
		//clearDataLink.addEventListener("click", clearlocal);
	var saveData = $("myButton");
		savaData.addEventListener("click", storeData);
});