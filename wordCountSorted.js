
function wordCountEngine(document) {
  let dictionary = {};
  let punctuation = {
    ",":",",
    ".":".",
    "'": "'",
    "!": "!"
  };
  let maxVal = -Infinity;

  let splitDocument = document.split(" ");
  let wordsWithoutPunctuation = splitDocument.map((word)=>{
    let lowerCaseWord = word.toLowerCase();
    let newWord = "";
    for(let k = 0; k < word.length; k++){
      if(!punctuation[lowerCaseWord[k]]){
        newWord += lowerCaseWord[k];
      }
    }
    
    if(dictionary[newWord]) {
      dictionary[newWord]++;
      if(dictionary[newWord] > maxVal){
        maxVal = dictionary[newWord];
      }
    } else {
      dictionary[newWord] = 1;
    }
    
  });
  
  let countHash = {};
  let numericVal;
  
  for(let key in dictionary) {
     numericVal = dictionary[key];

     if(countHash[numericVal]){
       countHash[numericVal].push([key, numericVal]);
     } else {
       countHash[numericVal] = [[key, numericVal]];
     }
   } 
  }  

  for(let key2 in countHash) {
    countHash[key2].sort((a, b)=>{
       if(a[0] > b[0]){
         return 1;
       } else if (b[0] > a[0]) {
         return -1;
       } else {
         return 0;
       }
    });
  }

  let finalResult = [];
  
  for (let i = maxVal; i > 0; i--){
    if(countHash[i].length > 1) {
      finalResult.push(...countHash[i]);
    } else if (countHash[i].length === 1){
      finalResult.push(countHash[i].pop());
    }
  }
  return finalResult; 
}



