const get_file = (url, el, slice=[]) => {

    fetch(url).then(response => response.text())
    .then(html => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(html,'text/html')
        let code = slice===[] ? doc.body.innerHTML : doc.body.innerHTML.split('\n')
        .slice(slice[0]-1, slice[1]).join('\n');
        console.log(code)
        el.innerHTML = `<code fs-codehighlight-element="code">${code}</code>`;
    }).catch(err => {
        console.warn(err)
    })
}

window.onload = () => {
    document.querySelectorAll('.code-block').forEach( el => {
        let link = el.getAttribute('data-file-link')
        if(el.getAttribute('data-slice-start')){
            let slice = [el.getAttribute('data-slice-start'),
             el.getAttribute('data-slice-end')];
            get_file(link,el,slice)
        } else{
            get_file(link, el)
        }
    } )
}
