//variables generales
let nombrePro = document.querySelector("#nombre-pro");
let precioPro = document.querySelector("#precio-pro");
let descripcionPro = document.querySelector("#descripcion-pro");
let imagenPro = document.querySelector("#imagen-pro");
let btnGuardar = document.querySelector(".btn-guardar");

//Evento para guardar los datos
btnGuardar.addEventListener("click", ()=>{
    alert("Hecho")
    let pro = validForm();
    console.log(pro);
});

//funcion para obtener los datos del formulario
function validForm() {
    if( nombrePro.value && precioPro.value && descripcionPro.value ){
        // alert("campos llenos");
        producto ={
            "nombre": nombrePro.value,
            "precio": precioPro.value,
            "descripcion": descripcionPro.value,
            "imagen" : imagenPro.value,
        }
    }else{
        alert("Todos los campos son Obligatorios 😁")

    }

    return producto;
}