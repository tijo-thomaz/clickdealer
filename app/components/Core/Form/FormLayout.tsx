"use client";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { deleteAction, toggleChangeAction } from "@/slices/inventorySlice";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";
import { deleteVehicleInventoryListItem, getVehicleInventoryList } from "@/app/service";
import { useQueryClient } from "react-query";

export default function FormLayout() {
  const isFormVisible = useSelector((state: any) => state.client.toggleForm);
  const delId= useSelector((state: any) => state.client.delId)
  const queryClient=useQueryClient()
  const dispatch = useDispatch();
  const handleVisibilityChange = () => {
    dispatch(toggleChangeAction());
  };
  const deleteHandler = async () => {
  if(delId) {
    await deleteVehicleInventoryListItem(delId)
    await   queryClient.prefetchQuery('inventory',getVehicleInventoryList)
    await dispatch(deleteAction(null))
  }
  };
  const cancelHandler = async() => {    await dispatch(deleteAction(null))};
  return (
    <>
      <section className="container flex justify-between py-5 mx-auto border-b">
        {/* Add Button */}
        <div className="flex gap-3 right">
          <button
            onClick={handleVisibilityChange}
            className="flex px-4 py-2 text-white bg-indigo-500 border rounded-md hover:bg-indigo-200 hover:border-indigo-500 hover:text-gray-700 "
          >
            Add new vehicle{" "}
            <span className="px-1">
              <BiPlus size={23} />
            </span>
          </button>
        </div>
        {delId && <ConfirmationDialog
          deleteHandler={deleteHandler}
          cancelHandler={cancelHandler}
        ></ConfirmationDialog>}
      </section>
      {/* collapsible form */}
      {isFormVisible && <Form></Form>}
    </>
  );
}
