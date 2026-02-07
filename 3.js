
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

