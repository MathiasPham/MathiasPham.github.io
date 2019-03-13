///@ts-check

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

	if (question1 == "Islamabad") {
		correct++;
}
	if (question2 == "Hanoi") {
		correct++;
}	
	if (question3 == "Bejing") {
		correct++;
	}
	
	var pictures = ["win.gif", "meh.jpeg", "lose.gif"];
	var messages = ["Veldig bra jobba!", "Du bør klare alle 3!", "Du må skjerpe deg"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Du fikk " + correct + " poeng.";
	document.getElementById("picture").src = pictures[score];
	}

	function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
	
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
	
			display.textContent = minutes + ":" + seconds;
	
			if (--timer < 0) {
                document.getElementById("timer").innerHTML = "Tiden er ute, hvor mange poeng fikk du?";
                document.body.style.background = "red";
			}
		}, 1000);
	}
	
	window.onload = function () {
		var oneMinute = 60 * 1,
			display = document.querySelector('#time');
		startTimer(oneMinute, display);
	};
	
