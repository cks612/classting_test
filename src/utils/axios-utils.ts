import axios from "axios";

// baseURL : env파일로 바꿀 수 있다.
const client = axios.create({
  baseURL: "https://opentdb.com",
});

export const request = ({ ...options }) => {
  const onSuccess = (response: any) => response;
  const onError = (error: Error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
