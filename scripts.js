document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica');
    const mensajeInicial = document.getElementById('mensaje-inicial');
    const corazonesContainer = document.getElementById('corazones');
    const carta = document.getElementById('carta');
    const botonFinal = document.getElementById('boton-final');
    const mensajeFinal = document.getElementById('mensaje-final');
  

    if (musica) {
      musica.play();
    }
  

    function crearCorazon() {
      const corazon = document.createElement('div');
      corazon.classList.add('corazon');
      corazon.style.left = `${Math.random() * 100}vw`;
      corazon.style.animationDuration = `${Math.random() * 3 + 2}s`;
      corazonesContainer.appendChild(corazon);
  

      setTimeout(() => corazon.remove(), 5000);
    }
  

    document.body.addEventListener('click', () => {
      if (!mensajeInicial.classList.contains('oculto')) {
        mensajeInicial.classList.add('oculto');
        carta.classList.add('mostrar');
  

        setInterval(crearCorazon, 300);
      }
    });
  

    setTimeout(() => {
      if (botonFinal) {
        botonFinal.classList.add('mostrar');
      }
    }, 5000);
  

    if (botonFinal) {
      botonFinal.addEventListener('click', () => {
        mensajeFinal.classList.add('mostrar');
      });
    }
  });