function numberType(num){
    if(num>0){

        console.log(num+" is greater than zero");
    }else if(num<0){
        console.log(num+" is less than zero");
    }else if(num===0){
        console.log(num+" is equal to zero");
    }else{
        console.log("Input is not valid number");
        
    }
}
//check the number is postive, negative or zero 
numberType(50);