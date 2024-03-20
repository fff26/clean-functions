import { healthIndicator } from '../healthIndicator';

test('should return "healthy" for health more than 50', () => {
  expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
  expect(healthIndicator({ name: 'Воин', health: 30 })).toBe('wounded');
});

test('should return "wounded" for health exactly 50', () => {
  expect(healthIndicator({ name: 'Лучник', health: 50 })).toBe('wounded');
});

test('should return "critical" for health less than 15', () => {
  expect(healthIndicator({ name: 'Разбойник', health: 10 })).toBe('critical');
});

test('should return "critical" for health exactly 15', () => {
  expect(healthIndicator({ name: 'Паладин', health: 15 })).toBe('wounded');
});
