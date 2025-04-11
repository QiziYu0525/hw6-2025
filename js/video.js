var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("video"); // Initialize the video variable
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	let volume = video.volume * 100;
	console.log("Volume: " + volume + "%");
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		console.log("Video unmute");
		video.muted = false;
		this.textContent = "Mute";
	} else {
		console.log("Video muted");
		video.muted = true;
		this.textContent = "Unmute";
	}
});

document.querySelector("#slower").addEventListener("click", function () {
	if (video.playbackRate > 0.1) {
		video.playbackRate -= 0.1;
		console.log("New speed: " + video.playbackRate.toFixed(2));
	} else {
		console.log("Video is at the slowest speed");
	}
});

document.querySelector("#faster").addEventListener("click", function () {
	if (video.playbackRate < 5.0) {
		video.playbackRate += 0.1;
		console.log("New speed: " + video.playbackRate.toFixed(5));
	} else {
		console.log("Video is at the fastest speed");
	}
});

document.querySelector("#skip").addEventListener("click", function () {
	let newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
		console.log("Restarting video");
	} else {
		video.currentTime = newTime;
		console.log("Current time: " + video.currentTime);
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	let volume = this.value;
	video.volume = volume / 100;
	console.log("Volume: " + volume + "%");
	document.querySelector("#volume").textContent = volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Applying oldSchool class");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Removing oldSchool class");
	video.classList.remove("oldSchool");
});