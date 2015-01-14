/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here

var firstUsers = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var secondUser = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var thirdUser = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

users.push(firstUsers, secondUser, thirdUser);

//Console.log all of Tylers information

  //code here


console.log('Tylers info = ' + firstUsers.name + ', ' + firstUsers.email + ', ' + firstUsers.pw);
console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here

console.log('lenny\'s info = ' + secondUser.name + ', ' + secondUser.email + ', ' + secondUser.pw);
//Now create another instance of User using your own information and then add that to your users array.

  //code here

var fourthUsers = new User('rick', 'rick@gmail.com', 'iLoveJStoo');
users.push(fourthUsers);
// console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
var allUsers = function(arr){
for (var i = 0; i< arr.length; i++){
  console.log(arr[i].name);
}
};
allUsers(users);


