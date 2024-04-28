const questions = [
    {
        questionNumber: "1",
        question: "Congrats! You finally graduated from grueling years of studying. You get a new job as soon as you graduate, so now you must find a new place to live. What excites you most about moving and settling into a new home?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            I: {
                text: "Settling into your new space and making it feel cozy and familiar",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Exploring the neighborhood and meeting new people",
                scores: { E: +1, I: 0 },
            },
        },
        width: "q1"
    },
    {
        questionNumber: "2",
        question: "Freshly graduated and eager for a new beginning, you decide to settle into an unfamiliar town, viewing it as a blank canvas for your future. In what kind of neighborhood do you imagine yourself living in?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            I: {
                text: "You decide to move into a quaint neighborhood right outside the city",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "You decide to rent an apartment within the bustling city to be closer to your friends",
                scores: { E: +1, I: 0 },
            },
        },
        width: "q2"
    },
    {
        questionNumber: "3",
        question: "After choosing a neighborhood to live in, you settle into the rhythm of your new life as you unpack your luggage in your new home. But starting from zero can be really hard, especially when it comes to trying to make yourself feel like you belong in your own home. What would be your first step to getting started with settling in your new home?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            N: {
                text: "You look at your Pinterest board filled with collected inspiration over the years and become hopeful to make your dream space",
                scores: { N: +1, S: 0 },
            },
            S: {
                text: "You look at your remaining budget to see how much you have to spend decorating",
                scores: { N: 0, S: +1 },
            },
        },
        width: "q3"
    },
    {
        questionNumber: "4",
        question: "All set, good to go.  Everything is planned out, so now you need to think about what store you will visit with your friend. You and your friend are deciding what kind of furniture store to go to.",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            J: {
                text: "Go to IKEA where it has selections of all kinds of furnitures to make it easy for you to select furnitures based off of your need-to-buy list",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "Visit local furniture store where it is filled with mystery and unexpected moments of discoveries for new kinds of furnitures that you have never encountered before!",
                scores: { P: +1, J: 0 },
            },
        },
        width: "q4"
    },
    {
        questionNumber: "5",
        question: "Now, you have decided to look at furniture at the store with a friend to see what selections are available to find the furniture that would help you define your home. In what way do you imagine yourself roaming around the store?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            N: {
                text: "You and your friend take a look round at every section of the store just in case you find something that gives you joy",
                scores: { N: +1, S: 0 },
            },
            S: {
                text: "You prepared a list ahead of time and are sticking to it to make your shopping experience more efficient!",
                scores: { N: 0, S: +1 },
            },
        },
        width: "q5"
    },
    {
        questionNumber: "6",
        question: "Oooh! While looking around the store, you discover a chair that would fit your bedroom well. You check the price tag and notice that it's beyond your budget. What would you do?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            N: {
                text: "It is something I'll keep forever, and I really like it so it is okay if it is out of budget.",
                scores: { S: 0, N: +1 },
            },
            S: {
                text: "I'll leave it behind reluctantly, hoping that it'll be discounted in the future.",
                scores: { S: +1, N: 0 },
            },
        },
        width: "q6"
    },
    {
        questionNumber: "7",
        question: "Now that you have finished selecting what to purchase, you have decided to go to the checkout line. As soon as you arrive at the checkout area, you notice the line is long. What would you do?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            J: {
                text: "Patiently wait in line, using the time to check your phone, chat with nearby shoppers, or browse items nearby",
                scores: { J: +1, P: 0 }
            },
            P: {
                text: "Consider switching to a self-checkout or express lane, or even abandon your cart and come back later to avoid the wait",
                scores: { J: 0, P: +1 },
            },
        },
        width: "q7"
    },
    {
        questionNumber: "8",
        question: "All done! You are happy with your purchase; now you are strolling down the parking lot to your car, discussing how to decorate your new home with the furniture you bought. But... wait a minute, uh oh! As soon as you open your car's trunk, you and your friend realize that there is so little space for all of the furniture to fit in. How would you fit all the furniture that you just bought?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            F: {
                text: "It is okay! We just need to take a big breather and I'm sure we'll figure out the problem!",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Let's start with put all the bulky and heavy items first and see how we can Tetris the rest in.",
                scores: { F: 0, T: +1 },
            },
        },
        width: "q8"
    },
    {
        questionNumber: "9",
        question: "After somehow fitting everything into the car, you arrive home safely. You are a little tired and wondering whether to call it a day or start organizing all the furniture you just bought today.",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            F: {
                text: "I still have time tomorrow to decorate, so I should start today in order to spread out the workload.",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "I want to take a break! I can always figure it out later, and I want to thank my friend for helping me.",
                scores: { F: 0, T: +1 },
            },
        },
        width: "q9"
    },
    {
        questionNumber: "10",
        question: "Now that you have all the furniture organized and set, you start working on assembling some of your furniture, starting with the chair. In this kind of situation, what kind of atmosphere do you prefer?",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            I: {
                text: "Prefer working alone, finding solace in the quiet and focusing solely on the task at hand",
                scores: { I: +1, E: 0 },
            },
            E: {
                text: "Enjoy having company and possibly seeking assistance from roommate, viewing the task as an opportunity to bond and collaborate with others",
                scores: { I: 0, E: +1 },
            },
        },
        width: "q10"
    },
    {
        questionNumber: "11",
        question: "You are finally done after hours of assembling and decorating your new home! You want to show off all your hard work to your friends, but you are wondering how to show your new home to your friends.",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            F: {
                text: "I bring out your phone to call a few friends to show them the newly decorated space.",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "I start thinking about the next few days on how to announce the new space to my friends.",
                scores: { F: 0, T: +1 },
            },
        },
        width: "q11"
    },
    {
        questionNumber: "12",
        question: "You are so excited about using your new chair for work tomorrow. Your co-worker noticed you got a new chair: \"Omg is that a new chair?\"",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        answers: {
            P: {
                text: "\"I am thrilled about the chair, and I think it is going to make a big difference in my comfort while working.\"",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "\"Yes, I just received it yesterday, and it's advertised as ergonomic and designed for long hours of work. However, I need time to see if it actually performs as advertised.\"",
                scores: { P: 0, J: +1 },
            },
        },
        width: "q12"
    }
];

