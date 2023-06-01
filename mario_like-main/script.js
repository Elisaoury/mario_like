import {zone_1} from "./assets/zone_1.js";


var config = 
{
    type: Phaser.AUTO,
        scale:{
            width: 1200, 
            height: 900,

    },
    

    physics: {
        default: 'arcade',
        arcade: 
        {
            gravity: { y:300},
            debug: true
        }
    },
    
    scene:[zone_1]


};

new Phaser.Game(config);




                    


          
