input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (randint(1, 3) == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (randint(1, 3) == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(200)
    }
    for (let y = 0; y <= 4; y++) {
        led.plot(4, y)
        basic.pause(200)
    }
    Xindex = 3
    x = 0
    for (let index = 0; index < 4; index++) {
        led.plot(x + Xindex, 4)
        basic.pause(200)
        Xindex += -1
    }
    Yindex = 3
    y = 0
    for (let index = 0; index < 4; index++) {
        led.plot(0, y + Yindex)
        basic.pause(200)
        Yindex += -1
    }
})
let y = 0
let Yindex = 0
let x = 0
let Xindex = 0
basic.showNumber(randint(0, 9))
