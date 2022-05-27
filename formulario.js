var input = document.getElementsByClassName("fomulario__input");
for (var i =0; i < input.length; i++) {
    input[i].addEventListener("keyup", function(){
        if(this.value.lenght>=1) {
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

function validar(){
    var nombre, corre, telefono, correo, mensaje;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;


    if (nombre === "" || correo === "" || telefono === "" || mensaje === ""){
        alert("Campo vacio");
        return false;
    }
    else if(nombre.length>30) {
        alert("Maximo 30 caracteres")
    }

    else if (!expresion.test(correo)) {
        alert("El correo no es válido");
        return false;
    }
    else if(isNaN(telefono)) {
        alert("El teléfono no es un número")
        return false;
    }


}
