"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const validAnaugram_me_1 = require("./frequency-counter/Anagram/validAnaugram.me");
function app(lib) {
    return `${lib} is working!!!`;
}
exports.app = app;
console.log((0, validAnaugram_me_1.validAnagram)('asd', 'dsa'));
console.log((0, validAnaugram_me_1.validAnagram)('asd2', 'dsa1'));
//# sourceMappingURL=app.js.map