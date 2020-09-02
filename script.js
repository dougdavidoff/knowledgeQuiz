var body = document.body;

var count = 126;

var cardContent = {
    Q1: {
        image: "./assets/images/globe.jpg",
        alt: "globe",
        hed: "Question One",
        ask: "Bridgeport, Conn., is located near the 41st parallel of north longitude. Which of these is not at 41 degrees north?",
        responses: {
            r1: ["1. Island of Sardinia, Italy", false],
            r2: ["2. Istanbul, Turkey", false],
            r3: ["3. Beijing, China", false],
            r4: ["4. Milwaukee, Wisconsin", true],
        }
        },
    Q2: {
        image: "./assets/images/usaMap.png",
        alt: "USA Map",
        hed: "Question Two",
        ask: "The United States has just one 'quadripoint,' where four states meet at a single point. One state below is not at the Four Corners. Which one?",
        responses: {
            r1: ["1. Nevada", true],
            r2: ["2. Arizona", false],
            r3: ["3. Utah", false],
            r4: ["4. New Mexico", true],
        }
        },
    Q3: {
        image: "./assets/images/NYmap.png",
        alt: "Map of N.Y. State",
        hed: "Question Three",
        ask: "New York State borders six U.S. states and two Canadian provinces. These include:",
        responses: {
            r1: ["1. Ohio", false],
            r2: ["2. Delaware", false],
            r3: ["3. Rhode Island", true],
            r4: ["4. New Hampshire", false],
            }
        },
    Q4: {
        image: "./assets/images/connMap.jpg",
        alt: "Map of Connecticut",
        hed: "Question Four",
        ask: "What in heck is the 'Connecticut Oblong?'",
        responses: {
            r1: ["1. Official name of the panhandle", false],
            r2: ["2. Land in New York once part of Connecticut", true],
            r3: ["3, The notch on the state's northern border", false],
            r4: ["4. Offcial name of New Haven Green", false],
            }
        },
    Q5: {
        image: "./assets/images/compassRose.png",
        alt: "Compass Rose",
        hed: "Question Five",
        ask: "What distinguishes Stamford, Connecticut?",
        responses: {
            r1: ["1. Most populous city in the state", false],
            r2: ["2. 3rd-largest financial center in Metro New York", false],
            r3: ["3. Whether you travel north, south, east, or west, you'll end up in New York State", true],
            r4: ["4. More land north of Merritt Parkway than south of the Merritt", false],
            }
        },    
    };


