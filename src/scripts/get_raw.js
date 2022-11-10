const get_file = (url, el) => {
console.log('dsadas')
    fetch(url).then(response => response.text())
    .then(html => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(html,'text/html')
        console.log(doc)
        console.log(el)
        el.innerHTML = doc.body.innerHTML;
    }).catch(err => {
        console.warn(err)
    })
    }
