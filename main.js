// QUERY SELECTOR
// Query selector and query selector all
const para= document.querySelector
('p');
console.log(para);

const headOne= document.querySelector('h1')
console.log(headOne)
 
// CLASS NAME
const mainText= document.querySelector('.main-text');
console.log(mainText)

const divName= document.querySelector('div.second-line');
console.log(divName)

// USING THE QUERYSELECTALL
const paras= document.querySelectorAll('p');
console.log(paras);
console.log(paras[3]);

const errors= document.querySelectorAll('.error');
console.log(errors);
console.log(errors[1]);


//Get an element by ID
const title= document.getElementById('page-title');
console.log(title)

const introText= document.getElementById('intro-text')
console.log(introText)

//Get an element by class name
const errorClass= document.getElementsByClassName('error');
console.log(errorClass);

//get elements by their tag name

const paraTags= document.getElementsByTagName('p')
console.log(paraTags)
console.log(paraTags[3])


// Changing the text inside HTML(Innertext)

const firstPara= document.querySelector('p');
firstPara.innerText='Oha soup is lit!';

//  To append to the text
firstPara.innerText+='Oha soup is lit!'; 

// To locate the HTML in a div
const content= document.querySelector('.content')
console.log (content.innerHTML);

// To change the HTML content in the div 
content.innerHTML= '<h2>This is a new text</h2>';

// To locate attributes in HTML

const link= document.querySelector('a');
console.log(link.getAttribute('href'));

// To set/change the attributes
link.setAttribute('href', 'https://www.goal.com');
link.innerText='This is a football site';


const mssg= document.querySelector('p');

console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style','color:green;');


const mainTitle= document.querySelector('h1');
console.log(mainTitle);
title.style.backgroundColor='red'