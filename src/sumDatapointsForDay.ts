import { filterDatapointsForDay } from './filterDatapointsForDay';
import { BeeminderDatapoint } from './types';

export const sumDatapointsForDay = (
  date: Date,
  datapoints: Pick<BeeminderDatapoint, 'daystamp' | 'value'>[]
): number =>
  filterDatapointsForDay(date, datapoints).reduce(
    (acc, dp) => acc + dp.value,
    0
  );
