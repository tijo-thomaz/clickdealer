"use client";
import { getVehicleInventoryList, getVehicleInventoryListItem, updateVehicleInventoryListItem } from "@/app/service";
import { useReducer } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ErrorComponent from "../../../Shared/ErrorComponent";
import Success from "../../../Shared/SuccessToast";

function UpdateForm({ formId, formState, formDataDispatch }: any) {
  const { isError, isLoading, data, error } = useQuery(
    ["inventory", formId],
    () => getVehicleInventoryListItem(formId)
  );
  const queryClient= useQueryClient()
  const updateMutation = useMutation((newData) =>updateVehicleInventoryListItem(formId, newData),{
    onSuccess:async(data) =>{
        queryClient.prefetchQuery('inventory',getVehicleInventoryList)
        
    }
  })
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <>Got ERROR{error}</>;
  const { vehicleName, vehicleModel, price, daysInStock, location } = data;
  const handleSubmit = async(e: { preventDefault: () => void }) => {
    e.preventDefault();
    let update = Object.assign({}, data, formState);
    await updateMutation.mutate(update)
  };
  if(updateMutation.isLoading)return <div>Loading...</div>
  if(updateMutation.isError)return <ErrorComponent message={updateMutation ? updateMutation.error:'error'}></ErrorComponent>
  if(updateMutation.isSuccess)return <Success message={`Successfully Updated  vehicle details`} />
  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <div className="mt-2">
        <div className="flex flex-col pb-4 mb-4 border-b border-gray-200 md:flex-row">
          <div className="flex flex-col flex-1 md:flex-row lg:flex-row">
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
                  defaultValue={vehicleName}
                  name="vehicleName"
                  placeholder="Vehicle Name"
                  onChange={formDataDispatch}
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
                  onChange={formDataDispatch}
                  defaultValue={vehicleModel}
                  name="vehicleModel"
                  placeholder="Model"
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
                  onChange={formDataDispatch}
                  defaultValue={price}
                  name="price"
                  placeholder="Trade Price"
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
                  onChange={formDataDispatch}
                  defaultValue={daysInStock}
                  name="daysInStock"
                  placeholder="Days in stock"
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
                  onChange={formDataDispatch}
                  defaultValue={location}
                  name="location"
                  placeholder="location"
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full py-2 mx-2">
              <button
                type="submit"
                className="flex justify-center w-32 px-4 py-2 mx-2 text-sm font-bold text-white transition duration-200 ease-in-out bg-indigo-500 border border-indigo-600 rounded cursor-pointer focus:outline-none hover:bg-indigo-200 hover:border-indigo-500 hover:text-gray-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateForm;
