 function pairs(arr)  {
    let result = [];
    for (let i=0; i<arr.length-1; i++) 
     {
         result.push([arr[i],arr[i+1]]);
    }
    return result;
};
console.log(pairs([1,2,3,4,5]))