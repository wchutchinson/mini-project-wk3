const random = ["R", "P", "S"];
const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
        rock: 0,
        paper: 0,
        scissors: 0,
    },
}

function  keepPlaying() {
    let keepPlaying = confirm("Do you want to play again?");
    if (keepPlaying === true) {
        letsPlay();
    } else {
        alert("Wins: " + stats.wins + "\n" + "Ties: " + stats.ties + "\n" + "Losses: " + stats.losses + "\n" + "Rock: " + stats.count.rock + "\n" + "Paper: " + stats.count.paper + "\n" + "Scissors: " + stats.count.scissors
        );
        alert("Thanks for playing!");
        return;
    };
};

function letsPlay(){
    loop:
    while (true) {
        let playerPlays = prompt("(R)ock, (P)aper, or (S)cissors?").toUpperCase();
        switch (playerPlays) {
            case "R":
                playerSelection = "R";
                stats.count.rock ++;
                break loop;
            case "P":
                playerSelection = "P";
                stats.count.paper ++;
                break loop;
            case "S":
                playerSelection = "S";  
                stats.count.scissors ++;
                break loop;
            default:
                alert("Invalid input. Please try again.");
        }
    }
    let computerSelection = random[Math.floor(Math.random() * random.length)];
    alert("Computer Played: " + computerSelection);
    
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
        stats.ties ++;
    } else if (
        (playerSelection === "R" && computerSelection === "S") ||
        (playerSelection === "S" && computerSelection === "P") ||
        (playerSelection === "P" && computerSelection === "R")
    ) {
        alert("You win!");
        stats.wins ++;
    } else {
        alert("You lose!");
        stats.losses ++;
    } 
    keepPlaying();     
};

letsPlay();

