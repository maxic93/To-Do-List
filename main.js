const formulario = document.getElementById("formulario")
const titulo = document.getElementById("exampleFormControlInput1")
const tarea = document.getElementById("exampleFormControlTextarea1")
const button = document.getElementById("button")
const listaTareas = document.getElementById("Lista-tareas")

//Clase para agregar como nueva tarea
class NuevaTarea {
    constructor(titulo, tarea){
        this.titulo = titulo
        this.tarea = tarea
    }
}

//funciones

const interacciones = {
    agregarTarea(e){
        if(titulo.value =="" && tarea.value ==""){
            alert("Escriba su tarea")
            e.preventDefault()
        }else {
        let nuevaTarea = new NuevaTarea(titulo.value, tarea.value)
    let div = document.createElement("DIV")
    div.innerHTML = `
    <h3><b>Tarea: </b>${nuevaTarea.titulo}</h3>
    <h5><b>¿Que vas hacer?: </b>${nuevaTarea.tarea}</h5>
    <a class="btn btn-danger mt-2" name="delete">Eliminar Tarea</a>
    `
    listaTareas.appendChild(div)
    titulo.value = ""
    tarea.value = ""
    e.preventDefault()
    }
    },
    eliminarTarea(e){
       if(e.name==="delete"){
        e.parentElement.remove()
       }
    },   
}

//Eventos
button.addEventListener("click", interacciones.agregarTarea)
listaTareas.addEventListener("click", function(e) {
    interacciones.eliminarTarea(e.target)
})
 
