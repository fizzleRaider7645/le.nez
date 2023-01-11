import { Props } from "./types";

function TextArea({ label, value, onChange }: Props) {
  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className='appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400'
        id={label}
        value={value.join(", ")}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;