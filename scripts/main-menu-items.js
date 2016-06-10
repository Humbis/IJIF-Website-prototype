var fDoorState = sessionStorage.getItem("fDoorState");
var fLockState = sessionStorage.getItem("fLockState");
var bDoorState = sessionStorage.getItem("bDoorState");
var bLockState = sessionStorage.getItem("bLockState");
var sDoorState = sessionStorage.getItem("sDoorState");
var sLockState = sessionStorage.getItem("sLockState");

var doorsOpened = 0;
var doorsUnlocked = 0;
if(fDoorState == "false"){
	doorsOpened++;
}
if(bDoorState == "false"){
	doorsOpened++;
}
if(sDoorState == "false"){
	doorsOpened++;
}
if(fLockState == "false"){
	doorsUnlocked++;
}
if(bLockState == "false"){
	doorsUnlocked++;
}
if(sLockState == "false"){
	doorsUnlocked++;
}

document.getElementById("doorlock-count").innerHTML = doorsUnlocked;
document.getElementById("doorstate-count").innerHTML = "Doors Unlocked <br/>" + doorsOpened + " Doors Opened";
document.getElementById("door-info").onclick = function(){
	window.location.href = 'Doors.html';
}
document.getElementById("camera-info").onclick = function(){
	window.location.href = 'Surveillance.html';
}

