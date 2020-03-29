function spanTitle() {
    let title = document.querySelector('.title');
    let text = title.innerHTML;
    let letters = text.split('');
    let spans = letters.map(
        letter => { 
            let span = document.createElement('span');
            span.innerText = letter;
            return span;
        }
    );
    title.innerHTML = '';
    spans.forEach(span => {
        title.appendChild(span);
    });
    return spans;
}
function shuffle(array) {
    array.sort( () => 0.5 - Math.random() );
}

let originalSpans = spanTitle();
let oddOrEven = Math.round(Math.random());
let spans = originalSpans.filter( (value, index) => index % 2 == oddOrEven );
shuffle(spans);
let spansToAnimate = spans.slice(0, 5);
spansToAnimate.forEach(span => span.classList.add('bounce'));

function slideOut() {
    document.querySelector('.welcome').classList.add('slide-out');
    document.querySelector('.welcome').classList.remove('slide-in');
}
function slideIn() {
    document.querySelector('.welcome').classList.add('slide-in');
    document.querySelector('.welcome').classList.remove('slide-out'); 
}

document.querySelector('.welcome').addEventListener('click', slideOut);
document.querySelector('.back').addEventListener('click', slideIn);