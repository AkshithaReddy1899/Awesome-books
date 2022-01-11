import { DateTime } from "../node_modules/luxon/build/es6/luxon.js";


export function time() {
  const getTime = DateTime.now();
  
  const dt = DateTime.fromObject({day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng'});

  DateTime.now().toString();
  
  return dt.toLocaleString(DateTime.DATETIME_FULL);
}