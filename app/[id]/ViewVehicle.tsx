"use client";
import React from "react";
import { useQuery } from "react-query";
import Card from "./Card";
import { getVehicleInventoryListItem } from "../service";

export default function ViewVehicle({ vehicleId }: any) {
  const { isError, isLoading, data, error } = useQuery(
    ["inventory", vehicleId],
    () => getVehicleInventoryListItem(vehicleId)
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <>Got ERROR{error}</>;
  return (
    <>
      <Card data={data}/>
    </>
  );
}
