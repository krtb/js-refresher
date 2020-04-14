// Make a div
const myFirstDiv = document.createElement('div');

// add a class of wrapper to it
myFirstDiv.classList.add('wrapper');
// console.log(myFirstDiv);

// put it into the body
document.body.appendChild(myFirstDiv);

// make an unordered list
const myList = `
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
`;
// add three list items with the words "one, two three" in them
// TODO: review when best to use fragments
const addList = document.createRange().createContextualFragment(myList);
// put that list into the above wrapper
myFirstDiv.appendChild(addList);

// create an image
const myFirstImg = document.createElement('img');

// set the source to an image
myFirstImg.src = 'https://picsum.photos/500';

// set the width to 250
myFirstImg.width = '250';
// add a class of cute
myFirstImg.classList.add('cute');

// add an alt of Cute Puppy
myFirstImg.alt = 'cute puppy';

// Append that image to the wrapper
myFirstDiv.appendChild(myFirstImg);

// console.log(myFirstImg);

// with HTML string, make a div, with two paragraphs inside of it
const paragraphDiv = document.createElement('div');
paragraphDiv.innerHTML = `
<p>first para</p>
<p>second para</p>
`;
// console.log(paragraphDiv);

// put this div before the unordered list from above
const grabClass = document.querySelector('.wrapper');
grabClass.insertAdjacentElement('beforebegin', paragraphDiv);

// add a class to the second paragraph called warning
paragraphDiv.lastElementChild.classList.add('warning');
// remove the first paragraph
paragraphDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  const messageToReturn = `
        <div class="playerCard">
        <h2> ${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
        </div>
    `;
  const htmlMessage = document
    .createRange()
    .createContextualFragment(messageToReturn);

  console.log('inside generatePlayerCard');
  return htmlMessage;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const myCards = document.createElement('div');
myCards.style.backgroundColor = 'red';
myCards.style.textAlign = 'center';
myCards.style.width = '200px';
myCards.style.margin = '0 auto';
myCards.style.display = 'block';
myCards.innerHTML = '<button> Click Me! </button>';
document.body.appendChild(myCards);
myCards.classList.add('cards');

// Have that function make 4 cards
const makeCards = document.querySelector('.cards');

makeCards.addEventListener('click', () => {
  // capture the value before it's garbage collected
  const newCard = generatePlayerCard();
  const cardLastElementChild = newCard.lastElementChild;

  const myDeleteButton = document.createElement('button')
  myDeleteButton.type = 'button';
  myDeleteButton.innerHTML = 'Delete This Card'
  myDeleteButton.classList.add('my-delete')
  myDeleteButton.addEventListener('click', (e) => myDeleteButton.parentElement.remove())
  cardLastElementChild.insertAdjacentElement('afterbegin', myDeleteButton);

  const wrapperClass = document.querySelector('.wrapper');
  wrapperClass.insertAdjacentElement('beforebegin', cardLastElementChild);
});

// append those cards to the div
// put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed


// select all the buttons!
const allButtons = document.querySelectorAll('button')
console.log(allButtons)
// make out delete function

// loop over them and attach a listener
