basic.forever(function () {
    if (input.temperature() > 7) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showNumber(input.temperature())
    }
})
