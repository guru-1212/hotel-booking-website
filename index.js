function download() {
  window.print();
}

function bill() {
  var customername = document.getElementById("inputname").value;
  document.getElementById("customername").innerHTML = customername;

  var date = document.getElementById("inputdate").value;
  document.getElementById("date").innerHTML = date;

  var days = document.getElementById("inputnumberofday").value;
  document.getElementById("totaldays").innerHTML = days;

  var people = document.getElementById("inputnoumberofpeople").value;
  document.getElementById("totalpeople").innerHTML = people;

  var roomcharge = 0;
  var room = "";
  var amenitiescharge = 0;
  var accharge = 0;
  var lockercharge = 0;
  var faslities = "";

  var ttdayss = document.getElementById("inputnumberofday").value;
  var ttdaysrup = (document.getElementById("tottaldays").innerHTML =
    ttdayss + "You hve to pay double");
  var abc = 1;

  abc *= ttdayss;

  //  var ttperson = document.getElementById("inputnoumberofpeople").value;
  // var ttpersonprice = document.getElementById("totalpeople").innerHTML = ttdayss+"  "+"X"+" "+"Tottal payble amount";
  // var  abc2=1;

  // abc2 += ttperson;

  deluxradio = document.getElementById("DeluxRoom");
  suitradio = document.getElementById("SuitRoom");

  if (deluxradio.checked) {
    roomcharge = 2500;
    room = "Delux room";
  } else if (suitradio.checked) {
    roomcharge = 4000;
    room = "Suit Room";
  }

  document.getElementById("deluxroomcharge").innerHTML = "₹" + roomcharge;
  document.getElementById("room").innerHTML = room;

  accharge = document.getElementById("AC");
  lockercharge = document.getElementById("Locker");

  if ((accharge && lockercharge).checked) {
    amenitiescharge = 1300;
    faslities = "A/C & locker both";
  } else if (accharge.checked) {
    faslities = "A/C";
    amenitiescharge = 1000;
  } else if (lockercharge.checked) {
    amenitiescharge = 300;
    faslities = "Locker";
  }

  // document.getElementById("accharge").innerHTML = "₹"+accharge;
  // document.getElementById("lockercharge").innerHTML = "₹"+lockercharge;
  document.getElementById("amenities").innerHTML = "₹" + amenitiescharge;
  document.getElementById("faslities").innerHTML = faslities;

  var advamount = parseInt(document.getElementById("advanceamount").value);
  var advancerupe = (document.getElementById("advance").innerHTML = advamount);
  var adv = parseInt(advancerupe);

  var tottalamount = roomcharge + amenitiescharge + adv;

  tottalamount *= abc;

  // tottalamount +=abc2;

  // var numdays= document.getElementById("inputnumberofday").value;
  // document.getElementById("tottaldays").innerHTML=numdays;
  // var ttldays=numdays*tottalamount;

  document.getElementById("tottalamount").innerHTML = "₹" + tottalamount;
}

var d = setInterval(time, 1000);
function time() {
  var a = new Date();
  var b = document.getElementById("time");
  b.innerHTML = a.toLocaleTimeString();
}





