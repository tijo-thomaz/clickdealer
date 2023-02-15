export default function Success(props:any) {
    
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center w-3/6 py-4 mx-auto my-4 text-center text-gray-600 bg-indigo-200 border border-indigo-800 rounded text-md">
       {props.message}
      </div>
    </div>
  );
}
