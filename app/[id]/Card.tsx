'use client';
import React from 'react'
import {HiArrowSmLeft} from 'react-icons/hi'
import { useRouter } from 'next/navigation';
export default function Card({ data }: any) {
  const router = useRouter()
  return (<>
  <button type="button" onClick={() => router.back()}>
      <HiArrowSmLeft/>
    </button>
      <section className="container pt-10 mx-auto">
      <div className="flex">
        <div className="w-1/4">
          <h3 className="text-sm font-bold text-blue-900">Vehicle Details</h3>
        </div>

        <div className="w-1/4 mr-5">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Vehicle Name
          </label>
          <label>{data.vehicleName}</label>
        </div>

        <div className="w-1/4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Vehicle Model
          </label>
          <label>{data.vehicleModel}</label>
        </div>
      </div>

      <hr className="my-10 border border-gray-200" />

      <div className="flex">
        <div className="w-1/4">
          <h3 className="text-sm font-bold text-blue-900">Trade Details</h3>
        </div>

        <div className="w-1/4 mr-5">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Days In Stock
          </label>
          <label>{data.daysInStock}</label>
        </div>

        <div className="w-1/4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Trade price
          </label>
          <label>{data.price}</label>
        </div>
      </div>
      <hr className="my-10 border border-gray-200" />
      <div className="flex">
        <div className="w-1/4">
          <h3 className="text-sm font-bold text-blue-900">Location Details</h3>
        </div>

        <div className="w-1/4 mr-5">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Location
          </label>
          <label>{data.location}</label>
        </div>

      </div>
    </section>
  </>

  );
}
