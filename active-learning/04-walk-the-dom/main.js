// JavaScript Document


//1.) Using ol as your starting element, target the first li element 
let olELement = document.querySelector('ol');
let firstLI = olELement.firstElementChild;
console.log(firstLI); // First li element is returned.

//2.) using main as your starting element, what is the last child? console.log to check it out 
let mainElement = document.querySelector('main');
let lastChild = mainElement.lastChild;
console.log(lastChild) // #text is returned. Meaning there is a whitespace which is treating as text node.

//3.) using html as your starting element, what is the last Element child? Console.log to check it out. 
let htmlElement = document.querySelector('html');
let lastElementChild = htmlElement.lastElementChild;
console.log(lastElementChild); // body is returned

//4.) using the second li element as your starting element, target the next li element and change the colour to purple. 
let allLIs = document.querySelectorAll('li')
let secondLI = allLIs[1];
let nextSibling = secondLI.nextElementSibling;
nextSibling.style.color = 'purple'