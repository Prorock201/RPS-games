window.onload = bindEventHandlers;
var userData = "";
var computerData = "";

function bindEventHandlers() {
	var userControl = document.querySelectorAll(".control > div");
	for (var i=0; i < userControl.length; i++) {
		userControl[i].addEventListener ("click", startBatlle, false);
	}
}

function startBatlle(event) {
	clearStartPosition();
	formPlayersChoice(event);
	showAnimation();
	setTimeout(showResult,3000);
}

function clearStartPosition() {
	var computerImage = document.querySelectorAll(".content__left > img");
	for (var i=0; i < computerImage.length; i++) {
		computerImage[i].style.display = "none";
		computerImage[0].style.display = "block";
	}
	var userImage = document.querySelectorAll(".content__right > img");
	for (var j=0; j < userImage.length; j++) {
		userImage[j].style.display = "none";
		userImage[0].style.display = "block";
	}
	var animationObject = document.querySelectorAll(".content > div");
	for (var i=0; i < animationObject.length; i++) {
		animationObject[i].classList.remove('animation');
	}
}

function formPlayersChoice(event) {
	userData = event.currentTarget.innerText;
	switch (getRandom (1, 3)) {
		case 1:
			computerData = "rock";
			break;
		case 2:
			computerData = "paper";
			break;
		case 3:
			computerData = "scissors";
	}	
}	

function getRandom(min, max) {
  	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function showAnimation() {
	var counter = document.getElementsByTagName("span")[0];
	var z = 1;
	counter.innerText = z;
	setCounter = setInterval(function() {
		z++;
		counter.innerText = z;
	}, 1000);
	var animationObject = document.querySelectorAll(".content > div");
	for (var i=0; i < animationObject.length; i++) {
		animationObject[i].classList.add('animation');
	}
}

function showResult ()	{
	clearInterval(setCounter);
	var computerImage = document.querySelectorAll(".content__left > img");
	computerImage[0].style.display = "none";
	switch (computerData) {
		case "rock":
			computerImage[1].style.display = "block";
			break;
		case "paper":
			computerImage[2].style.display = "block";
			break;
		case "scissors":
			computerImage[3].style.display = "block";
	}
	var userImage = document.querySelectorAll(".content__right > img");
	userImage[0].style.display = "none";
	switch (userData) {
		case "rock":
			userImage[1].style.display = "block";
			break;
		case "paper":
			userImage[2].style.display = "block";
			break;
		case "scissors":
			userImage[3].style.display = "block";
	}
	var resultImage = document.getElementsByClassName("content__middle")[0];
	if ( userData == computerData) {
		resultImage.innerText = "Tie!";
	} else if ( userData == "rock" && computerData == "scissors") {
		resultImage.innerText = "You Win!";
	} else if ( userData == "paper" && computerData == "rock") {
		resultImage.innerText = "You Win!";
	} else if ( userData == "scissors" && computerData == "paper") {
		resultImage.innerText = "You Win!";
	} else {
		resultImage.innerText = "You Lose!";
	}
}