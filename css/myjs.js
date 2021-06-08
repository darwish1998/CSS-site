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
