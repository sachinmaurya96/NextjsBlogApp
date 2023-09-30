"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getLocalStorage =()=>{
    if(typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return getLocalStorage();
    });
    const toggle = ()=>{
        setTheme(theme==="light"? "dark":"light")
    }
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    })
    
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}