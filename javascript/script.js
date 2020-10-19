function submitted(){

const myForm = document.getElementById("myForm")

var v = document.getElementById('type').value;
var w = document.getElementById('toppings').value;
var x = document.getElementById('size').value;
var y = document.getElementById('crusts').value;
var z = document.getElementById('orders').value;
var yes = document.getElementById('YES').value;
var no = document.getElementById('NO').value;

if(v === "Hunter's Delight" && x === "Hunter's Delight Large"){price = 800;}
else if (v === "Hunter's Delight" && x === "Hunter's Delight Medium") {
  price = 650;
}
else if (v === "Hunter's Delight" && x === "Hunter's Delight Small") {
  price = 500;
}
break;
if(v === "Chicken Raid" && x === "Chicken Raid Large"){price = 700;}
else if (v === "Chicken Raid" && x === "Chicken Raid Medium") {
  price = 600;
}
else if (v === "Chicken Raid" && x === "Chicken Raid Small") {
  price = 500;
}
break;
if(v === "Veggie Seekers" && x === "Veggie Seekers Large"){price = 600;}
else if (v === "Veggie Seekers" && x === "Veggie Seekers Medium") {
  price = 500;
}
else if (v === "Veggie Seekers" && x === "Veggie Seekers Small") {
  price = 400;
}



alert("YOUR ORDER WAS"+ " "+ v + " "+ w + " "+ x + " "+ y + " "+ z + " " + "TOTAL COST OF YOUR ORDER IS" + "" + price) }
