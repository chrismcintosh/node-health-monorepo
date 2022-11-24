import React, {useState, createContext} from "react";

interface AppContextInterface {
    token: string,
    setToken: Function,
    user: object,
    setUser: Function
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({children}) => {
    const [token, setToken] = useState<string>('')
    const [user, setUser] = useState({})

    return(
        <AppContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}