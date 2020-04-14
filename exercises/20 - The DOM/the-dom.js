// function init() {
//   const p = document.querySelector('p');
//   console.log(p, '<-- here is my paragraph tag');
// }

// document.addEventListener('DOMContentLoaded', init, '< event listener');

// const pizzaList = document.querySelector('.pizza');
// const tryThis = pizzaList.insertAdjacentText('afterend', '🍕');

// console.log(tryThis, 'list');

const pic = document.querySelector('.nice');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'cute pup';

const custom = document.querySelector('.custom');
console.log(custom, 'custom');

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
