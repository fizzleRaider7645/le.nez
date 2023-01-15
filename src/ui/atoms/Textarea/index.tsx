import { useIntl } from "react-intl";
import { Props } from "./types";

function TextArea({ label, value, onChange }: Props) {
  const { formatMessage } = useIntl();
  const id = label?.toLowerCase();
  const formattedLabel = formatMessage({ id });

  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={formattedLabel}
      >
        {formattedLabel}
      </label>
      <textarea
        className='block w-full text-black rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md'
        id={formattedLabel}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
