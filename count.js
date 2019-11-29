var arr = [1,2,3,1,2,1,1,2];
var counts = {};
for (var i = 0; i<arr.length; i++)  {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts[1],counts[2]);
