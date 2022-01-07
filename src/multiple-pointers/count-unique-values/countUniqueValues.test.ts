import { countUniqueValues } from './countUniqueValues.me'

test('count each value only once', () => {

    expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
})

test('case empty array ', () => {
    expect(countUniqueValues([])).toBe(0)
})

test('array contains negatives', () => {
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4)
})

