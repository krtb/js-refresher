const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
// need to turn NODE LIST into an ARRAY to use find() method
// solution => Array.from();
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

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
    // const tabPanel = document.querySelector(`[aria-labelledby=${id}]`);
    // tabPanel.hidden = false;

    // Method 2
    const tabPanel = tabPanels.find((panel)=> panel.getAttribute('aria-labelledby') === id );    
    tabPanel.hidden = false;
}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});