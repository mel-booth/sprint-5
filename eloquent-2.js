Eloquent JavaScript: Chapter Two

//1. Looping a triangle

for (var hash = '#'; hash.length < 8; hash+= '#');
console.log('#');
//Change '#' to 'hash' line 2
for (var hash = '#'; hash.length < 8; hash+= '#');
console.log('hash');
//Remove quotations from hash line 2
for (var hash = '#'; hash.length < 8; hash+= '#');
console.log(hash);
//Whyyyyyyyyy
//Remove fucking semi-colon from fucking end of fucking first line!
for (var hash = '#'; hash.length < 8; hash += '#')
console.log(hash);


//2. FizzBuzz

for (var number = 0; number <= 100; number++){
  if ((number % 3 === 0)&&(number % 5 === 0)) {
    console.log("FizzBuzz");
  }
    else if (number % 3 === 0){
      console.log("Fizz");
    }
    else if (number % 5 === 0){
      console.log("Buzz");
    }
    else {
      console.log(number);
    }
  }
//Removed an extra curly bracket...


//x3. Chessboard
