import { useEffect, useState } from "react";

export function useDataSource<T = any>(getResourceFn: () => Promise<T>) {
  const [resource, setResource] = useState<T>();

  useEffect(() => {
    getResourceFn().then((data) => {
      setResource(data);
    });
  }, [getResourceFn]);

  return resource;
}
