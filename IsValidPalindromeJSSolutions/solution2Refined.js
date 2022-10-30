//refined solution
var isPalindrome = function(stringToCheck) {
    let stringToCheckAlphaNumericCharactersRemoved = stringToCheck.replace(/[^a-z0-9]/gi, '').toLowerCase();
     for(let i = 0, j = stringToCheckAlphaNumericCharactersRemoved.length -1 ;
         i <= stringToCheckAlphaNumericCharactersRemoved.length;
         i++, j--) {
          if (i < j) {
              if ( stringToCheckAlphaNumericCharactersRemoved[i] != stringToCheckAlphaNumericCharactersRemoved[j]) {
                 return false;
                  }
          }
     }
     return true;
 };