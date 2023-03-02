import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const AaaBAaaB4Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="aaa<b>aaa</b>" source="$aaaa" disabled />
      </SimpleForm>
    </Edit>
  );
};
