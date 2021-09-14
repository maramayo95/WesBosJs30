function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // Si se ejecuta una tecla que no corresponda al array de objetos en html pertenecientes a la clase data-key. Que no haga nada
    audio.currentTime = 0; // Para poder tocar repetidas veces cada nota 
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e){
    if(e.propertyName !== 'transform') return; //retorna si no es un evento transform
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition))


window.addEventListener('keydown', playSound);