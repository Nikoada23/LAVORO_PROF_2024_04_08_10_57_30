/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/
var mySkybox;

function preload() {
  mySkybox = loadImage("bosco.jpg");
}

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  getOrbit().autoRotate = true;
  background3D("lightblue");
    environment(mySkybox);
    setCamera(0,10,15);

  
  
  diffuse("green");
  let albero= beginGroup();
  roughness(0.1);
  pushFX(BLOOM);
  sphere(0, 3, 0,2);
  diffuse("green");
  icosahedron(0,3,0,2.295)
  align(TOP);
  diffuse ("brown");
  cylinder (0,0,0,0.8,2.5);
  endGroup();
  
let lato = 100;
  align(BOTTOM);
  diffuse("rgb(63,144,63)")
  box(0,0,0,lato,1,lato);
  
  for(let i = 0; i < 200; i++){
    let x = random(-lato/2,lato/2);
        let z = random(-lato/2,lato/2);
    let nuovoAlbero = clone(albero,x,0,z);
    let scala = random(0.5,1.8);
    nuovoAlbero.setScale(scala);
    
  }
  
  

    
  

  
  
 
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
function windowResized (){
  resizeCanvas3D(windowWidth, windowHeight)

}