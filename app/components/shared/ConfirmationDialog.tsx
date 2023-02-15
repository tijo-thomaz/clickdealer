import React from 'react'

export default function ConfirmationDialog({deleteHandler,cancelHandler}:any) {
  return (
    <div className="flex gap-5">
        <p>Are You Sure?</p>
        <button onClick={deleteHandler} className='flex px-4 py-2 text-white bg-indigo-500 border rounded-md hover:bg-indigo-200 hover:border-indigo-500 hover:text-gray-700 '>Yes</button>
        <button onClick={cancelHandler} className='flex px-4 py-2 text-gray-800 bg-white border border-gray-700 rounded-md hover:bg-indigo-200 hover:border-gray-700 hover:text-gray-700 '>No</button>
    </div>
  )
}
