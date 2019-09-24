function smallestNumberSum (numbers) {
  var arr = numbers[0];
  for(var i = 0; i <= numbers.length; i++){
    if(numbers[i] < arr){
      arr = numbers[i]
    }
  }

  var secondSmallestNumber = numbers[0];
  for(var n = 1; n <= numbers.length; n++){
    if(numbers[n] != arr){
      if(numbers[n] < secondSmallestNumber){
        secondSmallestNumber = numbers[n];
      }
    }
  }

  let smallestSum = arr + secondSmallestNumber;
  console.log("Answer: " + smallestSum);
}

smallestNumberSum([19, 5, 42, 2, 77]);

let newArr = [];

function smallestStringToLargestString (arr) {
  //for(let i = 0; i < arr.length; i++) {
    //if(arr[i].length < arr[i].length)
      //newArr = arr[i].push();
    //  console.log(newArr);
  //}
  let newArr = arr.sort();
  console.log(newArr);
}

smallestStringToLargestString(["Telescopes", "Glasses", "Eyes", "Monocles"])
