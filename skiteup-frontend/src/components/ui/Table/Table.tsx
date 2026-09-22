import React from 'react';
import type { TableProps } from '../../../utils/utils';

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  emptyMessage,
  className = '',
}: TableProps<T>) {
  return (
    <div
      className={`w-full overflow-x-auto rounded-[10px] border border-[rgba(11,58,96,0.10)] bg-white ${className}`}
    >
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="h-[61.62px]
                  border
                  border-[rgba(11,58,96,0.1)]
                  px-[10px]
                  py-[10px]
                  text-left
                  font-['Geologica',sans-serif]
                  text-[16px]
                  font-semibold
                  leading-[24px]
                  text-[rgba(11,58,96,0.5)]
                "
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="
                      h-[61.62px]
                      border
                      border-[rgba(11,58,96,0.1)]
                      px-[10px]
                      py-[10px]
                      font-['Geologica',sans-serif]
                      text-[16px]
                      leading-[24px]
                      text-black
                    "
                  >
                    {column.render ? column.render(row) : String(row[column.key as keyof T] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="h-[140px] px-6 py-10 text-center font-['Geologica',sans-serif] text-[15px] font-medium text-[#0B3A60]/60"
              >
                {emptyMessage || 'No records found.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
