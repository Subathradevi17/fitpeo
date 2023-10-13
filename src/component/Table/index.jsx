import React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
function Table(props) {
  const { columns, data } = props;
  const table = useMaterialReactTable({
    columns,
    data,
  });
  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <MaterialReactTable table={table} title='Product Sell' />
    </div>
  );
}

export default Table;
