# Web APIs: JavaScript Code Quiz

## Link
https://connor-kfitz.github.io/green-dog/

## Description

The purpose of this project is to create a timed Javascript quiz powered by HTML, CSS, and JavaScript.  The quiz will feature a start page, question pages, and an end page which displays highscores.  The user's score will be based on the remaining time when they complete the quiz.  Selecting a wrong answer will result in a time deduction, but will take you to the next question.  The timer will be displayed at every feature page and will update based on the user's inputs.

## Steps Taken

1.  Created HTML body for the project, using divs to create a start page, question pages, and end page.  Supplemented each page with header tags, list elements, and button elemnts.

2.  Created JavaScript variables to link HTML elements to script.js, along with some logic and value varibales.

3.  Created listeners for all buttons to take user to the next page by changing the display type for those elements.  Added a for loop to check if the user inputed the correct answer.

4.  Added a timer function to keep track of the users score and inputs.  If statments in the timer are evaluated for wrong answers, if the quiz has ended, and if the timer has reached zero or below.

5.  Added a highscore board on the end page.  Utilized a listener and textarea to save the users initals and score, to reference them against existing scores.

6.  Added some minor CSS styling to the text and question boxes.

## Pictures of Website
### Start Page
![Picture of JavaScript Code Quiz](./Assets/Images/JavaScript-Quiz-Start-Page.png)
### Question Page
![Picture of JavaScript Code Quiz](./Assets/Images/JavaScript-Quiz-Question-Page.png)
### End Page
![Picture of JavaScript Code Quiz](./Assets/Images/JavaScript-Quiz-End-Page.png)