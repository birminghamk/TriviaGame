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
	var scienceQuestion = [ {
		question: "What is the corpus callosum?",
		choices: ["A sweet word with no function", "A type of snail", "A receptor", "It connects the left and right brain hemispheres"],
		validAnswer: 3
	}, {
		question: "What bodily system does the nervous system directly interact with?",
		choices: ["Digestive System", "Immune System", "Reproductive System", "All of the above"],
		validAnswer: 3
	}, {
		question: "What is NOT a neurotransmitter",
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
	}, {
		question: "What is scientifically proven to help prevent or help resistance to stress?",
		choices: ["Placebo", "Exercise", "Midnight snacks", "Medication"],
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
		$("#questionDiv").empty();
		$("#choicesDiv").empty();
		//reset trivia
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

	function displayTrivia() {

		var newDiv = $("<div>");
		newDiv.append(scienceQuestion[0].question);
		$("#questionDiv").append(newDiv);

		var choicesArr = scienceQuestion[0].choices;

		for (var i = 0; i < choicesArr.length; i++) {
			var newDiv = $("<div>");
			newDiv.text(choicesArr[i]);
			$("#choicesDiv").append(newDiv);
			// var button = $("<button>");
			// button.addclass(".btn-circle");


		}
		
	}

	//start at start screen:

	$(".gameScreen").hide();
	
	$(".stopScreen").hide();

	$(".startScreen").show();

	//Click Start Button:
	$(".start").on("click", function() {
		//move to game screen
		$(".gameScreen").show();
		//remove start button
		$(".startScreen").hide();
		//counter starts
		run();
		// counter decreases by one
		decrement();
		//put questions on page
		displayTrivia();

		}); // END START BUTTON

		//Click an answer button
	$(".btn-circle").on("click", function() {
			userPick = $(this).data("id");
			scienceQuestin[0].validAnswer;

		if (userPick === scienceQuestion[0].validAnswer) {
			correctAnswer++;
		} else if (userPick != scienceQuestion[0].validAnswer) {
			incorrectAnswer++;
		} else if (userPick == "") {
			unAnswer++;
		}
				

		}); // END CLICK CIRCLE BUTTON

	//click start over button
	$(".start-over").on("click", function (){ 
		//return to start screen
		$(".startScreen").show();
		$(".gameScreen").hide();
		$(".stopScreen").hide();
		//call reset
		reset();
			
	}); // END START OVER BUTTON


}); // END PAGE LOAD
