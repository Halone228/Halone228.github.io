let droneEls = document.querySelectorAll('.drone'),
drones = [{
    x:0,
    y:0,
    ms: 2000, // in ms

    el: droneEls[0]
},
{
    x:0,
    y:0,
    ms: 1700, // in ms

    el: droneEls[1]
},
{
    x:0,
    y:0,
    ms: 1300, // in ms

    el: droneEls[2]
},
{
    x:0,
    y:0,
    ms: 2400, // in ms

    el: droneEls[3]
}
]

window.addEventListener( 'load', () => {

    drones.forEach( drone => {
// console.log(drone)

        drone.el.style.transitionDuration = `${drone.ms}ms`
        drone.el.style.position = 'absolute'

        setInterval( () => {

            let tl = Math.random() * window.innerWidth,
                tt = Math.random() * window.innerHeight
    
            drone.el.style.transform = drone.x>tl?'rotate(-25deg)':'rotate(25deg)'
    
            drone.x = tl
            drone.y = tt
    
            drone.el.style.left = `${drone.x}px`
            drone.el.style.top = `${drone.y}px`
        }, drone.ms )
    } )
})