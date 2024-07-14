import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 space-x-5">
      <Link className=" text-2xl px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono" href="/client">Client</Link>
      <Link className=" text-2xl px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono" href="/server">Server</Link>
    </main>
  );
}
