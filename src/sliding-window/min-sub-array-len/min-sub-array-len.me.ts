/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen
which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of
which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Examples:
    minSubArrayLen([2,3,1,2,4,3], 7) // 2 - because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 - because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 - because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

    Time Complexity - O(n)
    Space Complexity - O(1)
* */


/*
    [2,3,1,2,4,3]
     [2,3,1] = 8, 4
        [3,1,2] = 6 , 3
          [1,2,4] = 7 Y
          [2,4] = 6 X
          [4,3] = 7 Y <=

  start summing the array
    tempSum+= arr[i]
    minLen++
     if tempSum >= num
         break;
  loop end

  if tempSum < num return 0;

  loop again with i = minLen
   // remove a value fro m n
     tempSum = tempSum - array[i - maxLength]


* */
/*
 create a window from the start of the array
    then shrinking it (remove the 1st index e.g. [1,2,3] => remove 1, result [2,3])

    if the sum of all the window are still smaller then num
        return 0

    if the sum of the shrieked window still valid(in this case >= num)
        decrease the len of the window then loop again
    else
        move the window in the array by adding the next number [2,3] => [3,4]
* */
export function minSubArrayLen(array: number[], num: number): number {

    let minLen = 0;
    let tempSum = 0;

    // start summing the array
    for (let i = 0; i < array.length; i++) {
        tempSum += array[i];
        minLen++

        if (tempSum >= num)
            break;
    }

    // if tempSum < num return 0;
    if (tempSum < num) return 0;

    // loop again with i = minLen
    for (let i = 0; i < array.length - 1; i++) {

        tempSum = tempSum - array[i];

        if (tempSum >= num) {
            minLen--;
            continue;
        }

        tempSum = tempSum + array[i + minLen];
    }

    return minLen
}