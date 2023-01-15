import { useIntl } from "react-intl";
import { Props } from "./types";

function Dropdown({ options, onChange, value, label }: Props) {
  const { formatMessage } = useIntl();
  const id = label?.toLowerCase();
  const formattedLabel = formatMessage({ id });
  const selectLabel =
    formatMessage({ id: "select" }).charAt(0).toUpperCase() +
    formatMessage({ id: "select" }).slice(1);
  const optionDefaultLabel = `${selectLabel} ${formattedLabel}`;

  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={formattedLabel}
      >
        {formattedLabel}
      </label>
      <div className='relative rounded-md shadow-sm'>
        <select
          className='block w-full bg-white text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md'
          id={formattedLabel}
          value={value || ""}
          onChange={onChange}
        >
          <option value='' disabled className='text-black'>
            {optionDefaultLabel}
          </option>
          {options.map(({ value, label, emoji }) => {
            const id = label?.toLowerCase();
            const formattedLabel = formatMessage({ id });
            return (
              <option key={value} value={value} className='text-black'>
                {formattedLabel} {emoji}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
