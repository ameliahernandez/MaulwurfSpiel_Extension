input.onButtonPressed(Button.A, function () {
    if (Zufall == 0) {
        game.addScore(1)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        game.addScore(-1)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Zufall == 2) {
        game.addScore(1)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        game.addScore(-1)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Zufall == 1) {
        game.addScore(1)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        game.addScore(-1)
        basic.clearScreen()
    }
})
let Zufall = 0
game.setScore(0)
while (input.runningTime() <= 20000) {
    Zufall = randint(0, 2)
    if (Zufall == 0) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
        if (Zufall == 1) {
            basic.showLeds(`
                . . # . .
                . . # . #
                . . # . #
                . . # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
}
game.gameOver()
