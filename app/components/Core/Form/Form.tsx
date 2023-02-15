"use client";
import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
const formDataReducer = (
  state: any,
  event: {
    target: {
      [x: string]: any;
      value: any;
    };
  }
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
function Form() {
  const formId = useSelector((state:any) => state.client.formId);
  const [formState, formDataDispatch] = useReducer(formDataReducer, {})
  return (
    <section className="container mx-auto">
      {!formId ? AddForm({formState,formDataDispatch})  : UpdateForm({formId,formState,formDataDispatch})}
    </section>
  );
}

export default Form;
