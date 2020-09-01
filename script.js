var body = document.body;

 var count = 61;
// var counter = setInterval(countdown, 1000);



document.getElementById("beginButton").addEventListener("click", function(){
    console.log("The event listener worked.");
    removeJumbotron();
    console.log("The Jumbotron should be removed");
    // var count = 61;
    var counter = setInterval(countdown, 1000);
    // document.getElementById("question-options").style.display = "block";
    document.getElementById("question-card").style.display = "block";
    
    
    // function countdown() {
    //     count = count - 1;
    //     if (count <= 0) {
    //         clearInterval(counter);
    //         return;
    //     }
//        document.getElementById("timer").innerHTML = count + " seconds";
//    }
       // countdown();
        console.log("The timer should be displayed");
  });

  var questionOne = [
        "Question One",
        "The question is on the motion",
        "Answer 1-A",
        "Answer 2-A",
        "Answer 3-A"
    ];
    


    // var questionDiv = document.getElementById("question-options");


    // for (var i = 0; i < questionOne.length; i++) {
    //     var newQuestionP = document.createElement("p");
    //     newQuestionP.textContent = questionOne[i];
    //     questionDiv.appendChild(newQuestionP);
    // }




//   var questionEl = document.getElementById("questionDiv");
//   questionEl.textContent = "Reserved for question";
//   var newDiv = document.createElement("div");
//   newDiv.textContent = "A pleasure to meet you!";
//   questionEl.appendChild(newDiv);
  

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



