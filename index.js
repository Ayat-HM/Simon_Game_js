var i;
var random_num;
var user_gess;
var h;
var level;
var new_game = true;

level = 0;
var audio1 = new Audio("sounds/green.mp3");
var audio2 = new Audio("sounds/red.mp3");
var audio3 = new Audio("sounds/yellow.mp3");
var audio4 = new Audio("sounds/blue.mp3");
var wrong = new Audio("sounds/wrong.mp3");




////////////////////////////////////////////////////////////////////
//                          START                                 //
////////////////////////////////////////////////////////////////////


window.addEventListener('keydown', function(e) {
  //check if it is the first time
  if (new_game) {
    new_game = false;
//    document.querySelector('p').innerHTML = `You pressed ${e.key}`;


    //initalize
    i = 0;
    random_num = [];
    user_gess = [];
    h = 0;

    document.querySelector('#level-title').innerHTML = "Level " + (level+1);

    debugger;
    load(level);
    add_listeners();

  }
}, false);



////////////////////////////////////////////////////////////////////
//                          LOAD()                                //
////////////////////////////////////////////////////////////////////
const timer = ms => new Promise(res => setTimeout(res, ms))
async function load(level) { // We need to wrap the loop into an async function for this to work




  random_num = generateRandom(random_num);
  await timer(1000); // then the created Promise can be awaited



} //end load

////////////////////////////////////////////////////////////////////
//                         generateRandom()                        //
////////////////////////////////////////////////////////////////////
function generateRandom(random_num) {

  random_num[i] = Math.floor(Math.random() * 4) + 1

  var randomColor = [];

  switch (random_num[i]) {
    case 1: {
      randomColor[i] = "green";
      document.querySelector("#green").classList.add('blob', 'white');
 audio1.play();


      setTimeout(function() {
        document.querySelector("#green").classList.remove('blob', 'white');
      }, 600);



      break;
    }
    case 2: {
      randomColor[i] = "red";
      document.querySelector("#red").classList.add('blob', 'white');
      audio2.play();
      setTimeout(function() {
        document.querySelector("#red").classList.remove('blob', 'white');
      }, 600);

      break;
    }
    case 3: {
      randomColor[i] = "yellow";
      document.querySelector("#yellow").classList.add('blob', 'white');
      audio3.play();
      setTimeout(function() {
        document.querySelector("#yellow").classList.remove('blob', 'white');
      }, 600);
      break;
    }
    case 4: {
      randomColor[i] = "blue";
      document.querySelector("#blue").classList.add('blob', 'white');
      audio4.play();
      setTimeout(function() {
        document.querySelector("#blue").classList.remove('blob', 'white');
      }, 600);
      break;
    }
    default:
      text = "Looking forward to the Weekend";
  } //end switch (expression) {
  i++;
  //  for (var j = 0; j < random_num.length; j++) {
  ///      console.log(random_num[j]);
  //    }
  return random_num;

} //end generateRandom(random_num)



////////////////////////////////////////////////////////////////////
//                         add_listeners()                        //
////////////////////////////////////////////////////////////////////
function add_listeners() {

  console.log("random_num");
  console.log(...random_num);



  const green = document.getElementById('green');
  green.addEventListener('click', handleClick1, false);
  const red = document.getElementById('red');
  red.addEventListener('click', handleClick2, false);
  const yellow = document.getElementById('yellow');
  yellow.addEventListener('click', handleClick3, false);
  const blue = document.getElementById('blue');
  blue.addEventListener('click', handleClick4, false);

}
////////////////////////////////////////////////////////////////////
//                         handleClick()                        //
////////////////////////////////////////////////////////////////////

function handleClick1() {

  user_gess[h] = 1;
  document.querySelector("#green").classList.add("gray");
  setTimeout(function() {
    document.querySelector("#green").classList.remove("gray");
  }, 200);

  if (user_gess[h] == random_num[h]) {
    console.log("match");
    disable_click();

  } else {
        document.querySelector('#level-title').innerHTML = "GAME OVER ##🤦‍♀️😢# at level "+level;
wrong.play();
  }

}

function handleClick2() {
  console.log('element clicked');
  user_gess[h] = 2;
  document.querySelector("#red").classList.add("gray");
  setTimeout(function() {
    document.querySelector("#red").classList.remove("gray");
  }, 200);
  console.log("your gess");
  console.log(...user_gess);
  console.log("user_gess[h]=" + user_gess[h] + "random_num[h]=" + random_num[h]);
  if (user_gess[h] == random_num[h]) {
    console.log("match");
    disable_click();

  } else {
  document.querySelector('#level-title').innerHTML = "GAME OVER ##🤦‍♀️😢# at level "+level;
wrong.play();
  }
}


function handleClick3() {
  console.log('element clicked');
  user_gess[h] = 3;
  document.querySelector("#yellow").classList.add("gray");
  setTimeout(function() {
    document.querySelector("#yellow").classList.remove("gray");
  }, 200);

  console.log("your gess");
  console.log(...user_gess);
  console.log("user_gess[h]=" + user_gess[h] + "random_num[h]=" + random_num[h]);
  if (user_gess[h] == random_num[h]) {
    console.log("match");
    disable_click();


  } else {

document.querySelector('#level-title').innerHTML = "GAME OVER ##🤦‍♀️😢# at level "+level;
wrong.play();
  }
}


function handleClick4() {
  console.log('element clicked');
  user_gess[h] = 4;
  document.querySelector("#blue").classList.add("gray");
  setTimeout(function() {
    document.querySelector("#blue").classList.remove("gray");
  }, 200);

  console.log("your gess");
  console.log(...user_gess);
  console.log("user_gess[h]=" + user_gess[h] + "random_num[h]=" + random_num[h]);
  if (user_gess[h] == random_num[h]) {
    console.log("match");
    disable_click();

  } else {

document.querySelector('#level-title').innerHTML = "GAME OVER ##🤦‍♀️😢# at level "+level;
wrong.play();
}
}






function disable_click() {
  console.log("level + h inside disable click level=" + level + "h=" + h);

  if (h == level) {
    //level clicks fulll
    console.log("end level clicks =" + level);
    //dont allow more click
    green.removeEventListener('click', handleClick1, false);
    red.removeEventListener('click', handleClick2, false);
    yellow.removeEventListener('click', handleClick3, false);
    blue.removeEventListener('click', handleClick4, false);



    //if (random_num.length === user_gess.length && random_num.every((value, index) => value === user_gess[index])) {

    console.log("you win ========================🤞😎🤞😍==========at " + level);
    user_gess = [];
    h = 0;
    level++;

    document.querySelector('#level-title').innerHTML = "Level 😎" + (level+1);
    load(level);
    add_listeners();
    //  }

  } else {
    h++;

  }
}
