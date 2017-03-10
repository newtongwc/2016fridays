/* Get access to the button by storing it in a variable */
var total_button = document.getElementById("aButton");

/* This is the function that gets called when the user clicks the button */
total_button.onclick = function() {
  /* Get the name value from the input with id 'name' and save in a var */
  var name_input = document.getElementById("name").value;
		
    var checkboxId;
    var checkBox;
    var countInput;
    var cookieCount = 0, count;
    for (var i = 1; i < 9; i++) { 
	checkboxId = 'cookie' + i;
	console.log(checkboxId);
	checkBox = document.getElementById(checkboxId);
	if (checkBox.checked) {
	    countInputId = 'count' + i;
	    countInput = document.getElementById(countInputId);
	    count = parseInt(countInput.value);
	    if (! isNaN(count) && count > 0) {
		cookieCount += count;
	    }
	}		
    }
 
  /* Create a variable called 'total' and store the cost of cookie boxes selected */
  var total = cookieCount * 5;
 
  /* Create message like below and replace the innerHTML of the <p> with id 'msg' */
  var msg = name_input + ', you have chosen ' + cookieCount + ' boxes of cookies. Your total is $' + total;
  var msg_p = document.getElementById("msg");
  msg_p.innerHTML = msg;
}
