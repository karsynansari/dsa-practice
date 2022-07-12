//pattern: multiple pointers
//write a function which accepts an array of integers and a number, n. the function should calculate the maximum sum of n consecutive elements in the array. 

function maxSubarraySum(arr, num) {
  let maxSum=0
  let tempSum=0

if (arr.length < num) return null
//loop through the array num 
//of times & set maxSum to 
//val of all els in that condition
for(let i=0; i<num; i++) {
  console.log(num)
  maxSum += arr[i]
  console.log(arr[i])
}
//assign tempSum the current val
//of maxSum
tempSum = maxSum
//loop through the arr starting
//at num
for(let i=num; i<arr.length; i++) {
  //set tempSum equal to the va
//of tempSum - arr @ i - num plus val
//of arr[i]
  tempSum = tempSum - arr[i - num] + arr[i]; 
//set the maxSum equal to 
//the maxSum or tempSum, whichever is largest
maxSum = Math.max(maxSum, tempSum); 
}

return maxSum 
}

maxSubarraySum([5,2,3,7,1,7,2],2)