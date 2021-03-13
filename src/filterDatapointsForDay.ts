import { BeeminderDatapoint } from './types';
import { toDayStamp } from './utils/toDayStamp';

/**
 * Given a Date and a list of Beeminder datapoints, returns the datapoints for the Date
 * provided.
 */
export const filterDatapointsForDay = <
  TDatapoint extends Pick<BeeminderDatapoint, 'daystamp'>
>(
  date: Date,
  datapoints: TDatapoint[]
) => {
  const daystamp = toDayStamp(date);
  return datapoints.filter((dp) => dp.daystamp === daystamp);
};
