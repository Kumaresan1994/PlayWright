function isAnagram(num1,num2){

    if(num1.length!=num2.length){

        return false;
    }

     // Sort the characters in both strings and compare
     const sortedNum1 = num1.split('').sort().join('');
     const sortedNum2 = num2.split('').sort().join('');
 
     return sortedNum1 === sortedNum2;
}
//Print output
console.log(`Output for isAnagram('listen','silent') : `+isAnagram('listen','silent'));
console.log(`Output for isAnagram('hello','world') : `+isAnagram('hello','world'));