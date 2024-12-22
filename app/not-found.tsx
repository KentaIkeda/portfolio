import Link from 'next/link';

const NotFound = async () => {
  return (
    <>
      <div className='min-h-dvh w-full grid place-items-center'>
        <div className='flex flex-col items-center space-y-2'>
          <p>404 Not Found</p>
          <Link
            href={'/'}
            className='bg-accent2 px-4 py-2.5 rounded-md'
          >
            Back to Top Page?
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
