/**
 * A function for converting a native Date object into a "daystamp" string that Beeminder
 * uses.
 *
 * @param date A Date object to have a daystamp generated from.
 */
export const toDayStamp = (date: Date): string =>
  date.toISOString().split('T')[0].replace(/\-/g, '');
