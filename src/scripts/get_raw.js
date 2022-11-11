const get_file = (url, el) => {

    fetch(url).then(response => response.text())
    .then(html => {
        let code = new DOMParser().parseFromString(html,'text/html').body.innerHTML

        el.innerHTML = `<code>${code}</code>`

        el.childNodes[0].classList = 'hljs language-python'
        hljs.highlightElement(el.childNodes[0])
    })
    .catch(err => {
        console.warn(err)
    })
}

window.onload = () => {
    document.querySelectorAll('.code-block').forEach( (el) => {
        let link = el.getAttribute('data-file-link')
        get_file(link, el)
    } )
}