const resultOptions = {
    "ISTJ": {
        image: "https://reallywellmade.com/cdn/shop/products/stool60_scene_10_1024x1024.jpg?v=1698072577",
    },
    "ISFJ": {
        image: "assets/isfj-ball.png"
    },
    "INFJ": {
        image: "assets/infj-bibendum.png"
    },
    "INTJ": {
        image: "assets/intj-aeron.png"
    },
    "ISTP": {
        image: "https://hivemodern.com/public_resources/ch24-wishbone-chair-wood-hans-wegner-carl-hansen-and-son-168613497e.jpg"
    },
    "ISFP": {
        image: "https://www.zanotta.com/ContentsFiles/Sacco_280_24IG01-Vip27527_2.jpg"
    },
    "INFP": {
        image: "https://www.vivaterra.com/images/V5519_VTSU21-007-JH2757x1200.jpg?format=1200Wx1200H"
    },
    "INTP": {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2j94aVeIhruaqHWxhMPeJX9vQXOoSx6k2oZ2yDcD7tg&s"
    },
    "ESTP": {
        image: "https://i.pinimg.com/736x/91/57/85/9157855872ffe167d1d19f410ff74a33.jpg"
    },
    "ESFP": {
        image: "https://www.sag80.com/App_Files/News/0096/Gallery/big-01-1.jpg"
    },
    "ENFP": {
        image: "https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwe28f8758/images/44E59873_2.jpg?sw=767&sh=767&sm=fit"
    },
    "ENTP": {
        image: "https://media.fds.fi/decor_image/800/5920116_Panton-Chair-Flower-Table_master.jpg"
    },
    "ESTJ": {
        image: "https://www.einrichten-design.com/thumbnail/1b/20/5d/1597944506/Vitra%20Eames%20Lounge%20Chair%20und%20Ottoman06e69_1920x1920.jpg"
    },
    "ESFJ": {
        image: "https://www.eamesoffice.com/wp-content/uploads/2022/03/53724340.jpg"
    },
    "ENFJ": {
        image: "assets/enfj-barcelona.png"
    },
    "ENTJ": {
        image: "https://cdn20.pamono.com/p/g/1/3/1360752_fwogbluhc6/292-hill-house-chair-by-charles-rennie-mackintosh-for-cassina-3.jpg"
    },

};





