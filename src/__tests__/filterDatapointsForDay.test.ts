import { filterDatapointsForDay } from '../filterDatapointsForDay';

test('it filters correctly', () => {
  const datapoints = [
    { daystamp: '20210301' },
    { daystamp: '20210301' },
    { daystamp: '20210228' },
  ];
  expect(
    [
      ...new Set(
        filterDatapointsForDay(new Date('2021-03-01'), datapoints).map(
          (dp) => dp.daystamp
        )
      ).values(),
    ].join('')
  ).toEqual('20210301');
});
