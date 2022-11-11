let drone = {
    x:0,
    y:0,
    ms: 2000, // in ms

    el: document.querySelector('#drone'),
}

window.addEventListener( 'load', () => {

    drone.el.style.transitionDuration = `${drone.ms}ms`

    setInterval( () => {

        let tl = Math.random() * window.innerWidth,
            tt = Math.random() * window.innerHeight

        drone.el.style.transform = drone.x>tl?'rotate(-25deg)':'rotate(25deg)'

        drone.x = tl
        drone.y = tt

        drone.el.style.left = `${drone.x}px`
        drone.el.style.top = `${drone.y}px`
    }, drone.ms )
})