document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

document.querySelector('#playButton').addEventListener('click', () => {
    let inputElement = document.querySelector('#input').value

    if (inputElement !== '') {
        let songArray = inputElement.split('')
        playComposition(songArray)
    }
})
document.querySelector('#clearButton').addEventListener('click', () =>{
    document.querySelector('#input').value = ''
    
})

function playSound(sound) {

    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)



    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }    
    if (keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 250)
    }
    
}
function playComposition(songArray) {
    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)
        wait += 250

    }
}