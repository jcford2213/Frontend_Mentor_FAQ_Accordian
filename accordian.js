/*
FAQ Accordian JavaScript
Frontend Mentor
Authored by Jackson Crantford
5/28/2021
*/

// This script inflates dropdown elements when a another specific element is clicked

//  || Define global variables
const arrows = document.querySelectorAll(".down_arrows");
const questions = document.querySelectorAll(".question_text");
const answers = document.querySelectorAll(".answer_text");

let inflatedIndex = null;


//  || Function inflates answer tab in FAQ
//      and styles elements in the corresponding tab
function showAnswer(i) {
    resetStyles(inflatedIndex);
    questions[i].style.color = "hsl(238, 29%, 16%)";  // Very dark desaturated blue
    questions[i].style.fontWeight = "700";
    answers[i].style.display = "block";
    arrows[i].style.transform = "rotate(180deg)"; // Rotate arrow to 180 degrees
    inflatedIndex = i;
    console.log("---Answer element index " + i + " INFLATED---");
}


//  || Function collapses answer tab in FAQ
//      and styles elements in the corresponding tab
function hideAnswer(i) {
    questions[i].style.color = "hsl(240, 6%, 50%)";  // Dark grayish blue
    questions[i].style.fontWeight = "400";
    answers[i].style.display = "none";
    arrows[i].style.transform = "rotate(0deg)";  // Rotate back to 0 degrees
    inflatedIndex = null;
    console.log("---Answer element index " + i + " COLLAPSED---")
}


// || Function collapses any answer tabs that have been inflated
//      Makes sure only one answer tab can inflate at a time
function resetStyles(i) {
    if (i != null) {
        questions[i].style.color = "hsl(240, 6%, 50%)";  // Dark grayish blue
        questions[i].style.fontWeight = "400";
        answers[i].style.display = "none";
        arrows[i].style.transform = "rotate(0deg)";  // Rotate back to 0 degrees
        console.log("---Answer element index " + i + " COLLAPSED---")
    }
}


//  || Adds click event listener to each arrow icon.
//      Callback either inflates answer tab or collapses it.
arrows.forEach((element, index) => {
    console.log("|||Iterating through element list||| Index is " + index);
    element.addEventListener("click", function() {
        if (inflatedIndex == index) {
            hideAnswer(index);
        } else {
            showAnswer(index);
        }
    });
});