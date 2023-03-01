import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AaaBAaaB4List = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"aaa<b>aaa</b>s"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="$aaaa" label="aaa<b>aaa</b>" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
