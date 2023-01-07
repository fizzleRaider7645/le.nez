import React from "react";

const Form = () => {
  return (
    <form className='w-full max-w-lg'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='occasion'
          >
            Occasion
          </label>
          <select
            className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='occasion'
          ></select>
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='desired-effect'
          >
            Desired Effect
          </label>
          <select
            className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white'
            id='desired-effect'
          ></select>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='scent-type'
          >
            Scent Type
          </label>
          <select
            className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='scent-type'
          ></select>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='scent-notes'
          >
            Scent Notes
          </label>
          <select
            multiple
            className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='scent-notes'
          >
            <option>Vanilla</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
