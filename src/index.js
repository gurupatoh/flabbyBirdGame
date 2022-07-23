import Phaser, { Physics } from  'phaser';
const config ={
  type:Phaser.AUTO,
  width :800,
  height:600,
  physics:{
    // arcade physics plugin -manages physics simulations
     default:'arcade',
     arcade:{

     gravity:{y:200} 
     }

  },
  scene:{
     preload,
    create,
    update

  }
}
//loading assets img,sound and animation
function preload(){
  // this context -scene 
  //contains functions and properties we use 
  this.load.image('sky','assets/sky.png')
  this.load.image('bird','assets/bird.png')

}
// instatiating objects -interations etc
let bird = null
let totalDelta = null
function create(){  
  // x
  //y 
  // key of image 
  this.add.image(0,0,'sky').setOrigin(0)
  // middle of the height 
 bird = this.physics.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0)
bird.body.gravity.y=200
 
}
//to =0 px/s
//t1=2000px/s
//t2=400px/s
//t3=600px/s
//60fps-seconds-rendering
function update(time,delta) {
  totalDelta=totalDelta+delta

  if (totalDelta <1000) {
    return  }
    console.log(bird.body.velocity.y)
    totalDelta=0

}
  new Phaser.Game(config);

 