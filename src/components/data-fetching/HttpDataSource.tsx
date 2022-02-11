import React, { useEffect, useState } from "react";
import { RemoteAPI } from "../../data/remote-api";

interface ResourceLoaderProps {
  resourceUrl: string;
  resourceName: string;
  children: React.ReactNode;
}

export const HttpDataSource = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const data = await RemoteAPI.httpGet(resourceUrl);
      setState(data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
      })}
    </>
  );
};
