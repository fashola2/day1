const moment = require('moment');
const chalk = require('chalk');
const colors = require('./colors');

//var startTime=moment("12:01:00 am", "HH:mm:ss a");
var startTime=moment().startOf('day')
var endTime=moment();

var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asSeconds());
let time = moment().isDST()
let leap = moment().isLeapYear()

console.log("it is now: " + colors.blue(moment().format('MMMM Do YYYY, h:mm:ss a')));
console.log("it is the " + colors.pink(moment().dayOfYear()) + colors.pink("th") + " day of the year.");
console.log("it is " + colors.blue(hours) + " seconds of the day.");
//console.log(moment.duration(start).asSeconds());
//console.log(moment.duration("2:12:12").asSeconds());
function whoa(text) {
  if (time === true) {
    return ("It " + colors.green("is ") + "Daylight Savings.");
  }
}

console.log(whoa());

function year(text) {
  if (leap === false)
  return ("It" + colors.red(" is not") + " Leap Year.")
}
console.log(year());
