import axios from "axios";

// console.log(process.env.);

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://testimonial-node.herokuapp.com";

export const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
