class Circle {
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2;
  }

  set diameter(newDia){
    this.radius = newDia/2;
  }

  get circumference(){
    return Math.PI * (this.radius *2);
  }

  set circumference(newCircum) {
    this.radius = (( newCircum / Math.PI )/2);
  }

  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set area(newRadius) {
    this.radius = newRadius;
    return Math.PI * (this.radius * this.radius);
  }

}
