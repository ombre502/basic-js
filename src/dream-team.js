const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (typeof members !=='object' || members ===null) return false;
  if ( members.length == 0 ) return false;
  let resultString = '';
  for (let i=0; i<members.length;i++){
    if ( typeof members[i] !== 'string') continue;
      if ( members[i].length<1) continue;
        // if  (members[i][0]>0 && members[i][0]<9)
        {
          resultString+=getFirstLetter(members[i]);
        }

  }

  if (resultString.length) return sortSrt(resultString);
  return false;
}

function sortSrt(str){
  let a="",b="";
  if (!str.length) { return "";  }
  let p = str[0];
  for(let i=1; i<str.length;i++)
    if (p<str[i]) { b+=str[i];}
    else {a+=str[i];}
  return sortSrt(a)+p+sortSrt(b);
}

function getFirstLetter(str){
  let i;
  for (i=0;i<str.length-1;i++){
    if (str[i] !== ' ') {break};
  }
  return str[i].toUpperCase();
}

module.exports = {
  createDreamTeam
};
