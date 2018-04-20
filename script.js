//------------------Exercise 1-----------------------//
var t= 0;
var input= prompt("Please enter a number");
for (var i = 1; i <= input; i++){
t = t + i;
}
console.log(t + 1);
//------------------Exercise 2-----------------------//

var start= prompt("Do you want to play?");
if (start==="yes"){
do{ 
  var next= prompt("Type a word below");
  var last= prompt("Do you want to play again?");
  console.log(next);
   }while(last!=="no");
}
else(start="no");{
  console.log("Ok, have a good one.");
}

//----------------------Exercise 3---------------------------//

var start = prompt("Would you like to print your name?");
var blank=("");
while(start==="yes"){
	var you= prompt("What is your name?");
	var start= prompt("Would you like to print your name again?");
	console.log("Hello my name is "+you+blank);
	blank=blank+"!";
}

//----------------------Exercise 4----------------------------//

 var time= prompt("What time of day is it?");
 if(time==="morning")
 {
   console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
 }else if(time==="noon"){
   console.log("Since it is noon you should be eating lunch. We suggest a salad.");
 }else{
   console.log("Since it is evening you should be eating dinner. We suggest chicken and rice.");
 }


//------------------------------------------//
