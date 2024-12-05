import axios from "axios";
import { IGetUserResponse } from "@/features/users";

export const fetchUserData = async (
  limit: number,
  skip: number
): Promise<IGetUserResponse> => {
  const response = await axios.get("https://dummyjson.com/users", {
    params: { limit, skip },
  });
  return response.data;
};
