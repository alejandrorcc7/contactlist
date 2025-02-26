// import React, { createContext, useEffect, useState } from 'react'
// import getState from './flux'

// // creamos el contexto
// export const Context = createContext()

// const injectContext = (Component) => {
//     const StoreWrapper = () => {

//         const [state, setState] = useState(getState())

//         useEffect(() => {

//             state.actions.getProducts()

//         }, [])

//         return (
//             <Context.Provider value={state}>
//                 <Component />
//             </Context.Provider>
//         )
//     }

//     return StoreWrapper
// }

// export default injectContext
