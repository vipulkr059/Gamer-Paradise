import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "90f82cc83bca46e38d1679250a355e7e",
  },
});
