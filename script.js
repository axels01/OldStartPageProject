var tday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function GetClock() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds(),
    ap;

  var ndatefollow = "th";

  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }

  if (ndate == 1) {
    ndatefollow = "st";
  } else if (ndate == 21) {
    ndatefollow = "st";
  } else if (ndate == 31) {
    ndatefollow = "st";
  } else if (ndate == 2) {
    ndatefollow = "nd";
  } else if (ndate == 22) {
    ndatefollow = "nd";
  } else if (ndate == 3) {
    ndatefollow = "rd";
  } else if (ndate == 23) {
    ndatefollow = "rd";
  } else {
    ndatefollow = "th";
  }

  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  var clocktext =
    "" +
    tday[nday] +
    ", " +
    tmonth[nmonth] +
    " " +
    ndate +
    ndatefollow +
    " " +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    ap +
    "";
  document.getElementById("clockbox").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);
