import Box from '@mui/material/Box';
import type { FC } from 'react';

export type SimpleCalendarPureProps = {
  daysInYear: number;
  dayOfYear: number;
};

const SimpleCalendarDayPast: FC = () => (
  <Box component="svg" width={16} height={16}>
    <path d="M1 1 15 15M1 15 15 1" stroke="currentColor" strokeWidth={2} />
  </Box>
);

const SimpleCalendarDayFuture: FC = () => (
  <Box component="svg" width={16} height={16} sx={{ opacity: 0.5 }}>
    <circle cx={8} cy={8} r={1} stroke="currentColor" strokeWidth={2} />
  </Box>
);

const SimpleCalendarDay: FC<{ isPast?: boolean }> = ({ isPast }) => (
  isPast ? <SimpleCalendarDayPast /> : <SimpleCalendarDayFuture />
);

export const SimpleCalendarPure: FC<SimpleCalendarPureProps> = ({
  daysInYear,
  dayOfYear,
}) => {
  return (
    <Box
      component="ol"
      sx={{
        display: 'grid',
        width: 'fit-content',
        gap: 1,
        gridTemplateColumns: 'repeat(16, 1fr)',
        margin: 0,
        padding: 0,
      }}
    >
      {Array.from({ length: daysInYear }, (_, i) => (
        <Box
          component="li"
          key={i}
          value={i + 1}
          sx={{
            display: 'grid',
            width: '1rem',
            height: '1rem',
            placeItems: 'center',
          }}
        >
          <SimpleCalendarDay isPast={i < dayOfYear} />
        </Box>
      ))}
    </Box>
  );
};
