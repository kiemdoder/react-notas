import { GenericAGTable } from "../components/containers/table/GenericAGTable";
import * as ReactQuery from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export const HTTPCallPage = () => {
  const { isLoading, data } = ReactQuery.useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
      return axios.get("https://jsonplaceholder.typicode.com/users/1/albums");
    },
  });

  const queryClient = useQueryClient();
  return (
    <>
      <GenericAGTable
        tableData={data?.data}
        loading={isLoading}
        height="500px"
      />
      <button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}
      >
        Reload
      </button>
    </>
  );
};
