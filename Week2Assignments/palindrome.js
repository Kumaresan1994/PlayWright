//let testname ='TestLeaf';
function palindrome(testname) {
    let charArray = testname.split("");
    console.log(charArray);
    let reverse="";
    for(let i=charArray.length-1;i>=0;i--){

        reverse = reverse+testname.charAt(i);
    }
    const isPalindrome = testname.toLowerCase() === reverse.toLowerCase();
    console.log(isPalindrome);
    return reverse;
}
palindrome("Radar");


