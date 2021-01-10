var campic,mappic,callpic,micpic;
var cam,mic,call1,map1;

var player;

function preload(){
campic = loadImage("images/camera.png")
mappic=loadImage("images/mapk.png")
callpic=loadImage("images/call.png")
micpic=loadImage("images/mic.png")

player= new Player();

}

function setup() {
  createCanvas(400,400);

  cam=createSprite(150,150,10,10);
  cam.addImage("camera1",campic);
  cam.scale=0.2
  mic=createSprite(250,150,10,10);
  mic.addImage("micro",micpic);
  mic.scale=0.2
  call1=createSprite(150,250,10,10);
  call1.addImage("call1",callpic);
  call1.scale=0.02
  map1=createSprite(350,250,10,10);
  map1.addImage("map1",mappic);
  map1.scale=0.1
  

  
}

function draw() {
  background("skyblue");

  if(mousePressedOver(cam)){
    text("hello",200,200)
  }
 if (mousePressedOver(map1)){
   player.showPosition()
 }
  drawSprites();
}

function showMap(position) {
  // Get location data
  lat = position.coords.latitude;
  long = position.coords.longitude;
  var latlong = new google.maps.LatLng(lat, long);
  
  var myOptions = {
      center: latlong,
      zoom: 16,
      mapTypeControl: true,
      navigationControlOptions: {
          style:google.maps.NavigationControlStyle.SMALL
      }
  }
  
  var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
  var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}
