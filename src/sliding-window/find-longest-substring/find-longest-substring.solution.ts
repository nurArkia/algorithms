

/*
* 10/01/2021 - don't think of this way + hard to understand solution at 1st ...
* 12/01/2021 - was able to understand it!!! :)
* */
export function findLongestSubstring(str: string) {
    let longest = 0;
    let seen: any = {};
    let start = 0; // beginning of substring

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (seen[char]) {
            /*
            *  start = seen[char] > start ? seen[char] : start
            * seen[char] > start => is the char already in the current substring counting
            * */
            start = Math.max(start, seen[char])
        }

        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);

        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }

    return longest;
}
