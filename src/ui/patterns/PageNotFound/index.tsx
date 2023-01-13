import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className='bg-red-500 text-center text-white font-bold py-4 px-6 rounded-lg'>
          <h1 className='text-3xl font-headerFont'>404</h1>
          <p className='pb-4'>Page Not Found</p>
          <Link
            to='/'
            className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
