import {averagePair} from "./average-pair.me";

test('check if array has pairs with an average that equals target', () => {

    expect(averagePair([1,2,3],2.5)).toBe(true);

    expect(averagePair([1,3,3,5,6,7,10,12,19],8)).toBe(true);

    expect(averagePair([-1,0,3,4,5,6], 4.1)).toBe(false);

    expect(averagePair([],4)).toBe(false);
})
