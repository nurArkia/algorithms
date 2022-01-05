"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validAnagram = void 0;
function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    if (str1 == str2) {
        return true;
    }
    const counter1 = {};
    const counter2 = {};
    for (let i = 0; i < str1.length; i++) {
        let key = str1[i];
        counter1[key] = (counter1[key] || 0) + 1;
        key = str2[i];
        counter2[key] = (counter2[key] || 0) + 1;
    }
    for (const key in counter1) {
        if (counter2[key] != counter1[key]) {
            return false;
        }
    }
    return true;
}
exports.validAnagram = validAnagram;
//# sourceMappingURL=validAnaugram.me.js.map