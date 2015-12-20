
function test(){


var x1 = Math.floor((Math.random() * 10) + 1);

var x2 = Math.floor((Math.random() * 10) + 1);

var calculation = Math.floor((Math.random() * 4) +1);

var y;

if ( calculation == 1){
 y = x1 + x2;
}
	else if(calculation== 2){
		alert("-");
		y = x1 - x2;
	}
	else if(calculation == 3){
		alert("*");
		y = x1 * x2;	
	}
	else if(calculation == 4){
		alert("/");
		y = x1/x2;
	}
}	






