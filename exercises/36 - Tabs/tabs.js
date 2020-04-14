const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {

    tabPanels.forEach((panel)=> {
       panel.hidden = true;
    })

    tabButtons.forEach((button) => {
        button.setAttribute('aria-selected', false);
    })

    // mark the current tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});