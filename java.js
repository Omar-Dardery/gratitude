var assets = [
    "Do you have enough food for today?",
    "Do you have clean water?",
    "Can you afford your medical bills?",
    "Do you have a roof over your head?",
    "Can you afford college/school fees?",
    "Do you have a normal amount of chromosomes?",
    "Do you have friends (and you like them)?",
    "Do you have a significant other?",
    "Do you have many followers on social media?",
    "Do you have a sibling?",
    "Were your parents good to you and are dead?",
    "Were your parents good to you and are still alive?",
    "Do you like animals?"
];

var tasks = [
    [
        "Donate $0.5 worth of money in your currency to a charity that provides food.",
        "Prepare a meal for a homeless person",
        "Cook a meal/dessert for your family/friends"
    ], [
        "Donate $0.5 worth of money in your currency to a charity that provides clean water for people dirty areas"
    ], [
        "Donate $0.5 worth of money in your currency to a fundraiser for people who can not afford medical bills",
        "Donate $0.5 worth of money in your currency to a hospital"
    ], [
        "Donate $0.5 worth of money in your currency to a homeless shelter",
        "Give out a meal to a homeless person",
        "Give money to a homeless begger on the street"
    ], [
        "Donate $0.5 worth of money in your currency to a fundraiser for a student who can not afford education fees",
    ], [
        "Donate $0.5 worth of money in your currency to an orphanage for people with down syndrome"
    ], [
        "Text one of your friends something nice",
        "Make/buy a gift for one of your friends",
        "Invite one of your friend to a paid hangout"
    ], [
        "Compliment your significant other",
        "Make/buy a gift for your significant other",
        "Prepare a meal for them",
        "Plan a paid date"
    ], [
        "Share a fundraiser on your socials",
        "Speak up about a good cause"
    ], [
        "Spend quality time with your sibling",
        "Prepare a meal for your sibling",
        "Give your sibling a thoughtful gift"
    ], [
        "Donate $0.5 worth of money in your currency in your parents' name",
        "Post photo in your parent's memory"
    ], [
        "Thank your parents",
        "Donate $0.5 worth of money in your currency in your parents' name",
        "Prepare a meal for your parents",
        "Spend quality time with your parents"
    ], [
        "Donate money to an animal shelter",
        "Feed a stray animal"
    ]
];


var question = 0;
var task = 0;

function editQuestionAndTask(){
    question = Math.floor(Math.random() * assets.length);
    document.querySelector(".question").innerText = assets[question];
    task = Math.floor(Math.random() * tasks[question].length);
    document.querySelector(".task").innerText = tasks[question][task];
}

document.querySelector(".start").addEventListener("click", function (){
    document.querySelector(".question-task-container").classList.remove("hidden");
    editQuestionAndTask();
    document.querySelector(".start").classList.add("hidden");
});

document.querySelector(".yes").addEventListener("click", function (){
    document.querySelector(".question-container").classList.add("hidden");
    document.querySelector(".task-container").classList.remove("hidden");
    document.querySelector(".answer").classList.add("hidden");
    document.querySelector(".question").classList.add("hidden");
});

document.querySelector(".no").addEventListener("click", function (){
    editQuestionAndTask();
});
