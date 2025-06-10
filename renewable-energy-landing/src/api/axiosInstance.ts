import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://react-energy-s89e.onrender.com/api/energy/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
