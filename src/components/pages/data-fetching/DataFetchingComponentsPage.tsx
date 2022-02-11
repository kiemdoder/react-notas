import { HttpDataSource } from "../../data-fetching/HttpDataSource";
import { UserInfo } from "./UserInfo";
import { DataSource } from "../../data-fetching/DataSource";
import { RemoteAPI } from "../../../data/remote-api";

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
