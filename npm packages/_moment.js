const moment = require('moment');

let val;

val = moment().format('YYYY-MM-DD');
val = moment('2005-03-05').format('MMMM Do YYYY');
val = moment().format('dddd');
val = moment().format('[The Year is] YYYY');
val = moment('08031970', 'MMDDYYYY').fromNow();
val = moment().endOf('month').fromNow();
val = moment('2017-03-05').subtract(10, 'weeks').calendar();
val = moment('2017-03-05').add(10, 'years').calendar();

console.log(val);
