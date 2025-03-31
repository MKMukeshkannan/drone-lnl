"use client";

import { useRef, useState } from "react";

export default function QR() {
  const [url, setUrl] = useState<string>();
  const bref = useRef<HTMLInputElement>(null);

  return (
    <main className="p-10">
      <section className="space-x-2 pb-10">
        <input ref={bref} className="border border-black py-2" />
        <button onClick={() => setUrl(bref.current?.value)} className="py-2 px-5 bg-black text-white mt-10 rounded-md">
          GET URL
        </button>
      </section>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4u8s3bFFXDk?si=vdrVPhFALsC6L9uX"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </main>
  );
}
