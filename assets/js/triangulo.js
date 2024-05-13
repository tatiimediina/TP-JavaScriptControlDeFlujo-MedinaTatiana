let numeroFilas = 5; 
let simbolo = '#'; 
let triangulo = '';

for (let i = 1; i <= numeroFilas; i++) {
  let fila = '';
  for (let j = 1; j <= i; j++) {
    fila = fila + simbolo;
  }
  triangulo = triangulo + fila + '\n'; 
}

console.log(triangulo);