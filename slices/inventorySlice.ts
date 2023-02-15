import {  createSlice } from '@reduxjs/toolkit';

const initialState ={
    client:{toggleForm:false, formId:undefined,delId:null},
} as any;

const inventoryVehicleSlice =createSlice({
    name:'vehicleInventory',
    initialState,
    reducers:{
        toggleChangeAction:(state)=>{
            state.client.toggleForm = !state.client.toggleForm;
        },
        updateAction:(state,action)=>{
            state.client.formId= action.payload
        },
        deleteAction:(state,action)=>{
            state.client.delId=action.payload
        }
    }
})
export const {toggleChangeAction,updateAction,deleteAction} =inventoryVehicleSlice.actions
export default  inventoryVehicleSlice.reducer;