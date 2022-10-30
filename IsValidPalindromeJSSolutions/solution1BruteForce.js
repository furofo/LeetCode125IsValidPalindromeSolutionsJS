
// my brut force solution
var isPalindrome = function(stringToCheck) {
    let stringToCheckAlphaNumericCharactersRemoved = stringToCheck.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let stringToCheckReversed = '';
     for(let i = stringToCheckAlphaNumericCharactersRemoved.length - 1; i >= 0; i--) {
         stringToCheckReversed += stringToCheckAlphaNumericCharactersRemoved[i];
         
     }
 
     if(stringToCheckReversed== stringToCheckAlphaNumericCharactersRemoved) {
         return true;
        
        }
     else {
         return false;
     }
 };