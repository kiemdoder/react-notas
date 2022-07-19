import React, { useEffect, useState } from "react";

interface DataSourceProps {
  getDataFn: () => Promise<any>;
  resourceName: string;
  children: React.ReactNode;
}

export const DataSource = ({
  getDataFn,
  resourceName,
  children,
}: DataSourceProps) => {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const data = await getDataFn();
      setState(data);
    })();
  }, [getDataFn]);

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
