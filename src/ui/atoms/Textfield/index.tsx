import { Props } from "./types";

const Textfield: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400'
        id={label}
        type='text'
        value={value.join(", ")}
        onChange={onChange}
      />
    </div>
  );
};

export default Textfield;
