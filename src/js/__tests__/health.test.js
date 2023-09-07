import showHealth from '../health';

test.each([
  [{name: 'мечник', health: 10}, 'wounded'],
  [{name: 'маг', health: 100}, 'healthy'],
  [{name: 'лучник', health: 80}, 'critical'],
])('returns health status', (object, expected) => {
  const result = showHealth(object);
  expect(result).toBe(expected);
});
