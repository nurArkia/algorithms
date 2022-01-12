

/*
    inspiration from
    https://www.youtube.com/watch?v=4i6-9IzQHwo
* */

export function lengthOfLongestSubstring(str: string): number {

    // use a set to remove
    let  i = 0, j = 0, longest = 0;
    let set = new Set();
    let char;

    while( i < str.length) {
        char = str[i];

        while (set.has(char)) {
            set.delete(str[j]);
            j++;
        }

        set.add(char);
        longest = Math.max(longest, i - j + 1);
        ++i;
    }

    return longest;

}