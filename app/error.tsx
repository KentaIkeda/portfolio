'use client'; // Error boundaries must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-dvh w-full grid place-items-center'>
      <div>
        <h2>データが取得できませんでした</h2>
        <div className='flex space-x-4'>
          <button
            className='bg-accent2 px-4 py-2.5 rounded-md'
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
          <Link
            href={'/'}
            className='bg-accent2 px-4 py-2.5 rounded-md'
          >
            Back to Top Page?
          </Link>
        </div>
      </div>
    </div>
  );
}
