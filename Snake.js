var score = 0;

class Snake {
    constructor(){
    
    this.body = [];    
    this.x = 20;
    this.y = 20; 
    this.xspeed = 0;
    this.yspeed = 0;
    this.length = 0; 
    }
    
 
update(){
    if(this.length === this.body.length){
      for(var i=0; i<this.body.length-1; i++){
          this.body[i] = this.body[i+1];
      } 
    } 

      this.body[this.length-1] = createVector(this.x , this.y);

      this.x = this.x + this.xspeed*scl;
      this.y = this.y + this.yspeed*scl;

      this.x = constrain(this.x , 0, width-scl);
      this.y = constrain(this.y , 0, height-scl);
  }

  death(){
       for(var i=0 ; i<this.body.length ;i++){
          var pos = this.body[i];
          var d = dist(this.x , this.y , pos.x , pos.y);

          if(d<1 ){
            this.length = 0;
            this.body = [];
            
            background("RED");
            noLoop();
            fill("yellow");
            text("GAME OVER", 150,200);
        }
       }
      
       
  }
 
eat(pos){
    var d = dist(this.x , this.y , pos.x , pos.y);
    if(d<1){
        this.length++;
        score = score+2;
        return true;
    }
    else{
        return false;
    }
}  


dir(x,y){
    this.xspeed = x;
    this.yspeed = y;
}

show(){
     fill("blue");
     for(var i=0; i<this.body.length; i++){
     rect(this.body[i].x , this.body[i].y , scl , scl);
     }
     rect(this.x , this.y , scl,scl);
}
}

