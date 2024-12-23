// initializeTimes.test.js
import { initializeTimes } from './Main';

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});
