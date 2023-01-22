import { createContext, useState, useContext } from "react";
import axios from "axios";
import Nav from "./Nav";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL

    return (
       <ContextData.Provider value ={{
        API,
        axios,
       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    );
}

export default Provider;