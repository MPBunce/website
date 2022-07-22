const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  
  "\"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.\" - Henry Ford", 
  "\"There is no substitute for hard work.\" - Thosmas A. Edison", 
  "\"If you know the way broadly you will see it in everything.\" - Miyamoto Musashi", 
  "\"Weak things break\" - Louie Simmons", 
  "\"Simplicity is the soul of efficiency.\" - Austin Freeman", 
  "\"Learning never exhausts the mind.\" - Leonardo da Vinci", 


];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 4000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});