import { createContext, useState } from "react";
export const SideContext =createContext()
const SideProvider =({children})=>{
    const [side,setSide]=useState(false)
    const handleside =()=>setSide(false)
        return <SideContext.Provider value={{side,setSide,handleside}}>
            {children}
        </SideContext.Provider>
    }
export default SideProvider;