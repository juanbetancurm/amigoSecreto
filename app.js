let amigos = [];

function agregarAmigo() {
    
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    amigos.push(nombreAmigo);
    
    actualizarListaAmigos();
    
    inputAmigo.value = '';
    
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo a la lista');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `Amigo secreto: ${amigoSorteado}`;
    resultado.appendChild(li);
}