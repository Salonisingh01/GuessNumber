
//IIFE --- a JavaScript pattern where a function is defined and executed (invoked) immediately after it's created.
//   (function() {
//     ...
//   })
//used to create a private scope, isolating variables and preventing pollution of the global scope. 
(function() {        //An IIFE function we cam remove it & it will still work used for local variables

const userInput = document.querySelector('.user-input')  //User Input
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allguesses = document.querySelector('.all-guesses')
const submitButton = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game')


    let allguessesArray = []  //store all your guesses 
    
    let randomNumber = Math.round(Math.random()*100) //will give any random number upto 100
    console.log(randomNumber) //show the random number
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault()  //stop the page from refreshing
     const userInputValue = parseInt(userInput.value)  // get user input & convert into Integer value. 
    
        if(userInputValue === randomNumber){
            // console.log("correct answer")
            result.innerText = "Correct Answer !!" //show result on screen
            result.style.color = 'green'
            startGameBtn.disabled = false
            submitButton.disabled = true
        }
        else if( userInputValue > randomNumber){
            // console.log("Too high")
            result.innerText = "Too High !" //show result on screen
            result.style.color = 'red'
    
        }
        else{
            // console.log('Two low')
           result.innerText = "Too Low !"  //show result on screen
            result.style.color = 'red'
        }
        allguessesArray.push(userInputValue)  //Enter all the user entered inputs in array
        allguesses.innerText = 'Your Guesses :' + allguessesArray.join(', ')
        
        form.reset() //clear the user input in textbox after submitting
        // userInput.value = '' //clear the user input in textbox after submitting
    }) ;
    
    startGameBtn.addEventListener('click', () =>{
        startGameBtn.disabled = true
        submitButton.disabled = false
        result.innerText = ''
        allguesses.innerText = ''
        randomNumber = Math.round(Math.random()*100)
        allguessesArray = []
        console.log("restarted Number :", randomNumber)
    });

})(); //() to call the function 