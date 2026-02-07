
// problem no 5

function  analyzeText(str) {
    
    if(typeof str !== 'string'){
        return 'Invalid';
    }
     
    let words = str.split(" ");
    let longestWord = words[0];

    for(let word of words ){
        
        if(word.length > longestWord.length){
            longestWord= word;
        }   

       
    }

     let token = str.split(" ").join("").length;
    
        return {
           longwords: longestWord,
           token :token
        };

}


