import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AaaBAaaB4List } from "./aaaBAaaB4/AaaBAaaB4List";
import { AaaBAaaB4Create } from "./aaaBAaaB4/AaaBAaaB4Create";
import { AaaBAaaB4Edit } from "./aaaBAaaB4/AaaBAaaB4Edit";
import { AaaBAaaB4Show } from "./aaaBAaaB4/AaaBAaaB4Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AaaBAaaB4"
          list={AaaBAaaB4List}
          edit={AaaBAaaB4Edit}
          create={AaaBAaaB4Create}
          show={AaaBAaaB4Show}
        />
      </Admin>
    </div>
  );
};

export default App;
