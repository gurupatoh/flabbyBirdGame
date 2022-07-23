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
const VELOCITY =200
function create(){  
  // x
  //y 
  // key of image 
  this.add.image(0,0,'sky').setOrigin(0)
  // middle of the height 
 bird = this.physics.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0)
 this.input.on('pointerdown',flap)
 this.input.keyboard.on('keydown_SPACE',flap)

}

//to =0 px/s
//t1=2000px/s
//t2=400px/s
//t3=600px/s
//60fps-seconds-rendering
// if bird position x is same or larger than width of canvas go back to the left 
// if bird position is smaller or equal to 0 then to the right back 
function update(time,delta) {


  
}
function flap() {
  bird.body.velocity.y=-VELOCITY
  
}
  new Phaser.Game(config);

 