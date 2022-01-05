"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
test(`test jest set up`, () => {
    const lib = 'jest';
    expect((0, app_1.app)(lib)).toBe(`${lib} is working!!!`);
});
//# sourceMappingURL=app.test.js.map