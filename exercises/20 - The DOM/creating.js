console.log('how it works');

// create HTML element
const myParagraph = document.createElement('p');
myParagraph.textContent = "I'm a P tag.";
myParagraph.classList.add('special');
console.log(myParagraph);

const myImg = document.createElement('img');
myImg.alt = 'my image';
myImg.src = 'https://picsum.photos/500';
console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImg);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cools things.';
myDiv.appendChild(heading);
