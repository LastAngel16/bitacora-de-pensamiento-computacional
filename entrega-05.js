function setup() {
  createCanvas(620, 600);
 colorMode(HSB, 360,100,100)
}

//pese  estar enfermo hice todo lo posible

let tinte = 0


function draw() {
  background(360,65,59);


//dedici hacer uno similar a la clase pero a mi manera aunque no se si salio del todo bien 

//use en dos el tinte por querer experimentar y resulto en un rosa
  


fill( tinte,40,100)


  
  if(tinte > 360){
    tinte = 0
  }
  

//investigue sobre como dinujar una estrella y aproveche entendiendo su codigo para ver si podia cambiarlo de forma en algo interesante
  tinte = tinte + 1;

  translate(width/2, height/2);

//pensaba en hacer que la rotacion tambien le afectara el mouse, funcionaba pero creo que queda mejor solo girando independientemente, aqui el otro

//rotate(mouseX / -100.0);
  
rotate(frameCount / -100.0);


 
//fue complicado editar la estrella, porque no lograba ver cual era la variable correcta pero 

  star(0, 0, mouseX, mouseY, 5);

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);


//al final 

//esto del punto me lo encontre investigando por la estrella, fue algo inesperado pero queria incluirlo porque en sketch de la clase me era bastante raro

push ()
strokeWeight (20)
point (mouseX,mouseY)
pop()
}
