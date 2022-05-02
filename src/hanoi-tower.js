const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

function calculateHanoi( disksNumber, turnsSpeed ) {
let k = 3600/turnsSpeed;
let countTurns=0;
let arr=[0,1,3];
let returnObject = { turns: 0, seconds: 0 };

  for (let i=2; i<disksNumber;i++){
    countTurns+=Math.pow(2, i);
  }

  if ( disksNumber < 3 ) return { turns: arr[disksNumber], seconds: Math.floor(arr[disksNumber]*k) } ;
  return  { turns:countTurns+3, seconds: Math.floor( (countTurns+3)*k )};
}

module.exports = {
  calculateHanoi
};
