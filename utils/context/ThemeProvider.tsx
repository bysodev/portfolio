'use client'
import React, { useEffect, useReducer, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, settheme] = useState('light');
  return (    
    <ThemeContext.Provider value={{theme, settheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider