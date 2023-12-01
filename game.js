/* this function will be called by a button click; which will start our craps game */
function playCraps(){
    console.log("playCraps function called");

    /* first dice roll */
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);

    /* second dice roll */
    var die2 = rollDie();
    console.log("The first die roll is: " + die2);

    /* finding the sum of the rolls */
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is " + sum);

    /* show the results of the second die roll on the HTML page */
    outputRes("die1Res", " Die 1 is: " + die1);

    /* show the results of the second die roll on the HTML page */
    outputRes("die2Res", " Die 2 is: " + die2);

    /* show the sum of both dice on the HTML page */
    outputRes("sumRes", " The sum is: " + sum);

    /* the logic for if we won, lost, ot tied */
    if (sum == 7 || sum ==11){
        /* you lose */
        outputRes("crapsRes" , "You lose!");
    }
    /* if the dice equal each other, and they are even */
    else if(die1 == die2 && die2 % 2 == 0){
        /* you win */
        outputRes("crapsRes", " You win!");
    }
    /* the dice was a tie */
    else{
        outputRes("crapsRes", " You pushed (tied)! ");
    }

}

/* output our game results */
function outputRes(htmlElement, theText){
    /* use the html element to show the results */
    document.getElementById(htmlElement).innerHTML = theText; 



}
/* this function will generate a random number between 1 and 6 */
function rollDie(){
    /* get a random number between 0 and 1, multiply it by 6 */
    var die = 6 * Math.random();
    /* return die roll and make sure it's a whole number */
    return Math.ceil(die);
}