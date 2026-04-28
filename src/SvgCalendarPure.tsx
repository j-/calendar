import { Box } from '@mui/material';
import { useId, type FC } from 'react';

export type SvgCalendarPureProps = {
  daysInYear: number;
  dayOfYear: number;
};

export const SvgCalendarPure: FC<SvgCalendarPureProps> = ({
  daysInYear,
  dayOfYear,
}) => {
  const id = `SvgCalendarPure-${useId()}`;
  const idPast = `${id}-past`;
  const idFuture = `${id}-future`;

  const colCount = 14;
  const rowCount = Math.ceil(daysInYear / colCount);
  const size = 24;

  return (
    <Box sx={{
      '& > svg': {
        width: '100%',
        maxWidth: 'calc(100vw - 4rem)',
        height: '100%',
        maxHeight: 'calc(100vh - 4rem)',
      },
    }}>
      <svg viewBox={`0 0 ${colCount * size} ${rowCount * size}`}>
        <defs>
          <symbol id={idPast} viewBox="0 0 16 16">
            <path d="M4 4 12 12M4 12 12 4" />
          </symbol>
          <symbol id={idFuture} viewBox="0 0 16 16">
            <circle cx={8} cy={8} r={2} opacity={0.5} />
          </symbol>
        </defs>

        {Array.from({ length: rowCount }, (_, row) => (
          Array.from({ length: colCount }, (__, col) => {
            const i = row * colCount + col;

            if (i >= daysInYear) return null;

            const isPast = i < dayOfYear;

            return (
              <use
                key={`${col},${row}`}
                href={`#${isPast ? idPast : idFuture}`}
                x={col * size + 1}
                y={row * size + 1}
                width={size - 2}
                height={size - 2}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.5}
              />
            );
          })
        ))}
      </svg>
    </Box>
  );
};
