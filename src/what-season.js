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

const SEASONS = { [11]:"winter",[0]:"winter",[1]:"winter", [2]:"spring",[3]:"spring",[4]:"spring",
  [5]:"summer",[6]:"summer",[7]:"summer",[8]:"autumn",[9]:"autumn",[10]:"autumn"};


function getSeason(date ) {


  if (arguments.length<1) return NOARGUMENT;
  // if (!date) { throw new Error ('Invalid date!');}
  // if (typeof date !== 'object' )  { throw new Error ('Invalid date!');}

  // if (isNaN(Date.parse(date)) )  { throw new Error ('Invalid date!');}
  // if ( !(typeof date.getMonth === 'function') )   { throw new Error('Invalid date!');}
  // if ( date.constructor !== Date )   { throw new Error('Invalid date!');}

  // if ( !(Object.prototype.toString.call(date) === '[object Date]') && isNaN(date)  ) { throw new Error ('Invalid date!');}
  try {
    date.toISOString();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  return SEASONS[date.getMonth()];
}



module.exports = {
  getSeason
};
