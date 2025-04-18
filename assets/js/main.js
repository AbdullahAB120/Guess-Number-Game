let won = 0;
let lose = 0;
let remain = 5;
let attempt = remain;
let gameRange = 5;


$("#form").submit(function(e) {
	e.preventDefault();
	
	let guessValue = $("#guess").val();
	let randomValue = randomNumberGenerator(gameRange);

	if(guessValue == randomValue) {
		$("#resultMsg").html(`<p class="text-success mb-0">Congrats!! <br> You guess the Right Number</p>`);
		$("#currectNumber").empty();
		$("#guess").val("");
		won++;
		attempt--;
	} else {
		$("#resultMsg").html(`<p class="text-danger mb-0">Opps!! <br> You can't guess the Right Number</p>`);
		$("#currectNumber").html(`<p>Correct Number was ${randomValue}</p>`);
		$("#guess").val(""); 
		lose++;
		attempt--;
	}
	
	if(attempt < 1) {
		$("#form").remove();
		$("#gameOver").removeClass("d-none");
		$("#gameOver").addClass("d-block mt-5");
		$("#gameOver").html(`Game Over... <br> <br> Your score is ${won}/${remain} <br> <br> <button class="btn btn-dark" onClick="window.location.reload()">Restart</button>`);
	}
	
	$("#remain").text(`Remain: ${attempt}`);
	$("#won").text(`Won : ${won}`);
	$("#lose").text(`Lose : ${lose}`);
});


const randomNumberGenerator = (max) => {
	return Math.round(Math.random() * (max - 1)) + 1;
};


$("#guess")[0].placeholder =`Guess a Number from 1 to ${gameRange}`;
$("#guess")[0].max = gameRange;
$("#remain").text(`Remain: ${remain}`);