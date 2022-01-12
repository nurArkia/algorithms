import { sameFrequency, sameFrequencyWithSum, modSumHelper } from './same-frequency.me';

test('the 2 numbers have same frequency by reusing validAnagram', () => {
    expect(sameFrequency(182,281)).toBe(true);
    expect(sameFrequency(34,14)).toBe(false);
    expect(sameFrequency(0,0)).toBe(true);
    expect(sameFrequency(3589578,5879385)).toBe(true);
    expect(sameFrequency(22,222)).toBe(false);
});


test('sum method - the 2 numbers have same frequency',() =>{
    expect(sameFrequencyWithSum(182,281)).toBe(true);
    expect(sameFrequencyWithSum(34,14)).toBe(false);
    expect(sameFrequencyWithSum(0,0)).toBe(true);
    expect(sameFrequencyWithSum(3589578,5879385)).toBe(true);
    expect(sameFrequencyWithSum(22,222)).toBe(false);
});

test('mod sum helper - return array with remainder and the number after removing the min digit ', () => {
    expect(
        modSumHelper(33)
    ).toStrictEqual([3,3]);

    expect(
        modSumHelper(14)
    ).toStrictEqual([4,1])
})

test('mod sum helper - when zero return 0 in remainder and result ', () => {
    expect(
        modSumHelper(0)
    ).toStrictEqual([0,0]);
})

