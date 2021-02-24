// JavaScript Document


//1.) Add a new paragraph to the page

let mainElement = document.querySelector('main');

let pELement = document.createElement("p");
let pNode = document.createTextNode("This is a new paragraph added to the main element by manipulating the DOM.");
pELement.appendChild(pNode);

mainElement.appendChild(pELement);

//2.) Remove the class attribute on the header element 

let headerElement = document.querySelector('header');
let nameOfClass = headerElement.className;
headerElement.classList.remove(nameOfClass);

//3.) Change the src attribute in the image element to 'cat2.jpg'
let imgElement = document.querySelector('img');
imgElement.src='assets/cat2.jpg';


//4.) Remove the footer element 
let footerElement = document.querySelector('footer');
footerElement.remove();

//5.) Add an h3 into the header 

let h3ELement = document.createElement("h3");
var h3Node = document.createTextNode("This is h3 added to the header element by manipulating the DOM.");
h3ELement.appendChild(h3Node);

headerElement.appendChild(h3ELement);