/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether
the characters in the first string appear somewhere in the second string,
without their order changing.

    Examples:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false  (order matters)

    Your solution MUST have AT LEAST the following complexities:
    Time Complexity - O(N + M)
    Space Complexity - O(1)

* */

/* me: assumption

* */
export function isSubsequence(str1: string, str2: string) {

    // i - pointer for str1
    // j - pointer for str 2
    let i = 0, j = 0;

    // loop with while i < str1.length and j < str2.length
    while (i < str1.length && j < str2.length) {

        // check if str1[i]  = str2[j]
        if (str1[i]  == str2[j]) {
            // equals i++
            i++;
        }

        // always j ++
        j++;
    }


    // Subsequence if i equals str1.length
    return i == str1.length;
}