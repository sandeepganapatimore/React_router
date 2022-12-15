import React, { createContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(second)

    const login = () => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }


    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
}