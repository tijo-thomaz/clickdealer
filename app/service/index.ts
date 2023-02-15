import { API_CONSTANT } from "../constants";

export const getVehicleInventoryList = async () => {
  const res = await fetch(
    `${API_CONSTANT.BASE_URL}${API_CONSTANT.GET_INVENTORTY_LIST}`
  );
  return await res.json();
};
export const getVehicleInventoryListItem = async (id: string) => {
  const res = await fetch(
    `${API_CONSTANT.BASE_URL}${API_CONSTANT.GET_INVENTORTY_LIST}/${id}`
  );
  return await res.json();
};

export const setVehicleInventoryListItem = async (formdata: any) => {
  try {
    const Option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    const res = await fetch(
      `${API_CONSTANT.BASE_URL}${API_CONSTANT.GET_INVENTORTY_LIST}`,
      Option
    );
    return await res.json();
  } catch (err) {
    return err;
  }
};


export const updateVehicleInventoryListItem = async (itemId: any,formdata: any) => {
    try {
      const Option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      };
      const res = await fetch(
        `${API_CONSTANT.BASE_URL}${API_CONSTANT.GET_INVENTORTY_LIST}/${itemId}`,
        Option
      );
      return await res.json();
    } catch (err) {
      return err;
    }
  };
  
  export const deleteVehicleInventoryListItem = async (id: string) => {
    const Option = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
    const res = await fetch(
      `${API_CONSTANT.BASE_URL}${API_CONSTANT.GET_INVENTORTY_LIST}/${id}`,Option
    );
    return await res.json();
  };