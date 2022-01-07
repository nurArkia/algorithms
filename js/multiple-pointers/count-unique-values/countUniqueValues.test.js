"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countUniqueValues_me_1 = require("./countUniqueValues.me");
test('count each value only once', () => {
    expect((0, countUniqueValues_me_1.countUniqueValues)([1, 1, 1, 1, 1, 2])).toBe(2);
    expect((0, countUniqueValues_me_1.countUniqueValues)([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});
test('case empty array ', () => {
    expect((0, countUniqueValues_me_1.countUniqueValues)([])).toBe(0);
});
test('array contains negatives', () => {
    expect((0, countUniqueValues_me_1.countUniqueValues)([-2, -1, -1, 0, 1])).toBe(4);
});
//# sourceMappingURL=countUniqueValues.test.js.map