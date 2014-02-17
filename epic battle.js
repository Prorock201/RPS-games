window.onload = bindEventHandlers;

var userData = "";
var computerData = "";

function bindEventHandlers () {
	var userControl = document.querySelectorAll(".control > div");
	for (var i=0; i < userControl.length; i++) {
		/*userControl[i].removeEventListener ("click", startBatlle, false);*/
		userControl[i].addEventListener ("click", startBatlle, false);
	}
	/*var animationObject = document.querySelectorAll(".content > div");
	for (var i=0; i < animationObject.length; i++) {
		animationObject[i].classList.remove('animation');
	}*/
}

function startBatlle (event) {
	/*removeClass();*/
	var userSelection = event.currentTarget.innerText;
	userData = userSelection;
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
	showAnimation();
	setTimeout(showResult,3000);
}	

/*function removeClass() {
	var animationObject = document.querySelectorAll(".content > div");
	for (var i=0; i < animationObject.length; i++) {
		animationObject[i].className -= " animation";
	}*/

function getRandom (min, max) {
  	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function showAnimation() {
	var animationObject = document.querySelectorAll(".content > div");
	for (var i=0; i < animationObject.length; i++) {
		animationObject[i].classList.add('animation');
	}
	var count = document.getElementsByTagName("span")[0];
	setTimeout(function() {
		for (var z=1; z<4; z++) {
			setTimeout(function() {
				
				count.innerText = z;
			}, 1000);
		}
	}, 1000);
		
	

	/*for (var i=0; i < animationObject.length; i++) {
		if (animationObject[i].className == "content__left animation") {
			animationObject[i].classList.remove('animation');
		} else {
			animationObject[i].className += " animation";
		}
	}
*/
	/*function removeClass () {
		if ()
	}*/
	/*var count = document.getElementsByTagName("span")[0];
	var z = 1;
	while ( z < 3) {
		console.log(z);
		count.innerHTML = z;
		z++;
	}
	do {
		console.log(z);
		count.innerHTML = z;
		z++;
	} while (z < 3);*/
}
function showResult ()	{
	var computerImage = document.getElementsByClassName("content__left")[0];
	switch (computerData) {
		case "rock":
			computerImage.innerHTML = "<img src=\"rock.png\">";
			break;
		case "paper":
			computerImage.innerHTML = "<img src=\"paper.png\">";
			break;
		case "scissors":
			computerImage.innerHTML = "<img src=\"scissors.png\">";
	}
	var userImage = document.getElementsByClassName("content__right")[0];
	switch (userData) {
		case "rock":
			userImage.innerHTML = "<img src=\"rock.png\">";
			break;
		case "paper":
			userImage.innerHTML = "<img src=\"paper.png\">";
			break;
		case "scissors":
			userImage.innerHTML = "<img src=\"scissors.png\">";
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

	

