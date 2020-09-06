var myVar = setInterval(hours, 1000);

function hours() {
  var date = new Date();
  var getHours = date.getHours();
  var getMinutes = date.getMinutes();
  var getSeconds = date.getSeconds();

  document.getElementById("getDate").innerHTML =
    "Today is " + date.toDateString();
  document.getElementById("hours").innerHTML = getHours;
  document.getElementById("minutes").innerHTML = getMinutes;
  document.getElementById("seconds").innerHTML = getSeconds;
// Added a if statement to add leading 0 when the time is displaying single digits.
  if (getHours < 10) {
    document.getElementById("hours").innerHTML = "0" + getHours;
  }
  if (getMinutes < 10) {
    document.getElementById("minutes").innerHTML = "0" + getMinutes;
  }
  if (getSeconds < 10) {
    document.getElementById("seconds").innerHTML = "0" + getSeconds;
  }
}
