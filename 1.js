
// problem no 1

function newPrice(currentPrice , discount ) {
         if(typeof currentPrice !== 'number' ||  typeof discount !== 'number' || discount < 0 || discount > 100){
            return 'Invalid';
         }

         else{
           
            let discountPrice = (currentPrice*discount)/100 ;
           
           let afterDiscountPrice = currentPrice - discountPrice;
            return afterDiscountPrice.toFixed(3);
         }

        
}



// Problem No 2

function validOtp(otp) {
    
    if(typeof otp !== 'string'){
        return 'Invalid';
    }

    if(otp.length !== 8){
        return false;
    }

    if(!otp.startsWith('ph-')){
        return false;
    }


    return true;

}





// problem no 3

function finalScore (omr) {
    
    if(typeof omr !== 'object' || omr === null){
        return 'Invalid';
    }

    if(typeof omr.right !== 'number' || typeof omr.wrong !== 'number' || typeof omr.skip !== 'number'){
        return 'Invalid';
    }

    if(omr.right + omr.wrong + omr.skip !== 100){
        return 'Invalid';
    } 

    let right = omr.right*1;
    let wrong = omr.wrong* (-0.5);
    let score = right + wrong;

    return Math.round(score);

}




// problem no 4

function gonoVote(array) {
         
    if(!Array.isArray(array)){
        return 'Invalid';
    }

    let ha=0;
    let na=0;

    for(let i = 0; i<array.length; i++){

        if(array[i] === 'ha'){
            ha++;
        }
        else if(array[i] === 'na'){
            na++;
        }
        else{

        }
    }

    if(ha>na){
        return true;
    }
    else if(ha == na){
        return 'equal';
    }
    else{
        return false
    }
        
}

