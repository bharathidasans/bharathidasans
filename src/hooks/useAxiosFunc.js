import { useEffect } from "react";
import { useState } from "react";

const useAxiosFunc = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const control = new AbortController();
      setController(control);
      const resp = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: control.signal,
      });
      setResponse(resp.data);
    } catch (error) {
      setError(`Error -- ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  },[controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunc;
