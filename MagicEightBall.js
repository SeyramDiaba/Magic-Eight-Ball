// Empty string to hold userName input
let userName='' || 'Stranger';

//  Ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`):console.log('Hello!');

// user question
let userQuestion = 'Am i stressed out?';
console.log(`${userName} asked: ${userQuestion}.`);

// random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);

// eightball variable
let eightBall = '';


//  8 Magic Eight Ball phrases that we’d like to save to the variable eightBall
switch (randomNumber){
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes')
    break;
}

// Magic eight ball answer
eightBall = randomNumber
console.log(`The eight ball value is: ${eightBall}`)
