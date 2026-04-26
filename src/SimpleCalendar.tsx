import { useMemo, type FC } from 'react';
import { Temporal } from 'temporal-polyfill';
import { SimpleCalendarPure } from './SimpleCalendarPure';
import { SvgCalendarPure } from './SvgCalendarPure';

export const SimpleCalendar: FC = () => {
  const today = useMemo(() => {
    return Temporal.Now.plainDateISO();
  }, []);

  const daysInYear = today.daysInYear;
  const dayOfYear = today.dayOfYear

  return (
    <SvgCalendarPure
      daysInYear={daysInYear}
      dayOfYear={dayOfYear}
    />
  );
};
