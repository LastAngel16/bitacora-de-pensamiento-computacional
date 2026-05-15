let chibi;
//let pfp;
//Una imagen de mi propio personaje XD

let colorFondo
let colorV
let colorM
let colorB
let colorO
 //Decidi usar varios colores aunque no salio como esperaba
// vamos a cambiar la posicion de akrila
let posX = 0;
let posY = 0;

let dirX = 1;
let dirY = 1;

function setup() {
  createCanvas(400, 400);

  //Intente usar una funcion para hacer una imagen aparecer con "pfp = loadImage("./-mt3jir.jpg");" pero no funciono
 colorF = color(20,20,20);
  colorV = color(144, 238, 144)
  colorM = color(76,40,130)
  colorB = color(0,0,128)
   colorO = color(255, 165, 0)
  chibi = loadImage("./chibi.png");



//function mousePressed(){
 //image(pfp,mouseX,mouseY,100,100);
//Aqui dejo los restos de las ideas que tenia

}

function draw() {
  background(colorF);
  image(chibi, posX, posY, 100, 100);




  //Mantuve la mayoria del codigo original
  posX = posX + 1 * dirX;
  posY = posY + 1 * dirY;
  
  
  

  if (posX > width*4/5  - 100){
    dirX = -random(0,10); //Decidi poner la variable cambiante como "Random", originalmente queria hacer de que fuera por el framerate pero no funciono
  }

  if (posX < width*1/5){
    dirX =  random(0,10); 
  }

 if (posY > 400  - 100){
    dirY = -1; //Cambie posY porque la imagen terminaba rebotando a la mitad y no queria que rebotara en lineas inexistentes o hacer un cubo pequeño
  }
 
  if (posY < 0){
    dirY =  1; 
  }
  
  line(width*1/5, 0, width*1/5,height);
  line(width*4/5, 0, width*4/5,height);

if (posX >width*4/5  - 100){
 colorF = colorV;
//la verdad pensaba que el fondo se mantendria negro al iniciar el codigo, no funciono pero igual fue genial lo que pude hacer
}

if (posX < width*1/5){
 colorF = colorM;

}
//Cuando vi lo mucho que los 2 colores cambiaban por X, pense que seria mejor hacer que tambien cambian por Y con diferentes colores

if (posY > 400  - 100){
   colorF=colorB;
  }
 
  if (posY < 0){
    colorF = colorO
  }
// como ultima cosa queria añadir el efecto de que estuviera rotando pero no lograba hacer que se moviera mientras que siguiera moviendose, pero funciono al final lo que necesitaba

}

