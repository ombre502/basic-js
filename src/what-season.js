const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const NOARGUMENT = "Unable to determine the time of year!";
const INVALIDDATE = 'Invalid date!';

const SEASONS = { [11]:"winter",[0]:"winter",[1]:"winter", [2]:"spring",[3]:"spring",[4]:"spring",
  [5]:"summer",[6]:"summer",[7]:"summer",[8]:"autumn",[9]:"autumn",[10]:"autumn"};


function getSeason(date ) {


  if (arguments.length<1) return NOARGUMENT;


  if (typeof date !== 'object' ) { return new Error( INVALIDDATE);}
  if ( date == null ) { return new Error( INVALIDDATE);}
  if (!date && isNaN(date.getTime()) ) { return new Error( INVALIDDATE);}


  return SEASONS[date.getMonth()];
}

console.log(getSeason(new Date(2022, 1, 29)));

module.exports = {
  getSeason
};
