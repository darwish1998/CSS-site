var tweet = prompt("What is your mind ");
var tweetCount = tweet.slice(0, 10);
alert(tweetCount);

var grd_age = prompt("What is your age: ");

var child_age = (grd_age - 10) * 4 + 21;

alert(child_age);

function getMilk(bottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("buy " + bottle + " bottles of milk");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(12)


function bmiCAlculator(weight, height) {

  var bmi = (weight / Math.pow(height, 2));
  return Math.round(bmi);


}

var b = bmiCAlculator(65, 1.8);

console.log(b);

function loveCal(fname, sname) {

  var n = Math.random()

  n = n * 100;
  n = Math.floor(n) + 1;

  return n;



}


console.log(loveCal("Ahmed", "Darwish"));

// Leap year challenge!

function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 ) {
            if (year % 400 === 0) {
                return "A leap Year!"
            }

        }else {
            return "A leap Year! "
        }

    }else {
        return "Not a leap Year"
    }


}

leapYear(2001);


// Invatation challenge
var dadka = ["Ahmed", "Darwish","Cade","Will waal","Hussain","wakaa"];
var name = prompt("Enter your name : ");
if (dadka.includes(name)) {
    alert("Welcom");

}else {
    alert("Soory you are not allowed")
}


// cHILDREN gAME

var output = [];
   var inp = 1;
 function fuzzBuzz() {

   if (inp % 3 === 0 && inp % 5 === 0 ) {
       output.push("FizzyBuzz");
   }
   else if (inp % 3 === 0) {
       output.push("Fizz")
    }
     else if (inp % 5 === 0) {
       output.push("Fuzzy");
    }

    else {


      output.push(inp);



 }
     inp++;
    console.log(output);

 }

fuzzBuzz()
