import {app} from './app';

test(`test jest set up`, () => {
    const lib = 'jest';
    expect(app(lib)).toBe(`${lib} is working!!!`);
})