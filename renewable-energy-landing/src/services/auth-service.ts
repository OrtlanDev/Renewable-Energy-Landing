import axiosInstance from "../api/axiosInstance";

export const authService = {
    login: async (username: string, password: string) => {
        const response = await axiosInstance.post("login/", {
            username,
            password,
        });
        return response.data;
    },

    register: async (username: string, password: string) => {
        const response = await axiosInstance.post("register/", {
            username,
            password,
        });
        return response.data;
    },

    logout: () => {
        localStorage.removeItem("token");
    },
};
