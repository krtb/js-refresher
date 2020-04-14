const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        console.log('removing...');
        ob.unobserve(terms.lastElementChild)
    }else {
        button.disabled = true;
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

// ob.observe(watch);
ob.observe(terms.lastElementChild);