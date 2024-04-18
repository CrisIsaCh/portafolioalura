var tipoEvento = "";

function validarFormulario() {
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var asunto = document.getElementById("asunto");
    var mensaje = document.getElementById("mensaje");



    // Verificar si algún campo está en blanco

    if (nombre.value.trim() === "") {
        notificaciones("error","nombre");      

        nombre.autocomplete = "off";
        nombre.style.border = "1px red solid";
        nombre.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(nombre, tipoEvento);
        });

        nombre.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(nombre, tipoEvento);

        })
        return false
    }

    var nombreTest = /^[a-zA-Z]+$/.test(nombre.value.trim());
    if (nombreTest === false) {
        notificaciones("error","un nombre con letras del alfabeto.")
        nombre.autocomplete = "off";
        nombre.style.border = "1px red solid";
        nombre.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(nombre, tipoEvento);
        });

        nombre.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(nombre, tipoEvento);

        })
        return false
    }
    if (email.value.trim() === "") {
        notificaciones("error","email.")
        email.autocomplete = "off";
        email.style.border = "1px red solid";
        email.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(email, tipoEvento);
        });

        email.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(email, tipoEvento);

        })
        return false

    }
    var emailTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value.trim());

    if (emailTest === false) {
        notificaciones("error","email valido.");
        email.autocomplete = "off";
        email.style.border = "1px red solid";
        email.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(email, tipoEvento);
        });

        email.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(email, tipoEvento);

        })
        return false

    }

    if (asunto.value.trim() === "") {
        notificaciones("error","asunto.")
        asunto.autocomplete = "off";
        asunto.style.border = "1px red solid";
        asunto.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(asunto, tipoEvento);
        });

        asunto.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(asunto, tipoEvento);

        })
        return false
    }
    if (mensaje.value.trim() === "") {
        notificaciones("error","mensaje.")
        mensaje.autocomplete = "off";
        mensaje.style.border = "1px red solid";
        mensaje.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(mensaje, tipoEvento);
        });

        mensaje.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(mensaje, tipoEvento);

        })
        return false
    }



    // Si todas las validaciones son exitosas, enviar el formulario
    notificaciones("success","El mensaje se envio con exito")
   
    
   
   

}

nombre.autocomplete = "off";
email.autocomplete = "off";
asunto.autocomplete = "off";
function verificarEvento(input, event) {

    if (event === "focus") {
        input.style.border = "none";
        input.style.borderBottom = "#2A7AE4 2px solid";

    } else if (event === "blur") {
        input.style.borderBottom = "#bfb4b4 1px solid"
    }





}
function notificaciones(tipo,variable) {
    toastr[tipo](`Ingresa ${variable}`)
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

}