const secondLargest = arr => {
     let largest =0;
     let secondLargestNumber =0;
     for (let i=0; i<arr.length; i++)  {
         if (largest <  arr[i])  {
             secondLargestNumber=largest;
             largest=arr[i];
         }
         if (largest>arr[i] && secondLargestNumber<arr[i])  {
            secondLargestNumber = arr[i];
         

         }
        }
         return secondLargestNumber;
     };

console.log(secondLargest([1,4,15,13]));