"use client";

import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-dvh w-full grid place-items-center">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-error text-2xl font-bold text-center">{error.message}</h2>
        <div className="flex flex-col gap-y-2">
          <button className="btn btn-accent btn-block btn-circle" onClick={() => reset()}>
            Retry
          </button>
          <Link href={"/"} className="btn btn-accent btn-block btn-circle btn-dash">
            Top page
          </Link>
        </div>
      </div>
    </div>
  );
}
