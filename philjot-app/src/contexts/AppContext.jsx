import { useEffect, useReducer, useState } from "react"
import { createContext } from "react";

export const AppContext = createContext();

// const AppProvider = ({children}) => {
//     const [count, setCount] = useState(0);

//     const increase = ()=> {
//         setCount(count +1)
//     }

//     return (
//         <AppContext.Provider value={{count, increase}}>
//             {children}
//         </AppContext.Provider>
//     )
// }


const AppProvider = ({children}) => {
    const authReducer = (state, action)=> {

    switch(action.type){
      case "LOGIN":
        return {...state, user:action.payload}
      case "LOGOUT":
        return {...state, user:null}

        default:
            return state
       
    }
}

const [state, dispatch] = useReducer(authReducer, {user: null});



return (
    <AppContext.Provider value={{state, dispatch}}>
             {children}
    </AppContext.Provider>
)

}
export default AppProvider

