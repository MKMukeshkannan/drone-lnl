import { GOOGLE_MAP_API } from "@/lib/utils";

export default function Map() {
  console.log(GOOGLE_MAP_API);

  return (
    <section className="w-full h-[300px] flex items-center justify-center font-mono text-5xl font-black bg-green-200">
      MAP
    </section>
  );
}
