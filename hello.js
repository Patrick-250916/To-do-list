// Aprendiendo el Dom o practicando el Dom

//const tituloId = document.getElementById('title-id');// Estilos 
//const consulta = document.querySelector('.title-class');// h1 .title-class #title-id
//const buttonId = document.getElementById('button-id');// boton Azul
//tituloId.innerHTML = 'javacript desde innerHTML hello '; // Modificar el texto


// Lista de tareas Body > main
const input = document.getElementById('ingresar-tarea'); // input
const btn = document.getElementById('button-input'); // boton
const listaDeTareas = document.getElementById('listaDeTareas'); // listaDeTarea
// ListaDeTareas = padre div; hermanos button, input, h2

function agregarTarea(){
    if(input.value){
        // Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        // texto ingresando por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos de bootstrap
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        completar.addEventListener('click',completarTarea);

        // Eliminar
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        iconos.append(completar,eliminar);
        eliminar.addEventListener('click', eliminarTarea)

        iconos.append(completar,eliminar);

        // Agreagar tarea a la lista
        listaDeTareas.appendChild(tareaNueva);

    }else{
        alert('ingresa una tarea');
        console.log('Hola debes tener una tarea');
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

// Agregando el evento al boton
btn.addEventListener('click',agregarTarea);

input.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        agregarTarea();
    }
});


