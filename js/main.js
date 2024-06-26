const questions = [
    {
        questionNumber: "1",
        question: "Congrats! You finally graduated from grueling years of studying. You get a new job as soon as you graduate, so now you must find a new place to live. What excites you most about moving and settling into a new home?",
        image: "assets/story1.png",
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
        image: "assets/story2.png",
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
        question: "Starting anew in a chosen neighborhood presents its challenges, especially when adjusting to a fresh start. What would be your initial step in settling into your new home?",
        image: "assets/story3.png",
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
        image: "assets/story4.png",
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
        image: "assets/story5.png",
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
        image: "assets/story6.png",
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
        image: "assets/story7.png",
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
        question: "All done! Happily strolling down the parking lot with the furniture just bought. But... wait a minute, uh oh! Upon opening your car's trunk, you and your friend realize there's little space for all the furniture. What would be your immediate reaction?",
        image: "assets/story8.png",
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
        image: "assets/story9.png",
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
        image: "assets/story10.png",
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
        question: "You are in midst of assembling all of the furnitures, but... it seems like your console table was assembled incorrectly. You thought that you followed the instructions correctly, but it seems like you didn’t. How would you react?",
        image: "assets/story11.png",
        answers: {
            F: {
                text: "Oh no! What should I do? I spent hours and hours assembling this table, and now I have to start from zero.. again.",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Oh well, whatever. I'll pay attention to the instruction more and start assembling the table again.",
                scores: { F: 0, T: +1 },
            },
        },
        width: "q11"
    },
    {
        questionNumber: "12",
        question: "You are finally done after hours of assembling and decorating your new home! You want to show off all your hard work to your friends, but you are wondering how to show your new home to your friends.",
        image: "assets/story12.png",
        answers: {
            P: {
                text: "I bring out my phone to call a few friends to show them the newly decorated space.",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "I start thinking about the next few days on how to announce the new space to my friends.",
                scores: { P: 0, J: +1 },
            },
        },
        width: "q12"
    }
];

