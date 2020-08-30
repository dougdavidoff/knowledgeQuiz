var body = document.body;

var count = 61;
var counter = setInterval(countdown, 1000);



document.getElementById("beginButton").addEventListener("click", function(){
    console.log("The event listener worked.");
    removeJumbotron();
    console.log("The Jumbotron should be removed");
    // function countdown() {
    //     count = count - 1;
    //     if (count <= 0) {
    //         clearInterval(counter);
    //         return;
    //     }
//        document.getElementById("timer").innerHTML = count + " seconds";
//    }
        countdown();
        console.log("The timer should be displayed");
  });

  var questionEl = document.createElement("p");
  questionEl.textContent = "Reserved for question";
  body.appendChild(questionEl);
  questionEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");


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



