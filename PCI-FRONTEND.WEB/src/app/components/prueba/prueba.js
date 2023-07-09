const tarjetasContainer = document.querySelector('.tarjetas-container');
        const tarjetas = document.querySelectorAll('.tarjeta');
        const anteriorBtn = document.querySelector('#anterior');
        const siguienteBtn = document.querySelector('#siguiente');
        let indiceTarjetaActual = 0;
        tarjetas[indiceTarjetaActual].classList.add('active');
      
        anteriorBtn.addEventListener('click', () => {
          if (indiceTarjetaActual === 0) {
            return;
          }
          indiceTarjetaActual--;
          actualizarCarrusel();
        });
      
        siguienteBtn.addEventListener('click', () => {
          if (indiceTarjetaActual === tarjetas.length - 1) {
            return;
          }
          indiceTarjetaActual++;
          actualizarCarrusel();
        });
      
        function actualizarCarrusel() {
            tarjetas.forEach((tarjeta, index) => {
                if (index === indiceTarjetaActual) {
                tarjeta.classList.add('active');
                } else {
                tarjeta.classList.remove('active');
                }
            });
            }