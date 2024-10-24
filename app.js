const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const e1 = document.createElement('1i');
    e1.innerHTML = text;
    document.querySelector('u1').appendChild(e1)
});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text)
}