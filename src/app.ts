import {validAnagram} from './frequency-counter/Anagram/validAnaugram.me'


export function app(lib: string) {
    return `${lib} is working!!!`
}

console.log(validAnagram('asd','dsa'));
console.log(validAnagram('asd2','dsa1'));

