// random num 

var gameScore, activePlayer, roundScore, mainScore;
mainScore = [0,0];
roundScore = 0;
activePlayer = 0;
// class = "player-" + activeplayer   => player-1
console.log(`active player is  ${activePlayer}`);


// dice rolling

function roll(){
    console.log(`dice rolling for player ${activePlayer}.....................`)
    var dice;
    dice = Math.floor(Math.random()*6+1);
    console.log(`dice values is  ${dice}`);

    

    // if not one roundscore = roundscore + dice
    if(dice!==1){
        // add score and to global score
        roundScore += dice;
    }
    // if 1 then roundscore = 0
    // toggle active player
    else{
        // switch player
        roundScore = 0;
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        console.log(`ACTIVE PLAYER SWITCHED TO ${activePlayer}`);
    }
    console.log(`round score is  ${roundScore}`);
}

function holdScore(){
    // update mainScore of active player
    mainScore[0] += roundScore;
    console.log(`mainscore of active player ${activePlayer} is ${mainScore[activePlayer]}`)
}

roll();

roll();
roll();
holdScore();

roll();

roll();
roll();
holdScore();
