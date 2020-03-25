var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();


function submitFunction() {
  var userName = document.getElementById("userName").value;
  var subName = document.getElementById("subName").value;
  var num_months = document.getElementById("mm").value;
  var num_days = document.getElementById("dd").value;
  var num_hours = document.getElementById("hh").value;
  var email = document.getElementById("email").value;
}


var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  userName = document.getElementById("userName");
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);