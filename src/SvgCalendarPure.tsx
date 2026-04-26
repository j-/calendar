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
  const size = 20;

  return (
    <svg width={colCount * size} height={rowCount * size}>
      <defs>
        <symbol id={idPast}>
          <g width={16} height={16}>
            <path d="M2 2 14 14M2 14 14 2" />
          </g>
        </symbol>
        <symbol id={idFuture}>
          <g width={16} height={16} opacity={0.5}>
            <circle cx={8} cy={8} r={2} />
          </g>
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
              strokeWidth={1}
            />
          );
        })
      ))}
    </svg>
  );
};
