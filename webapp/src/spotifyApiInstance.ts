import axios, { AxiosInstance } from "axios";

const baseUrl = "http://localhost:8000/";

const spotifyApiInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default spotifyApiInstance;
