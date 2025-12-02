let hand = 0
let num_random = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.AB, function () {
    num_random += randint(1, 3)
    basic.showString("Has escogido!")
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    if (num_random == 1) {
        basic.showString("PERDI :(, escogi:")
        basic.showIcon(IconNames.Target)
    } else if (num_random == 2) {
        basic.showString("GANEE :), escogi:")
        basic.showIcon(IconNames.Scissors)
    } else if (num_random == 3) {
        basic.showString("EMPATE, escogi:")
        basic.showLeds(`
            . # . # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    }
})
basic.forever(function () {
	
})
