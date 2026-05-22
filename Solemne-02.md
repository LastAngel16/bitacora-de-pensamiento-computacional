# Solemne-02

## Integrantes del grupo

- Roberto Silva E. [https://github.com/LastAngel16]

## Descripción del disco

![Portada de Corazones](./img/Corazones.jpeg)

- Corazones
- 1990
- Los Prisioneros (Jorge Gonzáles y Miguel Tapia)
- Tracklist:

```txt
1. Tren al Sur
2. Amiga Mía
3. Con suavidad
4.Corazones Rojos
5. Cuentame una historia Original
6. Estrechez de corazón
7. Por amarte
8. Nocher en la ciudad
9. Es demasiado triste
```

- Aspecto del álbum a desarrollar (premisa)

> El proyecto busca representar la primera cancion del album "Tren al sur" representando directamente su letra de "la felicidad de lo simple" usando cosas simples y no complejas para representar un viaje que no cambia de direccion llendo a su destino en concreto sin importar el clima o la hora para llegar, incluso si esta todo solo en las vias va hacia su destino acompañado de las cosas naturales como las nubes y la luna, reconfortando a quien este dentro en los momentos mas dificiles a un lugar con paz y tranqulidad con cosas que uno ve cada dia en su vida.

## Conclusión del proceso

- Distancia entre premisa y resultado

> Siendo honesto la verdad use lo que sentia al escuchar la cancion mas que centrarme en la historia detras de la produccion de la cancion en general, ya que no sabia como poder representar bien  los temas alrededor de esta, podria haber incluido mas cosas alrededor del detras de la cancion, una imagen de un tren de chile que va al sur en vez del metro y que no fuera un dibujo, tal vez incluir un ciclo dia y noche completo cambiando entre colores y multiples cosas, pero la verdad me gusto mucho el resultado final

- Cosas no conseguidas

> Varias cosas las descarte al hacer el trabajo, como hacer que estrellas aparecieran en el fondo, las quite porque no lograba ponerlas de frente o lograr multiplicarlas sin que irrumpieran el codigo, tambien queria hacer un "Dibujo" como tal del tren en vez de ser una imagen, pero era demasiado complejo ver como "line(0,5,10,5....etc" use una imagen que logro simplificarlo y creo que lo mas importante fue que queria ver si podia hacer que musica se reproduciera al correr el codigo, pero no logre hacerlo porque habian muchos problemas, el archivo mp3 era muy grande, los enlaces de youtube no funcionaban, que solo se reproduce musica de la libreria de p5js y cosas asi, por un momento pense en hacer un sample con un fragmento de la cancion o incluso hacer que p5js reproduzca la partitura, pero tomaria demasiado tiempo tener que analizar los instrumentos de poco a poco y no queria quitar parte de la letra solo para algo muy corto, tambien que el fondo cambie de color representando el cambio del dia pero no sabia como hacerlo y que se repitiera sin que pareciera un cambio repentino, o como queria hacer que el sol estuviera con la luna y muchas cosas mas que se quedaron en el tintero o mejor dicho en el codigo, aunque fueron mas fragmentos

- Descubrimientos al trabajar

> Al hacer la Solemne descubri como el orden de las cosas es importante, suena raro pero antes cuando las funciones eran mas simples o no habian funciones que se reproducian constantemente sin cubir el codigo ayuda, tambien descubri que las imagenes funcionan diferentes a los objetos dibujados cuando se una el "mouseX" y "mouseY" ya que interpretan el centro como una esquina de la imagen y creo que descubri que las funciones no son para nada faciles y que muchas veces ni se en que me equivoque y puedo pasar mucho rato revisando el codigo sin exito

## Explicación del código (3 aspectos)

### Bloque de código 1

```js
// function setup() {
  createCanvas(400, 400);
ColorS = color(135,206,235)
ColorN = color (39, 39, 87)
 noStroke();
}
function draw () {


///////AI///////
  if (mouseIsPressed) {
    background(ColorN); 
  } else {
    background(ColorS); 
  }
```
La funcion hace que el fondo cambie al presionar y el cambio desapareza al dejar de presionar el fondo
### Bloque de código 2

```js
// function drawClouds(x,y,spacing,dia){
  
  push();
  translate(x,y);
  
  circle(0,0,dia);// center puff
  circle(-spacing,0,dia);// left puff
  circle(spacing,0,dia);// right puff
  circle(0,-spacing,dia);// upper puff
  
  pop(); 
```
Esta funcion sirve para juntar 3 citculos de diferentes para hacer la forma de una nube, asi permitiendo cargarlas ya formadas en vez de tener que programar cada circulo con una posicion y velocidad definida independientemente
### Bloque de código 3

```js
// if(mostrarLuna ==true){

push()
fill(200,210,180)
ellipse(width/2,height/2,100,100);
noStroke();
  fill(39, 39, 87);
  ellipse(posX,height/2,100,100);
```
Esto tiene un truco, esta funcion hace que cuando la funcion de mantener presionado se ejecute aparezca un circulo como la luna, pero tambien hace otro circulo del color del fondo que se mueve horizontalmente, al ser facilmente confundido en el fondo cusa la ilusion de el cambio de fase de la luna
### Declaración sobre el uso de IA

- IA utilizada(s) y tipo de licencia (pago, gratuita)

> Gemeni AI, Gratis

- Problema a resolver a través de la IA

> Carga de imagen y cambio de color de fondo por un periodo largo

- Prompts utilizados

> en p5js quiero hacer que el color de mi fondo cambie con mantener el click presionado, como lo puedo hacer?

> No me carga la imagen que puse aunque esta esta en el inicio


- Secciones de código entregadas por la IA

```js
//function draw() {
if (mouseIsPressed) {
    background(255, 100, 100); 
    } else {
    background(220); 
  }
function preload(){
  }
```
