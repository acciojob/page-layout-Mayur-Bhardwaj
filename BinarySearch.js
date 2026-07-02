function binaryearch(arr, target){
  let low = 0;
  let high = arr.length-1;

  while(low <= high){
    let mid = parseInt((low + high)/2);

    if(arr[mid] === target){
        return mid;
    } else if(arr[mid] < target){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
let arr = [2,4,6,8,10,12,14];
console.log(binaryearch(arr,10));  //4