import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from '../slices/inventorySlice'
import listeners from "./listner";

export function makeStore(){
    return configureStore({
        reducer:vehicleReducer,
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().prepend(listeners.middleware)
        
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch