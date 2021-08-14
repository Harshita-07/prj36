class Food
{
    constructor (){
        var foodStock
        var lastfed
    this.width = width
    this.height = height
    this.x;
    this.y
    this.image = loadImage("Milk.png")
    }

    getfoodStock(){

    }
    updatefoodStock(){

    }
    deductfoosStock(){

    }
    display(){
        imageMode(CENTER);
        image(this.image, 420, 220, 70, 70);

        if(this.foodStock !==0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10 === 0){
                    x=80;
                    y=y+50
                }
                image(this.image, x, y, 70, 70);
                x=x+30;
            }
        }
}
}