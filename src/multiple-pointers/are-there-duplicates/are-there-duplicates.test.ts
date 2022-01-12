import { areThereDuplicatesByMultiPointers } from './are-there-duplicates.me';

test('are There Duplicates in the passed arguments', () => {

    // @ts-ignore
    expect(areThereDuplicatesByMultiPointers(1, 2, 3))
        .toBe(false)

    // @ts-ignore
    expect(areThereDuplicatesByMultiPointers(1, 2, 2))
       .toBe(true)

    // @ts-ignore
    expect(areThereDuplicatesByMultiPointers('a', 'b', 'c', 'a'))
        .toBe(true)
})



