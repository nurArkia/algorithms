/*
    Write a function called sameFrequency.
    Given two positive integers, find out if the two numbers have the same frequency of digits.

   Time: O(N)
*/

// the 1st solution that come to my mind
export function sameFrequencyWithSum(num1: number, num2: number): boolean {

    let sum1 = 0, sum2 = 0;

    while(num1 != 0 || num2 != 0) {
        let [remainder, num] = modSumHelper(num1);
        sum1 += remainder;
        num1 = num;

        [remainder, num] = modSumHelper(num2);
        sum2 += remainder;
        num2 = num;
    }

    return  sum1 == sum2;
}

export function modSumHelper(num: number) {
    const remainder = num % 10;
    return [remainder, (num - remainder) / 10 ]
}

import {validAnagram} from '../Anagram/validAnaugram.me'

export function sameFrequency(num1: number, num2: number) {
    // convert the 2 numbers to strings and use the validAnagram solution
    return validAnagram(num1.toString(), num2.toString());
}


