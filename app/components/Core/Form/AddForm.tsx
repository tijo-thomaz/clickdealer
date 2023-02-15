"use client"
import Success from "../../shared/SuccessToast";
import {useQueryClient,useMutation} from 'react-query';
import { getVehicleInventoryList, setVehicleInventoryListItem } from "@/app/service";
import ErrorComponent from "../../shared/ErrorComponent";
function AddForm({formState,formDataDispatch}:any) {
;
  const queryClient=useQueryClient()
  const addMutation = useMutation(setVehicleInventoryListItem,{
    onSuccess:()=>{
        queryClient.prefetchQuery('inventory',getVehicleInventoryList)
    }

  })
  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    if(Object.keys(formState).length==0) return console.error('error')
    addMutation.mutate(formState)
  }
  if(addMutation.isLoading)return <div>Loading...</div>
  if(addMutation.isError)return <ErrorComponent message={addMutation ? addMutation.error:'error'}></ErrorComponent>
  if(addMutation.isSuccess)return <Success message={`Successfully added new vehicle`} />
  return (
    <form className="p-5" onSubmit={handleSubmit}> 
      <div className="mt-2">
        <div className="flex flex-col pb-4 mb-4 border-b border-gray-200 md:flex-row">
          <div className="flex flex-col flex-1 md:flex-row lg:flex-row">
            <div className="flex-1 w-full mx-2">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
                <input
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
                  name="location"
                  placeholder="location"
                  className="w-full p-1 px-2 text-gray-800 outline-none appearance-none "
                />{" "}
              </div>
            </div>
            <div className="flex-1 w-full py-2 mx-2">
              <button 
              type="submit"
              className="flex justify-center w-32 px-4 py-2 mx-2 text-sm font-bold text-white transition duration-200 ease-in-out bg-indigo-500 border border-indigo-600 rounded cursor-pointer focus:outline-none hover:bg-indigo-200 hover:border-indigo-500 hover:text-gray-700">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddForm;
