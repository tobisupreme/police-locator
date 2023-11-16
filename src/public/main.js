const socket = io();

const userId = document.body.getAttribute('data-userId');

socket.emit('join', { userId });

let requestDetails = {};
let copDetails = {};
let map, marker;
