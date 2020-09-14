var body = document.body;

var count = 126;

var questNum = 0;

var cardContent = [
        
    ["./assets/images/globe.jpg", "./assets/images/usaMap.png", "./assets/images/NYmap.png","./assets/images/connMap.jpg", "./assets/images/compassRose.png"],
    
    ["globe", "USA Map", "Map of N.Y. State", "Map of Connecticut", "Compass Rose"],
    
    ["Question One",  "Question Two", "Question Three", "Question Four", "Question Five"],
    
    ["Bridgeport, Conn., is located near the 41st parallel of north longitude. Which of these is not at 41 degrees north?", "The United States has just one 'quadripoint,' where four states meet at a single point. One state below is not at the Four Corners. Which one?", "New York State borders six U.S. states and two Canadian provinces. These include:", "What in heck is the 'Connecticut Oblong?'", "What distinguishes Stamford, Connecticut?"],

    ["A. Island of Sardinia, Italy", "A. Nevada", "A. Ohio", "A. Official name of the panhandle", "A. Most populous city in the state"],
    
    ["B . Istanbul, Turkey", "B. Arizona", "B. Delaware", "B. A piece of New York State", "B. 3rd-largest financial center in Metro New York"],
    
    ["C. Beijing, China", "C. Utah", "C. Rhode Island", "C. The notch on the state's northern border", "C. Whether you travel north, south, east, or west, you'll end up in New York State"],
    
    ["D. Milwaukee, Wisconsin", "D. New Mexico", "D. New Hampshire", "D. Offcial name of New Haven Green", "D. More land north of Merritt Parkway than south of the Merritt"],
    
    [4, 1, 3, 2, 3],    
    
];

// begin game by removing Jumbotron and adding the question card and timer
document.getElementById("beginButton").addEventListener("click", function(){
    removeJumbotron();
    var counter = setInterval(countdown, 1000);
    document.getElementById("timer-card").style.display = "block";
    document.getElementById("question-card").style.display = "block";
    var questCard = document.getElementById("question-card");
    askQuestions();


function askQuestions() {

    
    
    while (questNum < 4) {
    
        var cardIcon = document.getElementById("card-image");
        cardIcon.setAttribute("src", cardContent[0][questNum]);
        cardIcon.setAttribute("alt", cardContent[1][questNum]);
    
        var cardHed = document.getElementById("card-headline");
        cardHed.innerHTML = cardContent[2][questNum];
    
        var cardQuest = document.getElementById("card-question");
        cardQuest.innerHTML = cardContent[3][questNum];
    
        var cardAnsA = document.getElementById("card-answer-a");
        cardAnsA.innerHTML = cardContent[4][questNum];
    
        var cardAnsB = document.getElementById("card-answer-b");
        cardAnsB.innerHTML = cardContent[5][questNum];
    
        var cardAnsC = document.getElementById("card-answer-c");
        cardAnsC.innerHTML = cardContent[6][questNum];
    
        var cardAnsD = document.getElementById("card-answer-d");
        cardAnsD.innerHTML = cardContent[7][questNum];
    
        var theAnswer = cardContent[8][questNum];
    
        var response = "";
    
        document.getElementById("ButtonA").addEventListener("click", function() {
            response = 1;
            if (response === theAnswer) {
                alert("Answer A is correct.");
            } else {
                alert("Answer A is wrong.");
            }
        });
        document.getElementById("ButtonB").addEventListener("click", function() {
            response = 2;
            if (response === theAnswer) {
                alert("Answer B is correct.");
            } else {
                alert("Answer B is wrong.");
            }
        });  
        document.getElementById("ButtonC").addEventListener("click", function() {
            response = 3;
            if (response === theAnswer) {
                alert("Answer C is correct.");
            } else {
                alert("Answer C is wrong.");
            }
        });
        document.getElementById("ButtonD").addEventListener("click", function() {
            response = 4;
            if (response === theAnswer) {
                alert("Answer D is correct.");
            } else {
                alert("Answer D is wrong.");
            }
        }); 
        questNum++;
    }
}

function removeJumbotron() {
    var myobj = document.getElementById("intro");
    myobj.remove();
}

function countdown() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML = count + " seconds";
}
});


// turn object into array
// use a variable to store which question we're on (questNum)
// when done with the question, go to the next question

// You have an array of questions
    // You want to create a card based on the question
    //h5 hed to display question
    // At each index, the questions will have an array of 4 possibilities that need to be appended to the ul or div
            //ypou need to loop through that
            //at each step you want to create a button that on click will check if it's true, add or subtract from the counter and advance to the next index of the questions array

   // questionArray loop
   //make the card
   //when you get to the questions part
   //loop through possibilities
   // get the parent list
   // for(let j = blah blah blah) {
       //create button
       //add onclick

       // append child to parent list