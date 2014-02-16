
//Script for coin toss game, creates Sunday 27 January 2013 by Alec Drew
//Declare statusArray to track the number won and lost

//Function to make coin flip
var coinFlip = function(){
    	$('#result').hide();
		$('#score').hide();
		$('#status').hide();
		$('#flip').animate({transform:1080},{
		step: function(now,fx) {
			$(this).css('transform','rotateX('+ now + 'deg)');
			$(this).css('-ms-transform','rotateX(' + now + 'deg)'); /* IE 9 */
			$(this).css('-moz-transform','rotateX(' + now + 'deg)'); /* Firefox */
			$(this).css('-webkit-transform','rotateX(' + now + 'deg)'); /* Safari and Chrome */
			$(this).css('-o-transform','rotateX(' + now + 'deg)'); /* Opera */
			},
			duration: 'slow'
		});
		$('#result').delay('slow').show(0);
	
	};
	

	
	
//Toss function which takes the users's choice and creates an outcome
	
	var toss = function(value) {
		
		//uses the value of the button pressed to determine choice
		choice = value;
		
		//generate random number, either 0 or 1 then assign heads if 0 and tails if 1
		result = Math.floor(Math.random() * 2);
		if (result === 0) {
			result = "Heads";
			}
		else {
			result = "Tails";
			}
		
		//write choice and result to page
		document.getElementById('choice').innerHTML = choice;	
		
		coinFlip();
		document.getElementById('result').innerHTML = result;
		
		//determine whether user won or lost game
		
		
		//add result to statusArray
	
		
		//count wins and loses in statusArray and assign to variables
	
		
		
		};
//End coin toss


//Reset game

	
