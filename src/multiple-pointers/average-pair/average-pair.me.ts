/*
Write a function called averagePair.
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

 Bonus Constraints:
    Time: O(N) Space:
    O(1) Sample Input:

* */

export function averagePair(arr: any[], target: number): boolean {

    // arr length less the 2 return false
    if (arr.length < 2) return false;

    // point to the last and the 1st
    let i = 0,
        j = arr.length - 1;

    let compareResults = 0;

    do {
        // sum them up and divide by 2 then - target (check if the pair avg = target)
        compareResults = (arr[i] + arr[j]) / 2 - target;

        // if zero return true
        if (compareResults == 0)
            return true;
        // if plus then move the upper point down (j--)
        // if negative then move the starter pointer up (i++)
        compareResults > 0 ? --j : ++i;

    } while (i !== j)

    return false;
}