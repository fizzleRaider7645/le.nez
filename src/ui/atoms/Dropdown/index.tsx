import { Props } from "./types";

const Dropdown: React.FC<Props> = ({ options, onChange, value, label }) => {
  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <div className='relative rounded-md shadow-sm'>
        <select
          defaultValue=''
          className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
          id={label}
          value={value}
          onChange={onChange}
        >
          <option value='' disabled>
            Select {label}
          </option>
          {options.map(({ value, label, emoji }) => (
            <option key={value} value={value}>
              {label} {emoji}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
