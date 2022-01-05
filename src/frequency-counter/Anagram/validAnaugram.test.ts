import {validAnagram} from './validAnaugram.me';

test('2 empty string are valid Anagram pass', () => {
    expect(validAnagram('', '')).toBe(true);
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