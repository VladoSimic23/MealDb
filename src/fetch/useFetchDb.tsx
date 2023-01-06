import { useEffect, useState } from "react";
import { ObjectWithStringValues } from "../interfaces/interface";

type Data = { meals: ObjectWithStringValues[] };

const useFetchDb = (url: string) => {
  const [data, setData] = useState<Data>({ meals: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const newData = await response.json();
        setData({ ...newData });
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchDb;
