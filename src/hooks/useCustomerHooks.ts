import { request } from "../utils/axios-utils";
import { useQuery } from "@tanstack/react-query";

type boo = {
  enabled: boolean;
};

const fetchQuizData = () => {
  return request({ url: "/api.php?amount=10&type=multiple" });
};

export const useGetQuizData = (onSuccess: any, onError: any, enabled: boo) => {
  return useQuery(["quizData"], fetchQuizData, {
    onSuccess,
    onError,
  });
};
