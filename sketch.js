//Create variables here
var dog, happyDog, foodS, foodStock, database, foodObj, lastfed, fedtime

function preload(){ 
  dogImg=loadImage("dogImg.png"); 
  dogImg1=loadImage("dogImg1.png"); 
}

function setup() {
	createCanvas(500, 650);
  dog = createSprite(250, 550, 20, 20)
  dog.addImage(dogImg);
  dog.scale=0.3;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

fedtime = database.ref('feedTime');
fedtime.on("value", function(data){
  lastfed = data.val();
})

  foodObj = new Food(200, 200, 20, 30)
 
}


function draw() {  
  background(46, 139, 87)
  var button1 = createButton("Add Food")
button1.position(380, 140)
button1.mousePressed(addfoods(foodS))
var button2 = createButton(" Feed Dargo ")
button2.position (420, 140)
button2.mousePressed(feedDog)

foodObj.display();

fill(255, 255, 254)
textSize (15)
if(lastfed>=12){
  text("last fed : "+lastfed%12 +"PM", 350, 30)
}
else if(lastfed===0){
  text( "last fed : 12 AM", 350, 30)
}
else {
  text("last fed : "+lastfed +"AM", 350, 30)
}

  drawSprites();
  //add styles here
textSize(18)
fill('black')
stroke(4)
text('NOTE : press up arrow key to feed dargo milk', 10, 40)
text ('food remaining : '+ foodS, 10, 70)
}

function readStock(data) {
  foodS = data.val();
}

/*function writeStoke(x){
  if(x<=20 && x>0){
    x=x-1
  }
  else {
    x=0;
  }
  database.ref('/').update({
    Food:x
  })
}*/

function feedDog(){
  dog.addImage(dogImg1);
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedtime:hour()
  })
}

function addfoods(x){
    x=x+1
    database.ref('/').update({
    Food:x
  })
}


