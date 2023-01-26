input.onButtonPressed(Button.A, function () {
    valueE += 100
    basic.showNumber(valueE,-70)
})
input.onButtonPressed(Button.AB, function () {
    valueE = 0
    basic.showNumber(valueE)
})
input.onButtonPressed(Button.B, function () {
    valueE += -1
    basic.showNumber(valueE,70)
})
let valueE = 0
valueE = 0
basic.showNumber(valueE,70)
basic.forever(function () {
    if (valueE == 0) {
        basic.showNumber(0)
    } else if (valueE == 1) {
        basic.showNumber(1)
    } else if (false) {
    	
    } else {
    	
    }
})
