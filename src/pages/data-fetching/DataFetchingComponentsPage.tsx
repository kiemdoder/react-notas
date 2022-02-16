import { UserInfo } from "./UserInfo";
import { RemoteAPI } from "../../data/remote-api";
import { HttpDataSource } from "../../components/data-fetching/HttpDataSource";
import { DataSource } from "../../components/data-fetching/DataSource";

export const DataFetchingComponentsPage = () => {
  return (
    <>
      <HttpDataSource resourceName="user" resourceUrl="/user/12">
        <UserInfo />
      </HttpDataSource>
      <DataSource
        getDataFn={() => RemoteAPI.httpGet("/user/12")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
};
