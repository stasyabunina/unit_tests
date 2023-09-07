import showHealth from '../health';

test('returns healthy if health > 50', () => {
  const object = {
    name: 'Маг',
    health: 90,
  };

  const expected = 'healthy';
  const result = showHealth(object);

  expect(result).toBe(expected);
});
