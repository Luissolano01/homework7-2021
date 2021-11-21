var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

/*play/pause code*/
 document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
 });

 document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
});

/*play speed rate*/
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate +=  0.05;
	console.log("New speed is:", video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate -= 0.05;
	console.log("New speed is:", video.playbackRate);
});

/*mute button*/
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false) {    
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
		document.getElementById("volume").innerHTML = "0%"
		document.getElementById("slider").value = 0;
 	}

 	else {
	 video.muted = false
	 document.getElementById("mute").innerHTML = "Mute"
	 document.getElementById("volume").innerHTML = "100%"
	 document.getElementById("slider").value = 100;
 }
 });

/*Skip code*/
 document.querySelector("#skip").addEventListener("click", function(){

	video.currentTime = video.currentTime + 15
	
	if (video.currentTime >= 60){
		console.log("Original location", (video.currentTime - 15), "seconds");
		console.log("Going back to beginning");

		video.currentTime = 0
		console.log("New location", video.currentTime, "seconds");
	}
	else{
	console.log("Original location", (video.currentTime - 15), "seconds");
	console.log("New location", video.currentTime, "seconds");
	}
});

/*slider code*/ 
document.getElementById("volume").innerHTML = document.getElementById("slider").value;
document.getElementById("slider").oninput = function () {
	console.log(this.value/100);
	document.getElementById("volume").innerHTML = this.value + "%"
	video.volume = (this.value/100);
};

