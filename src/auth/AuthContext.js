import { createContext, useReducer, useEffect } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("Campus_Navigator_User")) || null
}

export const AuthContext = createContext(INITIAL_STATE)
export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("Campus_Navigator_User", JSON.stringify(state.currentUser));
      }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}