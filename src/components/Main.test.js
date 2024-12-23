import { initializeTimes, updateTimes } from './Main';

describe('Main Component Reducer Functions', () => {
  // Test for initializeTimes function
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

  // Test for updateTimes function
  test('updateTimes returns the same value when UPDATE_TIMES action is dispatched', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: { date: '2024-12-23' } };

    const result = updateTimes(initialState, action);
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];

    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns the initial state when no matching action type is provided', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'SOME_OTHER_ACTION' };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState); // should return the state unchanged
  });
});
