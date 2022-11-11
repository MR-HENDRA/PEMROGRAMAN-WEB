const mycanvas = document.querySelector('#mycanvas');

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext('2d');

c.fillStyle = 'blue';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(100, 100, 200, 100);
c.fill();
c.stroke();
