let Temperatura = input.temperature()
basic.forever(function () {
    if (Temperatura > 25) {
        basic.showNumber(Temperatura)
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.pause(1000)
    } else {
        basic.showNumber(Temperatura)
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        basic.pause(1000)
    }
})
