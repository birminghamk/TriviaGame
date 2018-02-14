// On page load:
$(function () {
	//variable for userPick
	var userPick;
	//variable for correctAnswer
	var correctAnswer = 0;
	//variable for incorrectAnswer
	var incorrectAnswer = 0;
	//varialbe for unansweredQuestion
	var unAnswer = 0;
	//variable for counter
	var counter = 11;
	//need variable for intervalID
	var intervalId;
	//need a variable for userGuess
	var questionCounter = 0;


	var scienceQuestion = [ {
		question: "What is the corpus callosum?",
		choices: ["A sweet word with no function", "A type of snail", "A receptor", "It connects the left and right brain hemispheres"],
		validAnswer: 3
	}, {
		question: "What bodily system does the nervous system directly interact with?",
		choices: ["Digestive System", "Immune System", "Reproductive System", "All of the above"],
		validAnswer: 3
	}, {
		question: "What is NOT a neurotransmitter?",
		choices: ["Serotonin", "Nitric Oxide", "Insula", "Acetylcholine"],
		validAnswer: 2
	}, {
		question: "What drug is responsible for interacting with endocannabinoids?",
		choices: ["Marijuana", "Heroin", "LSD", "Cocaine"],
		validAnswer: 0
	}, {
		question: "What molecule is increased in the synapse when you are sleepy?",
		choices: ["Caffeine", "Adenosine", "Glutamate", "Dopamine"],
		validAnswer: 1
	}

	];

	//reset function
	function reset() {
		// set correctAnswers to 0
		correctAnswer = 0;
		// set incorrectAnswers to 0
		incorrectAnswer = 0;
		// set unansweredQuestion to 0
		unAnswer = 0;
		// set counter to 120 seconds
		counter = 11;
		//clear intervalId
		clearInterval(intervalId);
	} // END RESET FUNCTION

	reset();

	//update function
	function update() {
		//displays correct answers
		$("#correct").html("Correct Answers: " + correctAnswer + "/5");
		//displays incorrect answers
		$("#incorrect").html("Incorrect Answers: " + incorrectAnswer + "/5");
		//displays unanswered questions
		$("#unanswered").html("Unanswered Questions: " + unAnswer + "/5");
		//create loop to display questions

	} // END UPDATE FUNCTION

	update();

	function run() {

		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
	}

	function decrement () {
		counter--;
		if (counter <= 0) {
			clearInterval(intervalId);
			$(".stopScreen").show();
			$(".gameScreen").hide();
		}
		$(".timeTracker").html("Time Remaining: " + counter + " seconds");
	}


	function displayTrivia(questionCounter) {
		if(questionCounter >= scienceQuestion.length) {
			clearInterval(questionDisplayInterval);
		} else {
			var newDiv = $("<div>");
			newDiv.append(scienceQuestion[questionCounter].question);
			$("#questionDiv").append(newDiv);

			var choicesArr = scienceQuestion[questionCounter].choices;
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
		questionCounter++;
	}

	var questionDisplayInterval = setInterval(function () {
			$("#questionDiv").empty();
			$("#choicesDiv").empty();
			questionCounter++;
			displayTrivia(questionCounter);
		
		}, 10000, questionCounter);

	var newquestion = questionDisplayInterval;

	//start at start screen:

	$(".gameScreen").hide();

	$(".stopScreen").hide();

	$(".startScreen").show();

	//Click Start Button:
	$("#start").on("click", function() {
		//move to game screen
		$(".gameScreen").show();
		//remove start button
		$(".startScreen").hide();
		//counter starts
		run();
		// counter decreases by one
		decrement();
		//put questions on page
		displayTrivia(questionCounter, questionDisplayInterval);
		}); // END START BUTTON


		//Click an answer button
	$(document).on("click", ".select", function() {
			userPick = $(this).data("value");
			scienceQuestion[0].validAnswer;

			clearInterval(questionDisplayInterval);

			$("#questionDiv").empty();
			$("#choicesDiv").empty();
			questionCounter++;
			displayTrivia(questionCounter);
			counter = 11;

			questionDisplayInterval = setInterval(function () {
				$("#questionDiv").empty();
				$("#choicesDiv").empty();
				questionCounter++;
				displayTrivia(questionCounter);
				
			
			}, 10000, questionCounter);

		if (userPick === scienceQuestion[questionCounter].validAnswer) {
			correctAnswer++;
			update();
		} else if (userPick != scienceQuestion[questionCounter].validAnswer) {
			incorrectAnswer++;
			update();
		} else if (userPick != "null") {
			unAnswer++;
			update();
		}

	}); // END CLICK CIRCLE BUTTON

	//click start over button
	$(document).on("click",".start-over", function (){
		//return to start screen
		$(".startScreen").show();
		$(".gameScreen").hide();
		$(".stopScreen").hide();
		//call reset
		reset();
		
	

	}); // END START OVER BUTTON


}); // END PAGE LOAD
