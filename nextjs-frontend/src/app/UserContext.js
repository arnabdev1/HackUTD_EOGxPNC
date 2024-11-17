"use client"
import { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ login, setLogin, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access the context
export const useUserContext = () => useContext(UserContext);
