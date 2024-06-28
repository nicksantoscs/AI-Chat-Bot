import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type User = {
    name: string
    email: string
}

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Fetch if the user's cookies are valid, then skip login
    }, []);

    const login = async (email: string, password: string) => {
        // Fetch the login API
    };

    const signup = async (name: string, email: string, password: string) => {
        // Fetch the signup API
    };

    const logout = async () => {
        // Fetch the logout API
    };

    const value = { isLoggedIn, user, login, signup, logout };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);