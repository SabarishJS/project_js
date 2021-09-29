//challenge 1: Age in days
function ageindays() {
    var birthyear=prompt('hey dude....!!! In what year you were born ?');
    var ageindayss = (2021-birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageindayss + ' days old.');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

//chalenge 2: shot generator
function generateshot() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-shot-gen');
    image.src = "https://media.tenor.com/images/f74aa638ee5769715b28777796ea2296/tenor.gif";
    div.appendChild(image);
}

//challenge 3: RPS
function rpsgame(yourchoice) {
    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
    botchoice = numberToChoice(randToRpsInt());
    console.log('computer choice:',botchoice);
    result = decidewinner(humanchoice,botchoice);
    console.log(result);
    message = finalmessage(result);
    console.log(message);
    rpsFrontEnd(yourchoice.id, botchoice,message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock','paper','scissors'][number];

}

function decidewinner(yourchoice, computerchoice) {
    var rpsdatabase ={
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };
    var yourscore = rpsdatabase[yourchoice][computerchoice];
    var computerscore = rpsdatabase[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]){
    if (yourscore === 0){
    return {'message': 'you lost','color': 'red' };
    } else if (yourscore === 0.5) {
      return {'message': 'you tied', 'color': 'green'};
    } else {
      return {'message': 'you won', 'color': 'yellow'};
    }
}

function rpsFrontEnd(humanimagechoice, botimagechoice, finalmessage) {
    var imagedatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');


    humandiv.innerHTML = "<img src ='" + imagedatabase[humanimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(3, 252, 240);'>"
    messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src ='" + imagedatabase[botimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(252, 3, 3);'>"
    

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
}

//challenge 4 
var all_btns = document.getElementsByTagName('button');
console.log(all_btns);

var copyallbtns = [];
for (let i=0; i<all_btns.length; i++) {
    copyallbtns.push(all_btns[i].classList[1]);
}

function btnscolorchange(buttonThing) {
    if (buttonThing.value === 'Red') {
        btnred();
    }
    else if (buttonThing.value === 'Yellow') {
        btnyellow();
    }
    else if (buttonThing.value === 'Blue') {
        btnblue();
    }
    else if (buttonThing.value === 'Green') {
        btngreen();
    }
    else if (buttonThing.value === 'Random') {
        btnrandom();
    }
    else if (buttonThing.value === 'Reset') {
        btnreset();
    }

}

function btnred() {
    for (let i=0; i<all_btns.length; i++) {
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-danger');
    }
}

function btnyellow() {
    for (let i=0; i<all_btns.length; i++) {
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-warning');
    }
}

function btnblue() {
    for (let i=0; i<all_btns.length; i++) {
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-primary');
    }
}

function btngreen() {
    for (let i=0; i<all_btns.length; i++) {
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-success');
    }
}

function btnreset() {
    for (let i=0; i<all_btns.length; i++) {
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(copyallbtns[i]);
    }
}

function btnrandom() {
    let choices = ['btn-primary','btn-danger', 'btn-success', 'btn-warning']
    
    for (let i=0; i<all_btns.length; i++) {
        let randomnumbers = Math.floor(Math.random()*4);
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(choices[randomnumbers]); 
    }
}

//challenge 5
let blackjackgame = {
    'you': {'scorespan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'computer': {'scorespan': '#computer-blackjack-result', 'div': '#computer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsmap': {'2': 2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isstand': false,
    'turnsover': false,
};

const YOU = blackjackgame['you']
const COMPUTER = blackjackgame['computer']

const clicksound = new Audio('blackjack_assets/sounds/swish.m4a');
const winsound = new Audio('blackjack_assets/sounds/cash.mp3');
const losssound = new Audio('blackjack_assets/sounds/aww.mp3');



document.querySelector('#blackjack-click-button').addEventListener('click', blackjackclick);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);

document.querySelector('#blackjack-show-button').addEventListener('click', computerlogic);


function blackjackclick() {
    if (blackjackgame['isstand'] === false) {   
     let card = randomcard();
     showcard(card, YOU); 
     updatescore(card, YOU );
     showscore(YOU);
    }
}

function randomcard() {
    let randomindex = Math.floor(Math.random() * 13);
    return blackjackgame['cards'][randomindex];
}

function showcard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardimage = document.createElement('img');
    cardimage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardimage);
    clicksound.play();
    }
}

function blackjackdeal() {

    if (blackjackgame['turnsover'] === true) {

        blackjackgame['isstand'] = false;
        
        let yourimage = document.querySelector('#your-box').querySelectorAll('img');
        let computerimage = document.querySelector('#computer-box').querySelectorAll('img');

        for (i=0; i < yourimage.length; i++) {
            yourimage[i].remove();
        }

        for (i=0; i < computerimage.length; i++) {
            computerimage[i].remove();
        }

        YOU['score'] = 0;
        COMPUTER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#computer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#computer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Play time";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackgame['turnsover'] = false;
    }

}

function updatescore(card, activePlayer) {
    if (card === 'A') { //If adding 11 keeps me below 21, add 11.Otherwise add 1.
        if (activePlayer['score'] + blackjackgame['cardsmap'][card][1] <= 21) {
            activePlayer['score'] += blackjackgame['cardsmap'][card][1];
        } else {
            activePlayer['score'] += blackjackgame['cardsmap'][card][0];
        }

    } else {
    activePlayer['score'] += blackjackgame['cardsmap'][card];
    }
}

function showscore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scorespan']).textContent = 'OUT OF GAME!';
        document.querySelector(activePlayer['scorespan']).style.color = 'red';
    } else {
    document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function computerlogic() {
    blackjackgame['isstand'] = true;

    while (COMPUTER['score'] < 16 && blackjackgame['isstand'] === true) {
        let card = randomcard();
        showcard(card, COMPUTER);
        updatescore(card, COMPUTER);
        showscore(COMPUTER);
        await sleep(500);
    }
    
    blackjackgame['turnsover'] = true; 
    let winner = computewinner();
    showresult(winner);
    
}

// compute who is the winner and return the winner
//update the wins losses and draws.
function computewinner() {
    let winner;

    if (YOU['score'] <= 21) {
        //condition: higher score than the computer or the computer got busts
        if (YOU['score'] > COMPUTER['score'] || COMPUTER['score'] > 21) {
            blackjackgame['wins']++;
            winner = YOU;

        } else if (YOU['score'] < COMPUTER['score']) {
            blackjackgame['losses']++;
            winner = COMPUTER;

        } else if (YOU['score'] === COMPUTER['score']) {
            blackjackgame['draws']++;
        }

    //condition: when user bust but computer dosen't
    } else if (YOU['score'] > 21 && COMPUTER['score'] <= 21) {
        blackjackgame['losses']++;
        winner = COMPUTER;

    } else if (YOU['score'] > 21 && COMPUTER['score'] > 21) {
        blackjackgame['draws']++;
    }

    console.log('winner', winner);
    return winner;
}

function showresult(winner) {
    let message, messagecolor;

    if (blackjackgame['turnsover'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackgame['wins'];
            message = 'you won';
            messagecolor = 'green';
            winsound.play();
            
        } else if (winner === COMPUTER) {
            document.querySelector('#losses').textContent = blackjackgame['losses'];
            message = 'you lost';
            messagecolor = 'red';
            losssound.play();

        } else {
            document.querySelector('#draws').textContent = blackjackgame['draws'];
            message = 'you drew';
            messagecolor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messagecolor;
    }
}


 


