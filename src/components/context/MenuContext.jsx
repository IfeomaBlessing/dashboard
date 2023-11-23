import { createContext, useReducer} from "react"
import MenuReducer from "./MenuReducer";


const initialStates = {
    menuBar : false, showWrap :false
}

export const MenuContext = createContext(initialStates)


export const MenuContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(MenuReducer, initialStates);

    return(
    <MenuContext.Provider value ={{menuBar :state.menuBar, showWrap :state.showWrap, dispatch}}>
        {children}
        </MenuContext.Provider>)
}