document.getElementById("beginButton").addEventListener("click", function(){
    removeJumbotron()

    var counter = setInterval(countdown, 1000);
    
    document.getElementById("timer-card").style.display = "block";
    document.getElementById("question-card").style.display = "block";
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

    




    var cardIcon = document.getElementById("card-image");
    cardIcon.setAttribute("src", cardContent.Q1.image);
    cardIcon.setAttribute("alt", cardContent.Q1.alt);

    var cardHed = document.getElementById("card-headline");
    cardHed.innerHTML = cardContent.Q1.hed;

    var cardQuest = document.getElementById("card-question");
    cardQuest.innerHTML = cardContent.Q1.ask;

    var cardAnsA = document.getElementById("card-answer-a");
    cardAnsA.innerHTML = cardContent.Q1.responses.r1[0];
    
    var cardAnsB = document.getElementById("card-answer-b");
    cardAnsB.innerHTML = cardContent.Q1.responses.r2[0];

    var cardAnsC = document.getElementById("card-answer-c");
    cardAnsC.innerHTML = cardContent.Q1.responses.r3[0];

    var cardAnsD = document.getElementById("card-answer-d");
    cardAnsD.innerHTML = cardContent.Q1.responses.r4[0];





    if(count < 101 && count >= 76) {

    var cardIcon = document.getElementById("card-image");
    cardIcon.setAttribute("src", cardContent.Q2.image);
    cardIcon.setAttribute("alt", cardContent.Q2.alt);

    var cardHed = document.getElementById("card-headline");
    cardHed.innerHTML = cardContent.Q2.hed;

    var cardQuest = document.getElementById("card-question");
    cardQuest.innerHTML = cardContent.Q2.ask;

    var cardAnsA = document.getElementById("card-answer-a");
    cardAnsA.innerHTML = cardContent.Q2.responses.r1[0];

    var cardAnsB = document.getElementById("card-answer-b");
    cardAnsB.innerHTML = cardContent.Q2.responses.r2[0];

    var cardAnsC = document.getElementById("card-answer-c");
    cardAnsC.innerHTML = cardContent.Q2.responses.r3[0];

    var cardAnsD = document.getElementById("card-answer-d");
    cardAnsD.innerHTML = cardContent.Q2.responses.r4[0];

    }


    if(count < 76 && count >= 51) {

        var cardIcon = document.getElementById("card-image");
        cardIcon.setAttribute("src", cardContent.Q3.image);
        cardIcon.setAttribute("alt", cardContent.Q3.alt);
    
        var cardHed = document.getElementById("card-headline");
        cardHed.innerHTML = cardContent.Q3.hed;
    
        var cardQuest = document.getElementById("card-question");
        cardQuest.innerHTML = cardContent.Q3.ask;
    
        var cardAnsA = document.getElementById("card-answer-a");
        cardAnsA.innerHTML = cardContent.Q3.responses.r1[0];
    
        var cardAnsB = document.getElementById("card-answer-b");
        cardAnsB.innerHTML = cardContent.Q3.responses.r2[0];
    
        var cardAnsC = document.getElementById("card-answer-c");
        cardAnsC.innerHTML = cardContent.Q3.responses.r3[0];
    
        var cardAnsD = document.getElementById("card-answer-d");
        cardAnsD.innerHTML = cardContent.Q3.responses.r4[0];

    }


        if(count < 51 && count >= 26) {

            var cardIcon = document.getElementById("card-image");
            cardIcon.setAttribute("src", cardContent.Q4.image);
            cardIcon.setAttribute("alt", cardContent.Q4.alt);
        
            var cardHed = document.getElementById("card-headline");
            cardHed.innerHTML = cardContent.Q4.hed;
        
            var cardQuest = document.getElementById("card-question");
            cardQuest.innerHTML = cardContent.Q4.ask;
        
            var cardAnsA = document.getElementById("card-answer-a");
            cardAnsA.innerHTML = cardContent.Q4.responses.r1[0];
        
            var cardAnsB = document.getElementById("card-answer-b");
            cardAnsB.innerHTML = cardContent.Q4.responses.r2[0];
        
            var cardAnsC = document.getElementById("card-answer-c");
            cardAnsC.innerHTML = cardContent.Q4.responses.r3[0];
        
            var cardAnsD = document.getElementById("card-answer-d");
            cardAnsD.innerHTML = cardContent.Q4.responses.r4[0];

        }


            if(count < 26 && count >= 0) {

                var cardIcon = document.getElementById("card-image");
                cardIcon.setAttribute("src", cardContent.Q5.image);
                cardIcon.setAttribute("alt", cardContent.Q5.alt);
            
                var cardHed = document.getElementById("card-headline");
                cardHed.innerHTML = cardContent.Q5.hed;
            
                var cardQuest = document.getElementById("card-question");
                cardQuest.innerHTML = cardContent.Q5.ask;
            
                var cardAnsA = document.getElementById("card-answer-a");
                cardAnsA.innerHTML = cardContent.Q5.responses.r1[0];
            
                var cardAnsB = document.getElementById("card-answer-b");
                cardAnsB.innerHTML = cardContent.Q5.responses.r2[0];
            
                var cardAnsC = document.getElementById("card-answer-c");
                cardAnsC.innerHTML = cardContent.Q5.responses.r3[0];
            
                var cardAnsD = document.getElementById("card-answer-d");
                cardAnsD.innerHTML = cardContent.Q5.responses.r4[0];

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