function displayQuestion() {
    const quizElement = document.getElementById("quiz");
    const question = questions[currentQuestion];

    if (question) {
        let html = `<img class = "img-question mb-48" src = "${question.image}" alt = "Question ${currentQuestion + 1}">`;

        html += 
            `<div class = "col-2 mb-48">
                <p class = "col-l-60 story">${question.question}</p>
        
                <div class = "col-r-40 answer-options">
                    ${Object.keys(question.answers).map(answerKey => `
                        <div class = "answer btn-shadow mb-24">
                            <button class="btn-foreground" value="${answerKey}" id="${answerKey}">${question.answers[answerKey].text}</button>
                        </div>
                    `).join("")}
                </div>
            </div>`;
        
        html +=
            `<div class="col-2">
                <div class="col-l-90">
                    <div class = "progress-bar-outside" id = "outside-bar">
                        <div class = "progress-bar-inside ${question.width}" id = "inside-bar">.</div>
                    </div>
                </div>
                <p class = "col-r-10 question-number">${question.questionNumber}/12</p>
            </div>`;
        
        quizElement.innerHTML = html;
        console.log(html);
        console.log("if question inside");
        attachButtonClickHandlers();
    } else {
        console.log("something went wrong if you see this");
    }
}


document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll(".answer");
    choiceButtons.forEach((button) => {
        button.addEventListener("click", handleAnswer);
    });
    console.log("button clicked?")
}



//answers
function handleAnswer(event) {
    // progressBarIncrease();
    
    const selectedOption = event.target;
    console.log("selectedOption:")
    console.log(selectedOption);
    const answerKey = selectedOption.value;
    console.log("answerKey:")
    console.log(answerKey);
    const question = questions[currentQuestion];
    console.log("question:")
    console.log(question);
    const answer = question.answers[answerKey];
    console.log("answer:")
    console.log(answer);

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}


// function progressBarIncrease() {
//     let outsideProgress = document.querySelector("#outside-bar");
//     let insideProgress = document.querySelector("#inside-bar");

//     let outsideWidth = window.getComputedStyle(outsideProgress).getPropertyValue("width");
//     let insideWidth = window.getComputedStyle(insideProgress).getPropertyValue("width");

//     // let outsideWidth = document.getElementById("outside-bar").clientWidth;
//     // let insideWidth = document.getElementById("inside-bar").clientWidth;
//     console.log("Outside Width: " + outsideWidth);
//     console.log("Inside Width: " + insideWidth);

//     if (insideWidth < outsideWidth) {
//         let percent = outsideWidth / 12;
//         insideWidth += percent;
//     }

//     // document.getElementById("bar").style.width = insideWidth + "px";
//     insideProgress.style.width = insideWidth + "px";
//     console.log("Inside Width: " + insideWidth);
// }


function showResult() {
    const resultElement = document.getElementById("result");
    const resultTextContainer = document.querySelector(".result-text");
    const resultImage = document.getElementById("result-image");
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split("");
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join("");

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        // resultImage.src = "images/"+personalityData.image;
        resultImage.src = personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {
        console.log("Something went wrong if you see this");
    }

    document.getElementById("quiz").style.display = "none"; // Hide the quiz
    document.getElementById("result").style.display = "block"; // Show the result
    document.getElementById("restart-button").style.display = "block"; // Show the restart button
}

let saveButton = document.getElementById('btn-download');
saveButton.addEventListener('click', function (e) {
    let dataURL = canvas.toDataURL('');
    saveButton.href = dataURL;
});



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById("restart-button").addEventListener("click", restartQuiz);

displayQuestion();