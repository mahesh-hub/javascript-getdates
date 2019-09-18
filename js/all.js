function timeType() {
    var d = new Date();
    console.log(d.getTime());
}
function yearDataType() {
    var d = new Date();
    console.log(d.getFullYear());
}
function monthDisplay() {
    var d = new Date();
    console.log(d.getMonth() + 1);
}
function monthName() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[d.getMonth()]);
}
function dayWithNumber() {
    var d = new Date();
    console.log(d.getDate());
}
function hoursWithNumber() {
    var d = new Date();
    console.log(d.getHours());
}
function minutesNumber() {
    var d = new Date();
    console.log(d.getMinutes());
}
function secondsNumbers() {
    var d = new Date();
    console.log(d.getSeconds());
}