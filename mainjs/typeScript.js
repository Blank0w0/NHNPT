



/* This one is for the type writer effect */

// Can also be included with a regular script tag



const mHTML = document.getElementById('msg'),

messages = [

'New Hope Nay Pyi Taw',

'Smart City',



];

let currentMessage = 0;

function typeMessage() {

if (!messages[currentMessage]) {

  currentMessage = 0;

}

const currentStr = messages[currentMessage];

currentStr.split();

let part = '';

let currentLetter = 0;

let int1 = setInterval(()=>{

  if (!currentStr[currentLetter]) {

    currentMessage++;

    setTimeout(()=>{

      deleteMessage(part);

    }, 550);

    clearInterval(int1);

  } else {

    part += currentStr[currentLetter++];

    mHTML.innerHTML = part;

  }

}, 200);

}

function deleteMessage(str) {

let int = setInterval(()=>{

  if (str.length === 0) {

    setTimeout(()=>{

      typeMessage();

    }, 450);

    clearInterval(int);

  } else {

    str = str.split('');

    str.pop();

    str = str.join('');

    mHTML.innerHTML = str;

  }

},50);

}

typeMessage();