const resultOptions = {
    "INTJ": {
        chairName: "Aeron",
        percent: "2%",
        image: "assets/intj-aeron.png",
        ideal: {
            idealImg1: "assets/enfp-papasan.png",
            idealText1: "Papasan Chair",
            idealImg2: "assets/entp-panton.png",
            idealText2: "Panton Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/esfp-proust.png",
            notIdealText1: "Proust Chair",
            notIdealImg2: "assets/esfj-chaise.png",
            notIdealText2: "La Chaise"
        },
        strengths: {
            strengths1: "Analytical mindset",
            strengths2: "Innovative problem-solving",
            strengths3: "Strategic thinking"
        },
        weaknesses: {
            weak1: "May prioritize tasks over relationships",
            weak2: "Tendency to overthink decisions",
            weak3: "Reluctance towards spontaneity"
        },
        color: {
            full: "accent-purple",
            opacity: "opacity-purple",
            svg: "#5E3B71"
        }
    },
    "INTP": {
        chairName: "Red and Blue",
        percent: "3%",
        image: "assets/intp-redblue.png",
        ideal: {
            idealImg1: "assets/entj-hillhouse.png",
            idealText1: "Hill House Ladderback Chair",
            idealImg2: "assets/estj-eames.png",
            idealText2: "Eames Lounge Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/esfj-chaise.png",
            notIdealText1: "La Chaise",
            notIdealImg2: "assets/istp-wishbone.png",
            notIdealText2: "Wishbone Chair"
        },
        strengths: {
            strengths1: "Creative thinking",
            strengths2: "Abstract reasoning",
            strengths3: "Versatile problem-solving"
        },
        weaknesses: {
            weak1: "Difficulty with practical execution",
            weak2: "Tendency to overanalyze possibilities",
            weak3: "May appear distant due to abstraction"
        },
        color: {
            full: "accent-purple",
            opacity: "opacity-purple",
            svg: "#5E3B71"
        }
    },
    "ENTJ": {
        chairName: "Hill House Ladderback",
        percent: "2%",
        image: "assets/entj-hillhouse.png",
        ideal: {
            idealImg1: "assets/infp-bohemian.png",
            idealText1: "Hammock",
            idealImg2: "assets/intp-redblue.png",
            idealText2: "Red and Blue Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/isfp-sacco.png",
            notIdealText1: "Sacco Beanbag",
            notIdealImg2: "assets/isfj-ball.png",
            notIdealText2: "Ball Chair"
        },
        strengths: {
            strengths1: "Decisive leadership",
            strengths2: "Visionary thinking",
            strengths3: "Efficient execution"
        },
        weaknesses: {
            weak1: "Perceived as overly dominant",
            weak2: "May overlook small details",
            weak3: "Struggles with adapting to change"
        },
        color: {
            full: "accent-purple",
            opacity: "opacity-purple",
            svg: "#5E3B71"
        }
    },
    "ENTP": {
        chairName: "Panton",
        percent: "3%",
        image: "assets/entp-panton.png",
        ideal: {
            idealImg1: "assets/infj-bibendum.png",
            idealText1: "Bibendum Chair",
            idealImg2: "assets/intj-aeron.png",
            idealText2: "Aeron Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/isfj-ball.png",
            notIdealText1: "Ball Chair",
            notIdealImg2: "assets/isfp-sacco.png",
            notIdealText2: "Sacco Beanbag"
        },
        strengths: {
            strengths1: "Adaptability",
            strengths2: "Bold experimentation",
            strengths3: "Charismatic persuasion"
        },
        weaknesses: {
            weak1: "Lack of focus due to varied interests",
            weak2: "Impulsive decision-making",
            weak3: "Commitment issues"
        },
        color: {
            full: "accent-purple",
            opacity: "opacity-purple",
            svg: "#5E3B71"
        }
    },
    "INFJ": {
        chairName: "Bibendum",
        percent: "1%",
        image: "assets/infj-bibendum.png",
        ideal: {
            idealImg1: "assets/enfp-papasan.png",
            idealText1: "Papasan Chair",
            idealImg2: "assets/entp-panton.png",
            idealText2: "Panton Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/estp-westside.png",
            notIdealText1: "Westside Lounge Chair",
            notIdealImg2: "assets/isfj-ball.png",
            notIdealText2: "Ball Chair"
        },
        strengths: {
            strengths1: "Empathy and understanding",
            strengths2: "Aesthetic appreciation",
            strengths3: "Insight into human nature"
        },
        weaknesses: {
            weak1: "Tendency to prioritize harmony over logic",
            weak2: "Overly idealistic",
            weak3: "Difficulty asserting boundaries"
        },
        color: {
            full: "accent-green",
            opacity: "opacity-green",
            svg: "#34A475"
        }
    },
    "INFP": {
        chairName: "Hammock",
        percent: "5%",
        image: "assets/infp-bohemian.png",
        ideal: {
            idealImg1: "assets/enfj-barcelona.png",
            idealText1: "Barcelona Chair",
            idealImg2: "assets/entj-hillhouse.png",
            idealText2: "Hill House Ladderback Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/estj-eames.png",
            notIdealText1: "Eames Lounge Chair",
            notIdealImg2: "assets/estp-westside.png",
            notIdealText2: "Westside Lounge Chair"
        },
        strengths: {
            strengths1: "Creativity and imagination",
            strengths2: "Emotional depth",
            strengths3: "Empathy towards others"
        },
        weaknesses: {
            weak1: "Procrastination due to exploration",
            weak2: "Lack of structure in decision-making",
            weak3: "Challenges with follow-through"
        },
        color: {
            full: "accent-green",
            opacity: "opacity-green",
            svg: "#34A475"
        }
    },
    "ENFJ": {
        chairName: "Barcelona",
        percent: "3%",
        image: "assets/enfj-barcelona.png",
        ideal: {
            idealImg1: "assets/infp-bohemian.png",
            idealText1: "Hammock",
            idealImg2: "assets/isfp-sacco.png",
            idealText2: "Sacco Beanbag"
        },
        notIdeal: {
            notIdealImg1: "assets/istp-wishbone.png",
            notIdealText1: "Wishbone Chair",
            notIdealImg2: "assets/istj-stool60.png",
            notIdealText2: "Stool 60"
        },
        strengths: {
            strengths1: "Charismatic leadership",
            strengths2: "Empathy and compassion",
            strengths3: "Skill in consensus-building"
        },
        weaknesses: {
            weak1: "Overcommitment to others' needs",
            weak2: "Struggles with criticism",
            weak3: "Difficulty setting personal boundaries"
        },
        color: {
            full: "accent-green",
            opacity: "opacity-green",
            svg: "#34A475"
        }
    },
    "ENFP": {
        chairName: "Papasan",
        percent: "8%",
        image: "assets/enfp-papasan.png",
        ideal: {
            idealImg1: "assets/infj-bibendum.png",
            idealText1: "Bibendum Chair",
            idealImg2: "assets/intj-aeron.png",
            idealText2: "Aeron Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/istp-wishbone.png",
            notIdealText1: "Wishbone Chair",
            notIdealImg2: "assets/istj-stool60.png",
            notIdealText2: "Stool 60"
        },
        strengths: {
            strengths1: "Enthusiastic energy",
            strengths2: "Open-mindedness",
            strengths3: "Adaptability to change"
        },
        weaknesses: {
            weak1: "Overextending themselves",
            weak2: "Easily distracted by new ideas",
            weak3: "Follow-through difficulties"
        },
        color: {
            full: "accent-green",
            opacity: "opacity-green",
            svg: "#34A475"
        }
    },
    "ISTJ": {
        chairName: "Stool 60",
        percent: "14%",
        image: "assets/istj-stool60.png",
        ideal: {
            idealImg1: "assets/esfp-proust.png",
            idealText1: "Proust Chair",
            idealImg2: "assets/estp-westside.png",
            idealText2: "Westside Lounge Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/enfp-papasan.png",
            notIdealText1: "Papasan Chair",
            notIdealImg2: "assets/enfj-barcelona.png",
            notIdealText2: "Barcelona Chair"
        },
        strengths: {
            strengths1: "Reliability and dependability",
            strengths2: "Organizational skills",
            strengths3: "Attention to detail"
        },
        weaknesses: {
            weak1: "Resistance to change or innovation",
            weak2: "Rigid adherence to rules",
            weak3: "Difficulty adapting to new trends"
        },
        color: {
            full: "accent-blue",
            opacity: "opacity-blue",
            svg: "#4298B4"
        }
    },
    "ISFJ": {
        chairName: "Ball",
        percent: "14%",
        image: "assets/isfj-ball.png",
        ideal: {
            idealImg1: "assets/esfp-proust.png",
            idealText1: "Proust Chair",
            idealImg2: "assets/estp-westside.png",
            idealText2: "Westside Lounge Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/entp-panton.png",
            notIdealText1: "Panton Chair",
            notIdealImg2: "assets/entj-hillhouse.png",
            notIdealText2: "Hill House Ladderback Chair"
        },
        strengths: {
            strengths1: "Thoughtful consideration",
            strengths2: "Loyalty to traditions",
            strengths3: "Nurturing nature"
        },
        weaknesses: {
            weak1: "Struggles to assert personal preferences",
            weak2: "Overcommitment to others' needs",
            weak3: "Difficulty setting boundaries"
        },
        color: {
            full: "accent-blue",
            opacity: "opacity-blue",
            svg: "#4298B4"
        }
    },
    "ESTJ": {
        chairName: "Eames Lounge",
        percent: "9%",
        image: "assets/estj-eames.png",
        ideal: {
            idealImg1: "assets/intp-redblue.png",
            idealText1: "Red and Blue Chair",
            idealImg2: "assets/isfp-sacco.png",
            idealText2: "Sacco Beanbag"
        },
        notIdeal: {
            notIdealImg1: "assets/infj-bibendum.png",
            notIdealText1: "Bibendum Chair",
            notIdealImg2: "assets/infp-bohemian.png",
            notIdealText2: "Hammock"
        },
        strengths: {
            strengths1: "Strong leadership",
            strengths2: "Organizational prowess",
            strengths3: "Adherence to structure"
        },
        weaknesses: {
            weak1: "Prioritizing efficiency over flexibility",
            weak2: "Resistance to unconventional ideas",
            weak3: "Delegation challenges"
        },
        color: {
            full: "accent-blue",
            opacity: "opacity-blue",
            svg: "#4298B4"
        }
    },
    "ESFJ": {
        chairName: "La Chaise",
        percent: "12%",
        image: "assets/esfj-chaise.png",
        ideal: {
            idealImg1: "assets/isfp-sacco.png",
            idealText1: "Sacco Beanbag",
            idealImg2: "assets/istp-wishbone.png",
            idealText2: "Wishbone Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/intj-aeron.png",
            notIdealText1: "Aeron Chair",
            notIdealImg2: "assets/intp-redblue.png",
            notIdealText2: "Red and Blue Chair"
        },
        strengths: {
            strengths1: "Warmth and hospitality",
            strengths2: "Sensitivity to others' needs",
            strengths3: "Desire for harmony"
        },
        weaknesses: {
            weak1: "Avoidance of conflict",
            weak2: "Overinvestment in maintaining harmony",
            weak3: "Difficulty saying no"
        },
        color: {
            full: "accent-blue",
            opacity: "opacity-blue",
            svg: "#4298B4"
        }
    },
    "ISTP": {
        chairName: "Wishbone",
        percent: "5%",
        image: "assets/istp-wishbone.png",
        ideal: {
            idealImg1: "assets/esfj-chaise.png",
            idealText1: "La Chaise",
            idealImg2: "assets/estj-eames.png",
            idealText2: "Eames Lounge Chair"
        },
        notIdeal: {
            notIdealImg1: "assets/enfp-papasan.png",
            notIdealText1: "Papasan Chair",
            notIdealImg2: "assets/enfj-barcelona.png",
            notIdealText2: "Barcelona Chair"
        },
        strengths: {
            strengths1: "Analytical thinkers with creative solutions",
            strengths2: "Effective workers, thriving independently",
            strengths3: "Innovative problem-solvers, adaptable and versatile"
        },
        weaknesses: {
            weak1: "Limited emotional awareness, struggle with feelings",
            weak2: "Impatient with inefficiency, preferring efficiency",
            weak3: "Overemphasis on speculation and planning, delaying action"
        },
        color: {
            full: "accent-yellow",
            opacity: "opacity-yellow",
            svg: "#E4AE3A"
        }
    },
    "ISFP": {
        chairName: "Sacco",
        percent: "9%",
        image: "assets/isfp-sacco.png",
        ideal: {
            idealImg1: "assets/enfj-barcelona.png",
            idealText1: "Barcelona Chair",
            idealImg2: "assets/esfj-chaise.png",
            idealText2: "La Chaise"
        },
        notIdeal: {
            notIdealImg1: "assets/intj-aeron.png",
            notIdealText1: "Aeron Chair",
            notIdealImg2: "assets/estp-westside.png",
            notIdealText2: "Westside Lounge Chair"
        },
        strengths: {
            strengths1: "Practical problem-solving",
            strengths2: "Adaptability to various situations",
            strengths3: "Independent and reserved nature"
        },
        weaknesses: {
            weak1: "Tendency to withhold emotions",
            weak2: "Reluctance to express feelings",
            weak3: "Preference for solitude"
        },
        color: {
            full: "accent-yellow",
            opacity: "opacity-yellow",
            svg: "#E4AE3A"
        }
    },
    "ESTP": {
        chairName: "Westside Lounge",
        percent: "4%",
        image: "assets/estp-westside.png",
        ideal: {
            idealImg1: "assets/isfj-ball.png",
            idealText1: "Ball Chair",
            idealImg2: "assets/istj-stool60.png",
            idealText2: "Stool 60"
        },
        notIdeal: {
            notIdealImg1: "assets/infj-bibendum.png",
            notIdealText1: "Bibendum Chair",
            notIdealImg2: "assets/infp-bohemian.png",
            notIdealText2: "Hammock"
        },
        strengths: {
            strengths1: "Charismatic presence",
            strengths2: "Spontaneity and excitement",
            strengths3: "Ability to create a lively atmosphere"
        },
        weaknesses: {
            weak1: "Prioritizing fun over responsibility",
            weak2: "Impulsive decision-making",
            weak3: "Long-term planning difficulties"
        },
        color: {
            full: "accent-yellow",
            opacity: "opacity-yellow",
            svg: "#E4AE3A"
        }
    },
    "ESFP": {
        chairName: "Proust",
        percent: "8%",
        image: "assets/esfp-proust.png",
        ideal: {
            idealImg1: "assets/isfj-ball.png",
            idealText1: "Ball Chair",
            idealImg2: "assets/istj-stool60.png",
            idealText2: "Stool 60"
        },
        notIdeal: {
            notIdealImg1: "assets/intj-aeron.png",
            notIdealText1: "Aeron Chair",
            notIdealImg2: "assets/intp-redblue.png",
            notIdealText2: "Red and Blue Chair"
        },
        strengths: {
            strengths1: "Appreciation for luxury and extravagance",
            strengths2: "Expressive and dramatic personality",
            strengths3: "Ability to capture attention"
        },
        weaknesses: {
            weak1: "Prioritizing style over substance",
            weak2: "Criticism is challenging",
            weak3: "Impulsive spending"
        },
        color: {
            full: "accent-yellow",
            opacity: "opacity-yellow",
            svg: "#E4AE3A"
        }
    },
};





