import { useMemo, type FC } from 'react';
import { Temporal } from 'temporal-polyfill';
import { SvgCalendarPure } from './SvgCalendarPure';

export const SimpleCalendar: FC = () => {
  const today = useMemo(() => {
    return Temporal.Now.plainDateISO();
  }, []);

  return (
    <>
      <title>{today.year}</title>

      <SvgCalendarPure
        daysInYear={today.daysInYear}
        dayOfYear={today.dayOfYear}
      />
    </>
  );
};
