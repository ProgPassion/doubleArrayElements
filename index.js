const numbers = [1, 2, 3];

function double([num, ...numbers]) {

     if(numbers.length > 0) {
         let doubledArray = double(numbers);
         return [num * 2, ...doubledArray];
     }
     return [num * 2, ...numbers];
}
