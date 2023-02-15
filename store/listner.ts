import { toggleChangeAction ,updateAction} from '@/slices/inventorySlice'
import {createListenerMiddleware} from '@reduxjs/toolkit'


const listeners= createListenerMiddleware()

listeners.startListening({
    actionCreator:toggleChangeAction,
    effect:async(action,listenersApi)=>{
        listenersApi.dispatch(updateAction(action.payload))
    }
})

export default listeners
