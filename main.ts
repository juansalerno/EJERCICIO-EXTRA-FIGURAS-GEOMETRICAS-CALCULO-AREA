import Cuadrado from './Cuadrado';
import Rectangulo from './Rectangulo';
import Rombo from './Rombo';
import Romboide from './Romboide';
import Trapecio from './Trapecio';
import Triangulo from './Triangulo';

let miCuadrado1: Cuadrado = new Cuadrado(40, 40);
console.log(miCuadrado1.calcularArea());
console.log(' ');

let miCuadrado2: Cuadrado = new Cuadrado(40, 30);
console.log(miCuadrado2.calcularArea());
console.log(' ');


let miRectangulo1: Rectangulo = new Rectangulo(32, 67);
console.log(miRectangulo1.calcularArea());
console.log(' ');

let miRectangulo2: Rectangulo = new Rectangulo(32, 32);
console.log(miRectangulo2.calcularArea());
console.log(' ');


let miRombo: Rombo = new Rombo(23, 97);
console.log(miRombo.calcularArea());
console.log(' ');

let miRomboide: Romboide = new Romboide(50, 77);
console.log(miRomboide.calcularArea());
console.log(' ');

let miTrapecio1: Trapecio = new Trapecio(40, 77, 104);
console.log(miTrapecio1.calcularArea());
console.log(' ');

let miTrapecio2: Trapecio = new Trapecio(40, 77, 40);
console.log(miTrapecio2.calcularArea());
console.log(' ');


let miTriangulo: Triangulo = new Triangulo(64, 83);
console.log(miTriangulo.calcularArea());
console.log(' ');

