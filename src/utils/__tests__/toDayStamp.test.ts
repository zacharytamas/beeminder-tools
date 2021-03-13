import { toDayStamp } from '../toDayStamp';

test('should work correctly', () => {
  const now = new Date('2021-03-12');
  expect(toDayStamp(now)).toEqual('20210312');
});
