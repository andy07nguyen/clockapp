
//Display Working Clock using Date() & onload()

function startTime() {
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

//Change Military Time to Standard Time
	if(h > 12) {
		h -= 12;
	} else if(h === 0) {
		h = 12;
	}

//Add a Zero in front of numbers < 10
	function checkTime(i) {
		if(i < 10) {
			i = "0" + i;
		}
		return i;
	}
	m = checkTime(m);
	s = checkTime(s);

//Display the clock on the screen
	document.getElementById("time").innerHTML = h + ":" + m;
	// document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

//iterate through the time, 1 second at a time
	setTimeout(function() {
		startTime()
	}, 1000);
}

var clockStart = document.getElementById("time");
clockStart.onload = startTime;





