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
let spans = spanTitle();
spans.sort( function() { return 0.5 - Math.random() } );
let spansToAnimate = spans.slice(0, 6);
spansToAnimate.forEach(span => span.classList.add('bounce'));

