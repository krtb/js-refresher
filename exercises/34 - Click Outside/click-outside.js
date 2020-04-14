// select all buttons
const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// handler callback function on card button click
function handleClick(event) {
    // find currently clicked item
    const button = event.currentTarget;
    // find closest element with class of card
    // climbs up the nested DOM tree of elements, opposite of querySelector();
    const card = button.closest('.card');
    // grab image source
    const imgSrc = document.querySelector('img').src;
    // grab DATA-SET 
    const description = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    
    // use replace(); to replace string txt in src attribute
    modalInner.innerHTML = `
        <img src=${imgSrc.replace('200', '600')} alt=${name}/>
        <p>${description}</p>
    `;

    modalOuter.classList.add('open');
}


// loop over buttons, listen for a click on each of them
cardButtons.forEach((button)=> {
    button.addEventListener('click', handleClick);
});

// function to close modal, by removing open class
function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    // place bang next to statement to convert to BOOLEAN data-type
    // clicking on modalOuter div that wraps modalInner
    const isOutside = !event.target.closest('.modal-inner'); 
    // if clicking outside of modal, close modal by removing 'open' CSS class
    if (isOutside) {
        modalOuter.classList.remove('open');
    }
    
}) 