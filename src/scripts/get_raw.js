const get_file = (url, el) => {
    let doc = fetch(url).then(response => response.text())
    .then(html => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(html)
        return doc
    }).catch(err => {
        console.warn(err)
    })
    el.innerHTML = doc.querySelector('pre')
    console.log('dsadas')
}
