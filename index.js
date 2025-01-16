// JavaScript Code goes here
console.log("Internal JS console message. Hello, everyone")
console.log(document)
// console.dir(document)


// ALERTS
// alert("Hello world") // Textbot pop-up
window.onload = function(){
    // alert(`Hello java`)
}
// 

// PROMPTS //

// const student = prompt("What is tu name?")
//console.log(student)
// writes to document, but doesnt work with script deger
//document.write(`<p>Greetings from outer space, ${student}</p>`)

//document.getElementById("myH1").innerHTML = "I like javaScript";
//document.getElementById("myParagraph").textContent = "Hello"
///

const student = prompt("what is your name?") // Create a new <p> element
const messageElement = document.createElement("p"); // sets the text content of that
messageElement.textContent = `Hello, ${student} ` // append the new <p> to body
document.body.appendChild(messageElement); // Append the new <p> to body
// is ensures conent is dynamically added

// Styling page elements
document.body.style.color = "green"
document.body.style.backgroundColor = "black"
document.body.style.fontSize = "1.6em"

// EVENT LISTENERS // 
document.getElementById("myH1").addEventListener("click", function(){
    // function details go here
    document.getElementById("myH1").style.color = "red"
})

document.getElementById("myH1").addEventListener("mouseover",function(){
    document.getElementById("myH1").style.color = "blue"
})

document.getElementById("myParagraph").addEventListener("dblclick",function(){
    document.getElementById("myParagraph").style.fontSize = "2.2em"
})

document.getElementById("button").addEventListener("click",function(){
})
    document.getElementById("myParagraph").style.color = "orange"