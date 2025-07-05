import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@heroui/react";

export default function Benchmark({ columns, rows, label }) {
  return (
    <Table classNames={{
      th: "text-xl text-center",
      td: "text-xl text-center",
      tr: "text-xl text-center"
    }} aria-label={label}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}