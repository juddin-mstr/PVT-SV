// toogle
const nvbrNav = document.querySelector('.nvbr-nav');
// ketika di klik
document.querySelector('#menu').onclick = () => {
    nvbrNav.classList.toggle('active');
};

// klik out
const burger = document.querySelector('#menu')
document.addEventListener ('click', function(e) {
    if(!burger.contains(e.target) && !nvbrNav.contains(e.target)) {
        nvbrNav.classList.remove('active')
    }
})