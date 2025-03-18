// array para almacenar los nombres
let amigos = [];

// Función para agregar los nombres
function agregarAmigo() {
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar si el nombre ya existe en el array
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    nombreInput.value = ""; // Limpiar el campo de texto
    actualizarLista(); // Actualiza la lista en pantalla
}
// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Usamos "listaAmigos" ya que es el id de la lista en HTML
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() { 
    // Validar que haya amigos disponibles 
    if (amigos.length === 0) {  
        alert("No hay amigos disponibles para sortear. Agrega al menos uno."); 
        return; 
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; 

    // Mostrar el resultado en el HTML 
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; 
}
