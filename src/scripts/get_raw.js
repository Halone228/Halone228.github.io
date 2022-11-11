const get_file = (url, el, slice=[]) => {

    fetch(url).then(response => response.text())
    .then(html => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(html,'text/html')
        let code = slice===[] ? doc.body.innerHTML : code.split('\n')
        .slice(slice[0], slice[1]).join('\n');
        el.innerHTML = `<code fs-codehighlight-element="code">${code}</code>`;
    }).catch(err => {
        console.warn(err)
    })
}

window.onload = () => {
    document.querySelectorAll('.code-block').forEach( el => {
        let link = el.getAttribute('data-file-link')
        get_file(link, el)
    } )
}
