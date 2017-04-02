import prank from '.';

test('says hello world', () => {
  expect(prank()).toBe('Hello Universe');
});
