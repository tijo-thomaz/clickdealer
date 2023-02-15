"use client";
import React from "react";
import { BiEdit, BiTrashAlt} from "react-icons/bi";
import { HiEye } from 'react-icons/hi'
import { getVehicleInventoryList } from "../../service";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  toggleChangeAction,
  updateAction,
} from "@/slices/inventorySlice";
import Link from "next/link";
export default function Table() {
  const { isError, isLoading, data, error } = useQuery(
    "inventory",
    getVehicleInventoryList
  );
  const visible = useSelector((state: any) => state.client.toggleForm);
  const dispatch = useDispatch();
  const editHandler = (id: any) => {
    dispatch(toggleChangeAction(id));
    if (visible) {
      dispatch(updateAction(id));
    }
  };

  const deleteHandler = (id: any) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <>Got ERROR{error}</>;
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Vehicle Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Trade Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Days In Stock
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item: any, i: number) => (
                    <TableRowData
                      key={i + 1}
                      {...item}
                      editHandler={editHandler}
                      deleteHandler={deleteHandler}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRowData({
  id,
  vehicleName,
  vehicleModel,
  price,
  daysInStock,
  location,
  editHandler,
  deleteHandler,
}: any) {
  return (
    <tr className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        {vehicleName || "-"}
      </td>
      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        {vehicleModel || "-"}
      </td>
      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        {price || "-"}
      </td>
      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        {daysInStock || "-"}
      </td>
      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        {location || "-"}
      </td>
      <td className="flex justify-start px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
        <Link href={`/${id}`}>
          <HiEye
          />
        </Link>
        <button className=" cursor">
          <BiEdit
            onClick={() => {
              editHandler(id);
            }}
            size={16}
            color={"rgb(99 102 241)"}
          />
        </button>
        <button className="cursor">
          <BiTrashAlt
            onClick={() => {
              deleteHandler(id);
            }}
            size={16}
            color={"rgb(244 63 94)"}
          />
        </button>
      </td>
    </tr>
  );
}
