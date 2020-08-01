input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.TiltRight, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
})
