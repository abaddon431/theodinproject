
function handPicker(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getHand(isPlayer=false) { 
    const hands = [
        {"hand":"paper", "beats":"rock"},
        {"hand":"scissor", "beats":"paper"},
        {"hand":"rock", "beats":"scissor"}
    ]
    let playerChoice;
    if (isPlayer == true) {
        const hand = prompt("Pick a hand: 1. Paper, 2. Scissor, 3. Rock");
        playerChoice = hands[hand-1];
        playerChoice.player = "human";
    }
    else {
        playerChoice = hands[handPicker(0,2)];
        playerChoice.player = "cpu";
    }
    
    return playerChoice;
}
function getWinningHand(firstHand, secondHand) {
    if (firstHand.beats === secondHand.hand){
        return firstHand.player;
    }
    else if (firstHand.hand === secondHand.hand){
        return "draw" 
    }
    else {
        secondHand.player
    }
}

function playHand(){
    let round=0;
    scores = {
        "human":0,
        "cpu":0,
        "draw":0
    }
    while (round <=5){
        let cpuHand = getHand();
        let playerHand = getHand(isPlayer=true);
        console.log(`CPU: ${cpuHand.hand} V.S PLAYER: ${playerHand.hand}`);
        scores[getWinningHand(cpuHand, playerHand)] += 1;
        round +=1;
    }
    round += 1;
    let winner = Object.keys(scores).reduce((maxKey, key) => scores[key] > scores[maxKey] ? key : maxKey);
    console.log(`Winner is ${winner}`);
    alert(`Winner is ${winner}`)
}
playHand();
