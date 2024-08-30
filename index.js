const prompt = require('prompt-sync')();
let x = 1;
let y = 1;
while(x != 0 && y != 0) {
  x = parsenInt(prompt('digite o valor de x: '));

if(x > 0 && y > 0) {

  console.log(`primeiro quadrante`);
  } else if(x < 0 && y > 0){
  console.log('segundo quadrante');
  } else if (x < 0 && y < 0){
  console.log('terceiro quadrante');
  } else if (x > 0 && y <0) {
  console.log('quarto quadrante');
   } else if (x==0){
  console.log('eixo x');
   }else if (y==0){
  console.log('eixo y');
} else if (x == 0 && y == 0)
{console.log("origem");
  
}
  
}