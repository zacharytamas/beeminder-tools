import { sumDatapointsForDay } from '../sumDatapointsForDay';

test('should sum correctly', () => {
  const datapoints = [
    { daystamp: '20210301', value: 20 },
    { daystamp: '20210301', value: 22 },
    { daystamp: '20210228', value: 15 },
  ];

  expect(sumDatapointsForDay(new Date('2021-03-01'), datapoints)).toEqual(42);
});
