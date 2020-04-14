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
    // Method 1
    event.currentTarget.setAttribute('aria-selected', true);
    const { id } = event.currentTarget
    const tabPanel = document.querySelector(`[aria-labelledby=${id}]`);
    tabPanel.hidden = false;

    // Method 2

}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});