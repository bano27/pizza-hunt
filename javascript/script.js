//ordering form

function submitted(){

var v = document.getElementById('type').value;
var w = document.getElementById('toppings').value;
var x = document.getElementById('size').value;
var y = document.getElementById('crusts').value;
var z = parseInt(document.getElementById('orders').value);
var delivery = document.getElementsByName('Deliveries');
var hSmall = 500;
var hMedium = 650;
var hLarge = 800;
var cSmall = 500;
var cMedium = 600;
var cLarge = 700;
var vSmall = 400;
var vMedium = 500;
var vLarge = 600;
var a = 200;
var b = 100;
var c = 50;
var d = 500;
var price;

if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( hSmall * z ) + c + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( hMedium * z ) + c + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( hLarge * z ) + c + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( cSmall * z ) + c + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( cMedium * z ) + c + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( cLarge * z ) + c + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( vSmall * z ) + c + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( vMedium * z ) + c + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Fisherman Smile" && delivery[0].checked) {
  price = ( ( vLarge * z ) + c + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( hSmall * z ) + a + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( hMedium * z ) + a + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( hLarge * z ) + a + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( cSmall * z ) + a + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( cMedium * z ) + a + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( cLarge * z ) + a + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( vSmall * z ) + a + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( vMedium * z ) + a + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Canine Nightmare" && delivery[0].checked) {
  price = ( ( vLarge * z ) + a + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( hSmall * z ) + b + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( hMedium * z ) + b + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( hLarge * z ) + b + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( cSmall * z ) + b + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( cMedium * z ) + b + d );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( cLarge * z ) + b + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( vSmall * z ) + b + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( vMedium * z ) + b + d );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Rhino Hide" && delivery[0].checked) {
  price = ( ( vLarge * z ) + b + d );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( hSmall * z ) + c );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( hMedium * z ) + c );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( hLarge * z ) + c );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( cSmall * z ) + c );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( cMedium * z ) + c );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( cLarge * z ) + c );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( vSmall * z ) + c );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( vMedium * z ) + c );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Fisherman Smile" && delivery[1].checked) {
  price = ( ( vLarge * z ) + c );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( hSmall * z ) + a );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( hMedium * z ) + a );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( hLarge * z ) + a );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( cSmall * z ) + a );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( cMedium * z ) + a );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( cLarge * z ) + a );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( vSmall * z ) + a );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( vMedium * z ) + a );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Canine Nightmare" && delivery[1].checked) {
  price = ( ( vLarge * z ) + a );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Small" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( hSmall * z ) + b );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Medium" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( hMedium * z ) + b );
}
else if ( w == "Hunter's Delight toppings" && x == "Hunter's Delight Large" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( hLarge * z ) + b );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Small" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( cSmall * z ) + b );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Medium" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( cMedium * z ) + b );
}
else if ( w == "Chicken Raid toppings" && x == "Chicken Raid Large" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( cLarge * z ) + b );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Small" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( vSmall * z ) + b );
}
else if ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Medium" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( vMedium * z ) + b );
}
else ( w == "Veggie Seekers toppings" && x == "Veggie Seekers Large" && y == "Rhino Hide" && delivery[1].checked) {
  price = ( ( vLarge * z ) + b );
}

document.querySelector("#summary").innerhtml = price;

}

//delivery form

function submit(){

var name = document.getElementById('name').value;
var pNumber = document.getElementById('pNumber').value;
var location = document.getElementById('locate').value;

alert("Hello " + name + " " + "you will recieve your delivery at " + location + " " + "we shall use this " + pNumber + " to communicate with you");

}
