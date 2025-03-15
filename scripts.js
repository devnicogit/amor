document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica');
    const mensajeInicial = document.getElementById('mensaje-inicial');
    const corazonesContainer = document.getElementById('corazones');
    const carta = document.getElementById('carta');
    const botonFinal = document.getElementById('boton-final');
    const mensajeFinal = document.getElementById('mensaje-final');
  
    // Reproducir música al hacer clic en cualquier parte
    document.body.addEventListener('click', () => {
      if (musica) {
        musica.play();
      }
      
      if (!mensajeInicial.classList.contains('oculto')) {
        mensajeInicial.classList.add('oculto');
        carta.classList.add('mostrar');
  
        // Crear corazones flotantes continuamente
        setInterval(crearCorazon, 300);
      }
    });
  
    // Función para crear corazones flotantes
    function crearCorazon() {
      const corazon = document.createElement('div');
      corazon.classList.add('corazon');
      corazon.style.left = `${Math.random() * 100}vw`;
      corazon.style.animationDuration = `${Math.random() * 3 + 2}s`;
      corazonesContainer.appendChild(corazon);
  
      // Eliminar el corazón después de la animación
      setTimeout(() => corazon.remove(), 5000);
    }
  
    // Mostrar la carta cuando se hace clic en cualquier parte
    document.body.addEventListener('click', () => {
      if (!mensajeInicial.classList.contains('oculto')) {
        mensajeInicial.classList.add('oculto');
        carta.classList.add('mostrar');
  
        // Crear corazones flotantes continuamente
        setInterval(crearCorazon, 300);
      }
    });
  
    // Mostrar el botón final después de 5 segundos
    setTimeout(() => {
      if (botonFinal) {
        botonFinal.classList.add('mostrar');
      }
    }, 5000);
  
    // Mostrar el mensaje final al hacer clic en el botón
    if (botonFinal) {
      botonFinal.addEventListener('click', () => {
        mensajeFinal.classList.add('mostrar');
      });
    }
  });