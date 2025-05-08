import type { AxiosResponse } from "axios";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://react-energy-s89e.onrender.com/api/energy/",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        console.error("[!] Axios Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
