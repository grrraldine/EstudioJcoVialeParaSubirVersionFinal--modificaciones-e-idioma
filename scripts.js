// Función de inicialización de Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
    }, 'google_translate_element');
  }
  
  // Función para alternar el idioma en escritorio
  function toggleLanguageDesktop() {
    const select = document.querySelector("select.goog-te-combo");
    const button = document.getElementById("language-toggle"); // Botón de escritorio
  
    if (select) {
        if (select.value === 'en') {
            select.value = 'es';
            button.innerText = 'English';
        } else {
            select.value = 'en';
            button.innerText = 'Spanish';
        }
        select.dispatchEvent(new Event("change"));
  
        setTimeout(() => {
            select.dispatchEvent(new Event("change"));
        }, 100);
    }
  }
  
  // Función para alternar el idioma en móvil
  function toggleLanguageMobile() {
    const select = document.querySelector("select.goog-te-combo");
    const button = document.getElementById("language-toggle-abr"); // Botón de móvil
  
    if (select) {
        if (select.value === 'en') {
            select.value = 'es';
            button.innerText = 'En';
        } else {
            select.value = 'en';
            button.innerText = 'Sp';
        }
        select.dispatchEvent(new Event("change"));
  
        setTimeout(() => {
            select.dispatchEvent(new Event("change"));
        }, 100);
    }
  }
  

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const formData = new FormData(this); // Obtener los datos del formulario

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Aceptar respuesta en JSON
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('response-message').innerText = '¡Tu consulta se ha enviado exitosamente!';
            document.getElementById('response-message').style.display = 'block';
            this.reset(); // Reiniciar el formulario
        } else {
            document.getElementById('response-message').innerText = 'Ocurrió un error. Por favor, inténtalo de nuevo.';
            document.getElementById('response-message').style.display = 'block';
        }
    }).catch(error => {
        document.getElementById('response-message').innerText = 'Ocurrió un error. Por favor, inténtalo de nuevo.';
        document.getElementById('response-message').style.display = 'block';
    });
});


