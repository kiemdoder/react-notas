import { useEffect, useState } from "react";
import { RemoteAPI } from "../data/remote-api";

export const useResource = (resourceURL: string) => {
  const [resource, setResource] = useState();

  useEffect(() => {
    RemoteAPI.httpGet(resourceURL).then((data) => {
      setResource(data);
    });
  }, [resourceURL]);

  return resource;
};
