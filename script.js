var body = document.body;

var count = 61;

document.getElementById("beginButton").addEventListener("click", function(){
    removeJumbotron()

    var counter = setInterval(countdown, 1000);
    
    document.getElementById("timer-card").style.display = "block";
    document.getElementById("question-card").style.display = "block";
    
    var cardIcon = document.getElementById("card-image");
    cardIcon.setAttribute("src", "./assets/images/globe.jpg");
    cardIcon.setAttribute("alt", "globe");

    var cardHed = document.getElementById("card-headline");
    cardHed.innerHTML = "Question 1";

    var cardQuest = document.getElementById("card-question");
    cardQuest.innerHTML = "The question is on the motion.";

    var cardAnsA = document.getElementById("card-answer-a");
    cardAnsA.innerHTML = "Aye";

    var cardAnsB = document.getElementById("card-answer-b");
    cardAnsB.innerHTML = "Nay";

    var cardAnsC = document.getElementById("card-answer-c");
    cardAnsC.innerHTML = "Abstain";

  });



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

    if(count < 55 && count > 45) {
        var cardIcon = document.getElementById("card-image");
        cardIcon.setAttribute("src", "./assets/images/usaMap.png");
        cardIcon.setAttribute("alt", "USA map");

        var cardHed = document.getElementById("card-headline");
        cardHed.innerHTML = "Question 2";
    
        var cardQuest = document.getElementById("card-question");
        cardQuest.innerHTML = "To be or not to be";
        
        document.getElementById("card-answer-a").innerHTML = "It's a question";
    
        document.getElementById("card-answer-b").innerHTML = "A noble mind";
        
        document.getElementById("card-answer-c").innerHTML = "Slings and arrows";
    }

    if(count <= 45) {
        var cardIcon = document.getElementById("card-image");
        cardIcon.setAttribute("src", "./assets/images/NYmap.png");
        cardIcon.setAttribute("alt", "New York State map");

        var cardHed = document.getElementById("card-headline");
        cardHed.innerHTML = "Question 3";
    
        var cardQuest = document.getElementById("card-question");
        cardQuest.innerHTML = "This state borders New York";
    
        document.getElementById("card-answer-a").innerHTML = "Ohio";
    
        document.getElementById("card-answer-b").innerHTML = "Delaware";

        document.getElementById("card-answer-c").innerHTML = "Rhode Island";
    }
}



         
// You have an array of questions
    // You need to loop through those questions
    // You want to create a card based on the question
    //h5 hed to display question
    // At each index, the questions will have an array of 4 possibilities that need to be appended to the ul or div
            //ypou need to loop through that
            //at each step you want to create a button that on click will check if it's true, add or subtract from the counter and advance to the next index of the questions array

//for(let i = blah blah blah){
   // questionArray loop
   //make the card
   //when you get to the questions part
   //loop through possibilities
   // get the parent list
   // for(let j = blah blah blah) {
       //create button
       //add onclick

       // append child to parent list
