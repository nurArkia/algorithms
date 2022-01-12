import { areThereDuplicates } from './are-there-duplicates.me';

test('are There Duplicates in the passed arguments', () => {

    // @ts-ignore
    expect(areThereDuplicates(1, 2, 3))
        .toBe(false)

    // @ts-ignore
    expect(areThereDuplicates(1, 2, 2))
        .toBe(true)

    // @ts-ignore
    expect(areThereDuplicates('a', 'b', 'c', 'a'))
        .toBe(true)
})



