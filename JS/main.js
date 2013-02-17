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

	//create select 
	function makeComps(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('selectCompany'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "theCompany");
		for(var i=0, j=companies.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = companies[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);

		}
		selectLi.appendChild(makeSelect);
	};

	function getAutoV(){
		if($("auto").checked){
			autoValue = $("auto").value;
		}else{
			autoValue = "No"
		}
	};

	function getMotoV(){
		if($("motorcycle").checked){
			motoValue = $("motorcycle").value;
		}else{
			motoValue = "No"
		}
	};

	function getRvV(){
		if($("rv").checked){
			rvValue = $("rv").value;
		}else{
			rvValue = "No"
		}
	};

	function getHomeV(){
		if($("home").checked){
			homeValue = $("home").value;
		}else{
			homeValue = "No"
		}
	};

	function getRentV(){
		if($("rent").checked){
			rentValue = $("rent").value;
		}else{
			rentValue = "No"
		}
	};

	function getLifeV(){
		if($("life").checked){
			lifeValue = $("life").value;
		}else{
			lifeValue = "No"
		}
	};
	function storeData(){
		var id      = Math.floor(Math.random()*100000001);
		getAutoV();
		getMotoV();
		getRvV();
		getHomeV();
		getRentV();
		getLifeV();

		//gather up all our form field values and store them in an object
		// Object properties contain array with the form label and input values.
		var item 			= {};
			item.company	= ["Company:", $("theCompany").value];
			item.fname  	= ["First Name:", $("Name").value];
			item.lname  	= ["Last Name:", $("Lname").value];
			item.email  	= ["Email:", $("email").value];
			item.Auto 		= ["Auto Insurance:", autoValue];
			item.Moto 		= ["motorcycle Insurance:", motoValue];
			item.rv		    = ["RV Insurance:", rvValue];
			item.home		= ["Home Insurance:", homeValue];
			item.rent 		= ["Renters Insurance:", rentValue];
			item.life		= ["Life Insurance:", lifeValue];
			item.numV		= ["Number of Vehicles:", $("AutoNum").value];
			item.numPoliy   = ["Policy Number:", $("Pnum").value];
			item.comment	= ["Additoional Comments:", $("Comments").value];
			item.nDate		= ["Renewal Date:", $("renew").value];

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
	var companies = ["--Select Company--", "American Mod", "Farmers", "State Farm", "Progressive","All State", "Nation Wide"];
	makeComps();
	//set link
	var displayDataLink = $("DisplayData");
		displayDataLink.addEventListener("click", getData);
	var clearDataLink = $("ClearStoredData");
		//clearDataLink.addEventListener("click", clearlocal);
	var saveData = $("myButton");
	saveData.addEventListener("click", storeData);
});