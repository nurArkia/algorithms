import {findLongestSubstring} from "./find-longest-substring.solution";
import {lengthOfLongestSubstring} from "./find-longest-substring.me";

test('test sol', () => {

    /*expect(findLongestSubstring('')).toBe(0);

    expect(findLongestSubstring('rithmschool')).toBe(7);

    expect(findLongestSubstring('thisisawesome')).toBe(6);*/

    expect(findLongestSubstring('thecatinthehat')).toBe(7);

    // expect(findLongestSubstring('bbbbbb')).toBe(1);

    expect(findLongestSubstring('longestsubstring')).toBe(8);

    expect(findLongestSubstring('thisishowwedoit')).toBe(6);
});

test('test of solution with SET', () => {

    expect(lengthOfLongestSubstring('')).toBe(0);

    expect(lengthOfLongestSubstring('rithmschool')).toBe(7);

    expect(lengthOfLongestSubstring('thisisawesome')).toBe(6);

    expect(lengthOfLongestSubstring('thecatinthehat')).toBe(7);

    expect(lengthOfLongestSubstring('bbbbbb')).toBe(1);

    expect(lengthOfLongestSubstring('longestsubstring')).toBe(8);

    expect(lengthOfLongestSubstring('thisishowwedoit')).toBe(6);
})