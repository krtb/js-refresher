const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    console.log(event.currentTarget);
}

tabButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        console.log(`clicked the ${button.innerText} button!`)
    })
});