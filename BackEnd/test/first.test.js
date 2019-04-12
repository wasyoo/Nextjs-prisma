import sum from './sum';

describe('sample test 101', () => {
  it('works as expected', () => {
    expect(1).toEqual(1);
  });
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('handle ranges is just fine', () => {
    const age = 100;
    expect(age).toBeGreaterThan(99);
  });
});
