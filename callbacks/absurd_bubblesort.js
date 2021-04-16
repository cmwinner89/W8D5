const reader = require('readline');
let rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
    rl.question(`Is ${el1} greater than ${el2} (yes or no): `, function(answer){
        if(answer === 'yes'){
            callback(true);
        } else {
            callback(false);
        }
        // rl.close();
    });
}

function innerBubbleSortLoop(arr, i=0, madeAnySwaps=false, outerBubbleSortLoop){
    
    if (i < arr.length-1){
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if(isGreaterThan){
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
               madeAnySwaps = true;
            } 
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else if(i == (arr.length - 1)){
        outerBubbleSortLoop(madeAnySwaps);
        // console.log(arr);
        // console.log("outerbubbleSort");
        //may need to move
    }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
      if(madeAnySwaps){
         
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
      } else {
        //   rl.close();
          return sortCompletionCallback(arr);
      }
    }
  
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true);
}
  
// innerBubbleSortLoop([5,1,7,3,8], 0);

// askIfGreaterThan(2, 1, function(bool){
//     console.log(bool);
// });
absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
  });