"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validAnaugram_me_1 = require("./validAnaugram.me");
test('2 empty string are valid Anagram pass', () => {
    expect((0, validAnaugram_me_1.validAnagram)('', '')).toBe(true);
});
/*
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

* */ 
//# sourceMappingURL=validAnaugram.test.js.map