'use strict';

let dateId = getDateId();
console.log(dateId);

function getDateId() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return `${year}${month <= 9 ? 0 + month.toString() : month}${day <= 9 ? 0 + day.toString() : day}${hour <= 9 ? 0 + hour.toString() : hour}${minute <= 9 ? 0 + minute.toString() : minute}`
}