function displayQuestion() {
    const quizElement = document.getElementById("quiz");
    const question = questions[currentQuestion];

    if (question) {
        let html = `<img class = "img-question mb-48 mb-s-32" src = "${question.image}" alt = "Question ${currentQuestion + 1}">`;

        html += 
            `<div class = "col-2 col-2-s mb-48 mb-s-32">
                <p class = "col-l-60 story mb-s-48">${question.question}</p>
        
                <div class = "col-r-40 col-2-ans answer-options">
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


function showResult() {

    // Getting the specific html elements
    const resultElement = document.getElementById("result");
    const resultContent = document.querySelector(".result-content");

    const resPath = document.getElementById("path");
    const resOpacity = document.getElementById("opacity");
    const resBkgdImg = document.getElementById("background-img");

    const resTitle = document.getElementById("result-title");
    const resPercentage = document.getElementById("results-percentage");
    const resPercent = document.getElementById("percentage");

    const resImg = document.getElementById("img-save");
    // const resImg = document.getElementById("result-image");

    // Card 2, Ideal Match
    const resIconHappy = document.getElementById("icon-happy");
    const resIdeal = document.getElementById("results-ideal");
    const resIdealImg1 = document.getElementById("results-ideal-img1");
    const resIdealText1 = document.getElementById("results-ideal-text1");
    const resIdealImg2 = document.getElementById("results-ideal-img2");
    const resIdealText2 = document.getElementById("results-ideal-text2");

    // Card 3, Not Ideal Match
    const resIconUnhappy = document.getElementById("icon-unhappy");
    const resNotIdeal = document.getElementById("results-not-ideal");
    const resNotIdealImg1 = document.getElementById("results-not-ideal-img1");
    const resNotIdealText1 = document.getElementById("results-not-ideal-text1");
    const resNotIdealImg2 = document.getElementById("results-not-ideal-img2");
    const resNotIdealText2 = document.getElementById("results-not-ideal-text2");

    // Card 4, Strength
    const resStrength = document.getElementById("results-strength");
    const resStrength1 = document.getElementById("res-strength-li1");
    const resStrength2 = document.getElementById("res-strength-li2");
    const resStrength3 = document.getElementById("res-strength-li3");

    // Card 5, Weaknesses
    const resWeak = document.getElementById("results-weak");
    const resWeak1 = document.getElementById("res-weak-li1");
    const resWeak2 = document.getElementById("res-weak-li2");
    const resWeak3 = document.getElementById("res-weak-li3");

    // Credits
    const resCredits = document.getElementById("credits");
    
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


    // let groupPurple = [];
    // let groupGreen = [];
    // let groupBlue = [];
    // let groupYellow = [];

    // Object.keys(resultOptions).forEach(key => {
    //     const entry = resultOptions[key];
    //     if (groupPurple.length < 4) {
    //         groupPurple.push(entry);
    //     } else if (groupGreen.length < 4) {
    //         groupGreen.push(entry);
    //     } else if (groupBlue.length < 4) {
    //         groupBlue.push(entry);
    //     } else {
    //         groupYellow.push(entry);
    //     }
    // });

    // console.log("Group Purple:", groupPurple);
    // console.log("Group Green:", groupGreen);
    // console.log("Group Blue:", groupBlue);
    // console.log("Group Yellow:", groupYellow);

    //show result

    


    const res = resultOptions[result];
    console.log(res.image);
    if (res) {
        resultContent.innerHTML = `
        `;

        // Results background
        
        resPath.style.fill = res.color.svg;
        console.log(res.color.svg);

        

        resOpacity.classList.add(res.color.opacity);
        console.log(res.color.opacity);
        console.log(resOpacity.classList.add(res.color.opacity));

        let bkgdURL = 'url(\"../../chairacter/' + res.image + '\")';
        //            'url(\"../../chairacter/' + res.image + '\")';
        // let bkgdURL = "url(\"../../chairacter/" + res.image + '\")"';
        // ../../chairacter/assets/infj-bibendum.png
        console.log(bkgdURL);

        resBkgdImg.style.backgroundImage = bkgdURL;
        console.log(resBkgdImg.style.backgroundImage);

        // Results Card 1, dynamically populate title, percentage, and image
        resTitle.textContent = res.chairName;
        resTitle.classList.add(res.color.full);

        resPercentage.classList.add(res.color.full);
        resPercent.textContent = res.percent;

        resImg.src = res.image;
        resImg.alt = `Flat lay illustration of ${res.chairName} chair in home environment`;

        // Results Card 2, Ideal match
        resIconHappy.classList.add(res.color.full);
        resIdeal.classList.add(res.color.full);
        resIdealImg1.src = res.ideal.idealImg1;
        resIdealText1.textContent = res.ideal.idealText1;
        resIdealImg2.src = res.ideal.idealImg2;
        resIdealText2.textContent = res.ideal.idealText2;

        // Results Card 3, Not Ideal match
        resIconUnhappy.classList.add(res.color.full);
        resNotIdeal.classList.add(res.color.full);
        resNotIdealImg1.src = res.notIdeal.notIdealImg1;
        resNotIdealText1.textContent = res.notIdeal.notIdealText1;
        resNotIdealImg2.src = res.notIdeal.notIdealImg2;
        resNotIdealText2.textContent = res.notIdeal.notIdealText2;

        // Results Card 4, Strength
        resStrength.classList.add(res.color.full);
        resStrength1.textContent = res.strengths.strengths1;
        resStrength2.textContent = res.strengths.strengths2;
        resStrength3.textContent = res.strengths.strengths3;

        // Results Card 4, Weaknesses
        resWeak.classList.add(res.color.full);
        resWeak1.textContent = res.weaknesses.weak1;
        resWeak2.textContent = res.weaknesses.weak2;
        resWeak3.textContent = res.weaknesses.weak3;

        resCredits.classList.add(res.color.full);

    } else {
        console.log("Something went wrong if you see this");
    }

    document.getElementById('button-save').addEventListener('click', function() {
        let img = document.getElementById('img-save');
        console.log("img: " + img);
        let url = img.src;
        console.log("url: " + url);

        let a = document.createElement('a');
        a.href = url;
        a.download = res.image;
        console.log("res.image: " + res.image);
        a.click();
    });


    document.getElementById("quiz").style.display = "none"; // Hide the quiz
    document.getElementById("result").style.display = "block"; // Show the result
    document.getElementById("restart-button").style.display = "block"; // Show the restart button
}

// function saveImage() {
//     const res = resultOptions[result];
//     let img = document.getElementById('img-save');
//     let url = img.src;

//     let a = document.createElement('a');
//     a.href = url;
//     a.download = res.image; // specify the filename you want here
//     a.click();
// }



// Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById("restart-button").addEventListener("click", restartQuiz);

displayQuestion();