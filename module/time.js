import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default function time() {
  const getTime = DateTime.now();

  getTime.toString();

  return getTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}