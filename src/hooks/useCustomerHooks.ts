import { request } from "../utils/axios-utils";
import { useQuery } from "@tanstack/react-query";

const fetchQuizData = () => {
  return request({ url: "/api.php?amount=10&type=multiple" });
};

export const useGetQuizData = (onSuccess: any, onError: any) => {
  return useQuery(["quizData"], fetchQuizData, {
    onSuccess,
    onError,
    enabled: false,
  });
};
