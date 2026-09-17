
import React from "react";
import type { TableColumn, TableProps } from "../../../utils/utils";


export function Table<T extends Record<string, unknown>>({
    columns,
    data,
    className = "",
}: TableProps<T>) {
    return (
        <div
            className={`w-full overflow-hidden rounded-[10px] border border-[rgba(11,58,96,0.10)] bg-white ${className}`}>
            <table className="w-full border-collapse">
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
                  font-['Poppins',sans-serif]
                  text-[16px]
                  font-semibold
                  leading-[24px]
                  text-[rgba(11,58,96,0.5)]
                ">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
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
                    font-['Poppins',sans-serif]
                    text-[16px]
                    leading-[24px]
                    text-black
                  ">
                                    {column.render
                                        ? column.render(row)
                                        : String(row[column.key as keyof T] ?? "")}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;