var body = document.body;

 var count = 61;




document.getElementById("beginButton").addEventListener("click", function(){
    console.log("The event listener worked.");
    removeJumbotron();
    console.log("The Jumbotron should be removed");
    var counter = setInterval(countdown, 1000);
    document.getElementById("timer-card").style.display = "block";

    document.getElementById("question-card").style.display = "block";
    
    var cardIcon = document.getElementById("card-image");
    cardIcon.setAttribute("src", "./assets/images/globe.jpg");
    cardIcon.setAttribute("alt", "globe");

    var cardHed = document.getElementById("card-headline");
    cardHed.innerHTML = "Question 1";

    var cardQuest = document.getElementById("card-question");
    cardQuest.innerHTML = "The question is on the motion."

    var cardAnsA = document.getElementById("card-answer-a");
    cardAnsA.innerHTML = "Aye";

    var cardAnsB = document.getElementById("card-answer-b");
    cardAnsB.innerHTML = "Nay";

    var cardAnsC = document.getElementById("card-answer-c");
    cardAnsC.innerHTML = "Abstain";

    // if(count <= 50) {
    //     document.getElementById("card-answer-c").innerHTML = "New text";
    //     }


    // document.getElementById("card-answer-c").innerHTML = "New text";

    // clearCard();

    

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
   // }
//}







    
   

    
    
        console.log("The timer should be displayed");
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

    if(count <= 50) {
        document.getElementById("card-answer-c").innerHTML = " ";
        }

}

function clearCard() {
    if (count <=50) {
        document.getElementById("card-answer-c").innerHTML = "New text";
        console.log("Answer C should be changed");
    }
}