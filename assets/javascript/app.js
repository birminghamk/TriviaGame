$(function () {
	//correct answers
	var correctCount = 0;
	//incorrect answers
	var incorrectCount = 0;
	//unanswered questions
	var skippedCount = 0;
	//counter for questions
	var questionCounter = -1;
	// variable for counter
	var timeRemaining = 10;
	// switch to new question
	var questionTimer;

	var questions = [{
		text: "What is the corpus callosum?",
		choices: ["A sweet word with no function", "A type of snail", "A receptor", "It connects the left and right brain hemispheres"],
		solution: 3
	}, {
		text: "What bodily system does the nervous system directly interact with?",
		choices: ["Digestive System", "Immune System", "Reproductive System", "All of the above"],
		solution: 3
	}, {
		text: "What is NOT a neurotransmitter?",
		choices: ["Serotonin", "Nitric Oxide", "Insula", "Acetylcholine"],
		solution: 2
	}, {
		text: "What drug is responsible for interacting with endocannabinoids?",
		choices: ["Marijuana", "Heroin", "LSD", "Cocaine"],
		solution: 0
	}, {
		text: "What molecule is increased in the synapse when you are sleepy?",
		choices: ["Caffeine", "Adenosine", "Glutamate", "Dopamine"],
		solution: 1
	}];

	//Click Start Button:
	$("#start").on("click", function() {
		//move to game screen
		$(".gameScreen").show();
		//remove start button
		$(".startScreen").hide();
		$(".stopScreen").hide();
		//put questions on page
		newQuestion();
	});

	//click start over button
	$(document).on("click",".start-over", function (){
		replayGame();
	});

	function countdown () {
		timeRemaining--;

		if (timeRemaining === 0) {
			console.log("TIME UP");
			timeUp();
		}
		
		$(".timeTracker").html("Time Remaining: " + timeRemaining + " seconds");
	}

	function timeUp () {
		skippedCount++;
		newQuestion();
	}

	function newQuestion() {
		clearInterval(questionTimer);
		questionCounter++;

		$("#questionDiv").empty();
		$("#choicesDiv").empty();
		$(".timeTracker").empty();

		if (questionCounter < questions.length) {
			questionTimer = setInterval(countdown, 1000);
			displayQuestion(questions[questionCounter]);
			timeRemaining = 10;
			$(".timeTracker").html("Time Remaining: " + timeRemaining + " seconds");
		} else {
			finishGame();
		}
	}

	//Click an answer button
	$(document).on("click", ".select", function() {
		if ($(this).data("value") === questions[questionCounter].solution) {
			correctCount++;
		} else  {
			incorrectCount++;
		}
		newQuestion();
	});

	function displayQuestion (question) {
		var newDiv = $("<div>");
		newDiv.append(question.text);
		$("#questionDiv").append(newDiv);

		var choicesArr = question.choices;

		for (var i = 0; i < choicesArr.length; i++) {
			var newDiv = $("<div>");
			newDiv.text(choicesArr[i]);
			$("#choicesDiv").append(newDiv);
			var button = $("<button>");
			button.attr("data-value", i);
			button.addClass("select btn-primary");
			button.text("Select Answer");
			newDiv.append(button);
		}
	}

	function finishGame() {
		//displays correct answers
		$("#correct").html("Correct Answers: " + correctCount + "/5");
		//displays incorrect answers
		$("#incorrect").html("Incorrect Answers: " + incorrectCount + "/5");
		//displays unanswered questions
		$("#unanswered").html("Unanswered Questions: " + skippedCount + "/5");
		$(".stopScreen").show();
		$(".gameScreen").hide();
	}

	//reset function
	function replayGame() {
		//refreshes page, returns to start screen
		location.reload();
		// set correctAnswers to 0
		correctCount = 0;
		// set incorrectAnswers to 0
		incorrectCount = 0;
		// set unansweredQuestion to 0
		skippedCount = 0;
	} 

}); 
