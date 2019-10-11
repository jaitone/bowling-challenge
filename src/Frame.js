function Frame() {

  this.frames = 10;
  this.currentFrame = 2
  this.pins = 10
  this.score = 0
}

Frame.prototype.firstRoll = function(roll){
  this.currentFrame -= 1
  roll + this.score
}






