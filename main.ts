for (let index = 0; index < 2; index++) {
    cuteBot.motors(0, 0)
    cuteBot.motors(28, 20)
    basic.pause(360)
    cuteBot.motors(22, 51)
    basic.pause(1030)
    cuteBot.motors(20, 28)
    basic.pause(360)
}
cuteBot.motors(0, 0)
basic.forever(function () {
    music.setVolume(255)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(35)
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(35)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(40)
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(35)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(40)
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(500)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . # .
        # # . # .
        # # . # .
        . . . # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        # # # # #
        . . . # #
        . . # . .
        . # . . .
        . . # # .
        `)
    basic.showLeds(`
        . . . . #
        # # # # .
        . . . . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # . # . .
        # # # # #
        # # # . #
        # . # . #
        # # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # . .
        . # . # .
        # . . # #
        `)
})
