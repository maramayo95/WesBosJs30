window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // Si se ejecuta una tecla que no corresponda al array de objetos en html pertenecientes a la clase data-key. Que no haga nada
    audio.currentTime = 0; // Para poder tocar repetidas veces cada nota 
    audio.play();
    key.classList.add('playing');
})
//Minuto 10:16 