const button = document.querySelector('button');

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.backgroundColor = bgColor;
}