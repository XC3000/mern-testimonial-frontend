import axios from "axios";

export const BASE_URL = "http://localhost:5000";

export const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
