// On page load:
$(function () {
	//variable for correctAnswer
	var correctAnswer = 0;
	//variable for incorrectAnswer
	var incorrectAnswers = 0;
	//varialbe for unansweredQuestion
	var unansweredQuestion = 0;
	//variable for counter
	var counter = 0;
	//need a variable for userGuess
	var userGuess = ["Answer1", "Answer2", "Answer3", "Answer4"];
	//array of rightAnswer
	var rightAnswer = ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5"];
	// array of answers
	var answersArr= {
		Answers1: 
		Answers2:
		Answers3:
		Answers4:
		Answers5:
	
	}
	//array of questions
	var questionsArr= [ {

		Question1: "What is the corpos callosum?",
		Question2: "What other bodily systems does the nervous system directly interact?",
		Question3:
		Question4:
		Question5:
	}

	];
	//reset function
		// set correctAnswers to 0
		// set incorrectAnswers to 0
		// set unansweredQuestion to 0
		// set counter to 120 seconds
	//update function
		//displays correct answers
		//displays incorrect answers
		//displays unanswered questions
	//start at start screen
		//Click Start Button:
			//move to game screen
				//counter starts
				//counter decreases by 1
				//user clicks button for each question
				//correct answer=specific button
		//counter = 0 seconds:
			//move to stop screen
				//if user guesses=correctAnswer,
					//increase correctAnswers by 1
					//call update
				// else if userGuess!=correctAnswer
					//increase incorrect Answer by 1
					//call update
				// else if userGuess=empty
					//increase unanswered by 1
					//call update

		//click start over button
			//return to start screen
			//call reset

}); // END PAGE LOAD
