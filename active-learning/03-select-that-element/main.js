// JavaScript Document

//1.)  find two different ways to target the first section element on the page. Use console.log to check. Put a comment with the word faster by the method that targets the element more quickly and efficently. 

document.querySelector('section') //Faster
document.getElementsByTagName('section')[0]

//2.)  Target the footer element. Use console.log to check 
let footerElement = document.querySelector('footer')
console.log(footerElement)

//3.)  Target all elements with the class or orange and change the text in these elements orange 
let orangeElements = document.querySelectorAll('.orange');

for(i=0; i < orangeElements.length; i++) {
    orangeElements[i].style.color = 'orange';
}

//4.) Target all section elements and console log 
let allSections = document.querySelectorAll('section');
console.log(allSections)

//5.) Find two ways to target the second section element 
document.getElementsByTagName('section')[1]
document.querySelectorAll('section')[1]