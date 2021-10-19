radio.onReceivedString(function (receivedString) {
    if (receivedString == "pince") {
        pins.servoWritePin(AnalogPin.P3, 180)
        pins.servoWritePin(AnalogPin.P4, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P3, 110)
        pins.servoWritePin(AnalogPin.P4, 50)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P3, 180)
    }
})
let distance = 0
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P3, 90)
pins.servoWritePin(AnalogPin.P4, 110)
basic.showIcon(IconNames.Duck)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (distance > 5) {
        motorbit.forward(40)
    } else if (distance < 4) {
        motorbit.back(40)
    } else {
        motorbit.brake()
    }
})
