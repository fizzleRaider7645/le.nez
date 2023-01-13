function UnderConstructionBanner() {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='bg-yellow-500 text-center text-white font-bold py-4 px-6'>
        <h1 className='text-3xl font-headerFont'>le👃nez</h1>
        Under Construction!{" "}
        <button
          onClick={() => window.history.back()}
          className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UnderConstructionBanner;
