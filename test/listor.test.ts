import { listor } from '../src';

describe('returns a list sentence', () => {
  it('works', () => {
    expect(listor(1, 1, 'java')).toEqual("1, 1, and java");
    expect(listor(true, 1, 'java', 'script')).toEqual("true, 1, java, and script");
    expect(listor('java')).toEqual("java");
    expect(listor('java', 'script')).toEqual("java and script");
  });
});
