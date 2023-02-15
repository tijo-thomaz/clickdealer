import FormLayout from "./components/Core/Form";
import Table from "./components/Core/Table";

export default function Home() {
  return (
    <main className="py-5">
      <h1 className="py-10 text-xl font-bold text-center md:text-5xl">
        Vehicle Inventory
      </h1>
      <FormLayout></FormLayout>
      {/* List Inventory*/}
      <section className="container px-4 mx-auto my-12 md:px-12">
        <Table></Table>
      </section>
    </main>
  );
}
