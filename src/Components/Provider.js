import { createContext, useState } from "react";
import axios from "axios";

export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL

    return (
       <ContextData.Provider value ={{
        API,
       }}>

        {children}
       </ContextData.Provider>
    );
}

export default Provider;