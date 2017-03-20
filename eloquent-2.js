//looping a triangle

var output="";
for (var i = 0; i < 7; i++){
  output +="#";
  console.log(output +'\n')

}



//fizzbuzz

for (i = 1; i <= 100; i++) {
  if ( i % 3) { // if i % 3 ==0 -> false
    if ( i % 5) {
      console.log(i); // i not divisable by 3 and 5
    } else {
      console.log("Buzz"); //i is divisable by 5 only
    }
  } else {

      if ( i % 5) {
         console.log("Fizz"); // i is divisable by 3 only
       } else {
         console.log("FizzBuzz"); // i is divisable by 3 and 5
       }
	}
}

//chessboard

var size = 8;
var output ="";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      output += " ";
    } else {
      output += "#";
    }
  }
  output +="\n";
}

 console.log(output);
