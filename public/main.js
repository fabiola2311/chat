const socket = io.connect();

//* Función render
//Esta función se encargará de imprimer los mensajes en el html
function render(data) { 
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

//* Función addMEssage
//Esta función se encarga de tomar el valor de los inputs 
function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}


socket.on('messages', data => render(data));

