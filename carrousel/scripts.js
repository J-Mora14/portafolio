// Declaración de una variable llamada slideIndex, que se inicializa en 0.
let slideIndex = 0;

// Llama a la función showSlides una vez para iniciar el carrusel.
showSlides();

// Definición de la función showSlides.
function showSlides() {
  // Selecciona todos los elementos img dentro del contenedor con la clase 'carousel-content' y los guarda en una variable llamada slides.
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Itera sobre todos los elementos img dentro de slides.
  for (let i = 0; i < slides.length; i++) {
    // Remueve la clase 'active' de todos los elementos img, ocultando todas las imágenes.
    slides[i].classList.remove('active');
  }

  // Incrementa el valor de slideIndex en 1 para pasar a la siguiente imagen.
  slideIndex++;
  
  // Verifica si slideIndex es mayor que el número total de imágenes.
  // Si es así, vuelve al principio del carrusel.
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Agrega la clase 'active' al elemento img correspondiente a la imagen actual (slideIndex - 1), mostrándola en el carrusel.
  slides[slideIndex - 1].classList.add('active');

  // Configura un temporizador para llamar a la función showSlides nuevamente después de 2000 milisegundos (2 segundos), creando un efecto de presentación automática de diapositivas.
  setTimeout(showSlides, 2000); 
}
