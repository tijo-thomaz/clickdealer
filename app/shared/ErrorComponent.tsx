export default function ErrorComponent(props: any) {
  return (
    <div className="container mx-auto success">
      <div className="flex justify-center w-3/6 py-4 mx-auto my-4 text-center text-red-600 bg-red-200 border border-red-800 rounded text-md">
        {props.message}
      </div>
    </div>
  );
}
