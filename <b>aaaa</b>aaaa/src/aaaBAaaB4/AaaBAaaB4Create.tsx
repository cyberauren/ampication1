import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const AaaBAaaB4Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="aaa<b>aaa</b>" source="$aaaa" disabled />
      </SimpleForm>
    </Create>
  );
};
