const input1 = "Hello World";
const input2 =' fly me to the moon';
function lengthOfLastWord(s) {
    // Trim the string spaces
    s = s.trim();
    
    // Split the string into words
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
}
//Print output
const output1 = lengthOfLastWord(input1);
const output2 = lengthOfLastWord(input2);
console.log('Length of last word : '+output1);
console.log('Length of last word : '+output2);
 
