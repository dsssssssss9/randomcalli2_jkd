input.onButtonPressed(Button.A, function () {
    colorbit_51bit.clear()
    colorbit_51bit.showColorIcon(ColorIcon.Skull, colorbit.colors(BitColors.Blue))
    basic.pause(500)
    colorbit_51bit.showColorIcon(ColorIcon.Sword, colorbit.colors(BitColors.Blue))
    colorbit_51bit.show()
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        colorbit_51bit.showBarGraph(randint(1, 255), randint(1, 255))
        basic.pause(200)
        colorbit_51bit.clear()
        basic.pause(100)
        colorbit_51bit.shift(randint(0, 100))
        basic.pause(200)
        colorbit_51bit.showRainbow(1, 360)
        basic.pause(1000)
    }
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.setBrightness(5)
led.enable(true)
