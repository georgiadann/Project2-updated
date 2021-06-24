//Team selection program - version 1
//Georgia Dann
//22/06/2021

//having list of players ready to be picked
players = ['Herbert','Brad','Jason','Mark','Melvin','Clarence','Horatio','Horace','Jonny','Sebastian','Karlos','Bryce','Tobias'];

//having two empty teams waiting to have players added
team1 = [];
team2 = [];
round = 1;

do{
//random pick 
let player1 = Math.floor(Math.random()* players.length + 0 );
player1Name = players[player1];
//to remove random person picked from 'players' list
players.splice(player1, 1);

//to push random player picked into team 1 
team1.push(player1Name);

//random pick team 2
let player2 = Math.floor(Math.random()* players.length + 0 );
player2Name = players[player2];
//remove random person from players list
players.splice(player2,1);
//push random player to team 2
team2.push(player2Name);

round++
} while(round <= 6);

//saying final teams
console.log('Team 1 is: ' + team1);
console.log('Team 2 is: ' + team2);
//13th person left over 
console.log('Better luck next time ' + players);