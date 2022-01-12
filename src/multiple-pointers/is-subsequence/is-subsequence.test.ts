import {isSubsequence} from "./is-subsequence.me";

test('is 1st string Subsequence of the 2nd string ', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    expect(isSubsequence('abc', 'acb')).toBe(false);
})