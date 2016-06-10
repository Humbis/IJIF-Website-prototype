

$("#front-door-control").ready(function(){
	var data = sessionStorage.getItem("fDoorState");
	if(data == "false"){
		$("#front-door-control").click();
	}
});
$("#front-door-lock").ready(function(){
	var data = sessionStorage.getItem("fLockState");
	if(data == "false"){
		$("#front-door-lock").click();
	}
});
$("#back-door-control").ready(function(){
	var data = sessionStorage.getItem("bDoorState");
	if(data == "false"){
		$("#back-door-control").click();
	}
});	
$("#back-door-lock").ready(function(){
	var data = sessionStorage.getItem("bLockState");
	if(data == "false"){
		$("#back-door-lock").click();
	}
});	
$("#side-door-control").ready(function(){
	var data = sessionStorage.getItem("sDoorState");
	if(data == "false"){
		$("#side-door-control").click();
	}
});	
$("#side-door-lock").ready(function(){
	var data = sessionStorage.getItem("sLockState");
	if(data == "false"){
		$("#side-door-lock").click();
	}
});


$("#front-door-control").change(function(){
	save(document.getElementById("front-door-control").checked, "fDoorState")
})
$("#front-door-lock").change(function(){
	save(document.getElementById("front-door-lock").checked, "fLockState")
})	
$("#back-door-control").change(function(){
	save(document.getElementById("back-door-control").checked, "bDoorState")
})	
$("#back-door-lock").change(function(){
	save(document.getElementById("back-door-lock").checked, "bLockState")
})	
$("#side-door-control").change(function(){
	save(document.getElementById("side-door-control").checked, "sDoorState")
})	
$("#side-door-lock").change(function(){
	save(document.getElementById("side-door-lock").checked, "sLockState")
})	

function save(e, doorState){
	sessionStorage.setItem(doorState, e);
}