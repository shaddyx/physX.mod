module.exports = function setup() {
    if ($.status === "testing"){
        return;
    }
    sys.spawn("TestEntity", {
        x: 10,
        y: 10
    })
    // // create top container
    // // it is the central points for event handling to all components
    // const hud = sys.spawn('hud/Hud', {
    //     Z: 10,
    //     name: 'hud',
    // })

    // const l1 = sys.spawn('hud/gadget/Label', {
    //     name: 'label1',
    //     x: 30,
    //     y: 40,
    //     text: res.welcome,
    // }, 'hud')
    // sys.augment(l1, dna.hud.trait.Draggable)
    // l1.setStyle('title')

    // const eyes = sys.augment(sys.spawn('hud/gadget/Eyes', {
    //     name: 'eyes',
    //     x: ctx.width - 100,
    //     y: 20
    // }, 'hud'), dna.hud.trait.Draggable)
    // sys.after(trap, 'mouseDown', function(e) {
    //     eyes.pupilR = 8
    // })
    // sys.after(trap, 'mouseUp', function(e) {
    //     eyes.pupilR = 6
    // })

    // let nx = 30
    // let ny = 90
    // let button = sys.spawn('hud/gadget/Button', {
    //     x: 30,
    //     y: ctx.height - 50,
    //     h: 30,
    //     w: 120,
    //     text: 'Explorer',

    //     onClick: function() {
    //         sys.spawn('hud/gadget/Explorer', {
    //             x: nx,
    //             y: ny,
    //             w: 250,
    //             h: 400,
    //         }, 'hud')

    //         nx += 50
    //         ny += 50
    //     }
    // }, 'hud')

    // button.onClick()
}
