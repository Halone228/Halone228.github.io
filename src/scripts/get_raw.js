
const add_to_element = (el, html, slice) => {
    let parser = new DOMParser(),
            doc = parser.parseFromString(html,'text/html'),
            code = slice===[] ? doc.body.innerHTML : doc.body.innerHTML.split('\n').slice(slice[0]-1, slice[1]).join('\n');
        
        el.innerHTML = `<code>${code}</code>`;
        el.childNodes[0].classList = 'hljs language-python'
        hljs.highlightElement(el.childNodes[0])
}

const get_file = (url, el, slice=[]) => {

    fetch(url).then(response => response.text())
    .then(html => {
        add_to_element(el, html, slice);
    }).catch(err => {
        console.warn(err)
    })
    
}

window.onload = () => {
    document.querySelectorAll('.code-block').forEach( el => {
        el.classList.add('rounded-3', 'bg-dark')
        let link = el.getAttribute('data-file-link')
        if(el.hasAttribute('data-slice-start')){
            let slice = [ el.getAttribute('data-slice-start'), el.getAttribute('data-slice-end') ]
            get_file(link,el,slice)
        } else {
            get_file(link, el)
        }
    } )
}
