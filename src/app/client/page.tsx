import Map from "@/components/Map";

export default function Client() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-5 md:p-10 xl:p-24 space-x-5 md:space-x-0">
      <Map />

      <section className="flex w-full flex-col md:flex-row md:justify-between mt-5 space-y-3 md:space-y-0">
        <div>
          <h1 className="text-left text-3xl font-bold font-mono">Latitude: </h1>
          <h1 className="text-left text-3xl font-bold font-mono">Longitude: </h1>
        </div>
        <button className="text-2xl max-w-28 px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono">
          PIN
        </button>
      </section>
    </main>
  );
}
