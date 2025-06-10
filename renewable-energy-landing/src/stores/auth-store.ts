import { create } from "zustand";
import { authService } from "../services/auth-service";

interface User {
    username: string;
    token: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

export const useAuthStore = create<AuthState>((set) => ({
    user: token && username ? { username, token } : null,
    isAuthenticated: !!token,

    login: async (username, password) => {
        const { token } = await authService.login(username, password);
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        set({ user: { username, token }, isAuthenticated: true });
    },

    register: async (username, password) => {
        const { token } = await authService.register(username, password);
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        set({ user: { username, token }, isAuthenticated: true });
    },

    logout: () => {
        authService.logout();
        localStorage.removeItem("username");
        set({ user: null, isAuthenticated: false });
    },
}));
