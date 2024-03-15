/*
  * Write a program that shows how a tennis game goes and who won it.
  * The program will receive a sequence consisting of "P1" (Player 1) or "P2" (Player 2), depending on who
  * win every point of the game.
  *
  * - The scores of a game are "Love" (zero), 15, 30, 40, "Deuce" (tie), advantage.
  * - Given the sequence [P1, P1, P2, P2, P1, P2, P1, P1], the program would display the following:
  * 15 - Love
  * 30 - Love
  * 30 - 15
  * 30 - 30
  * 40 - 30
  *P1 advantage
  *He has won P1
  * - If you want, you can control errors in data entry.
  * - Consult the game rules if you have questions about the points system.
  */


  const P1 = {
    name: "Adránov Marazov",
    country: "Russia",
    age: 18,
    knowledge: 8,
    score: 0
  }
  
  const P2 = {
    name: "Juan Pedro Garcia",
    country: "Spain",
    age: 22,
    knowledge: 4,
    score: 0
  }
  
const match = [P1, P1, P2, P2, P1, P2, P1, P1];

const points = {
  0:"LOVE",
  1:"15",
  2:"30",
  3:"40",
  4:"ADVANTAGE",
  5:"WIN"
}

for(i = 0; i <= match.length; i++){
  if(P1.score === 5 || P2.score === 5) break;
    if(match[i] === P1) {
      P1.score++;
      console.log(P1.name + ": " +points[P1.score] + " " + P2.name + ": " + points[P2.score]);
    } 
    else {
      P2.score++;
      console.log(P1.name + ": " +points[P1.score] + " " + P2.name + ": " + points[P2.score]);
    }
}
