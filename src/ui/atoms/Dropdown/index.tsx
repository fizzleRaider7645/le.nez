import { useContext } from "react";
import { useIntl } from "react-intl";
import { FormContext } from "../../patterns/Form";
import { FormStateToValidate } from "../../patterns/Form/types";
import { DropDownProps } from "./types";

function Dropdown({ options, onChange, value, label }: DropDownProps) {
  const { formatMessage } = useIntl();
  const {
    formState: { hasError },
  } = useContext(FormContext);
  const id = label?.toLowerCase() as keyof FormStateToValidate;
  const formattedLabel = formatMessage({ id });
  const selectLabelBase = formatMessage({ id: "select" });
  const formattedSelectLabel =
    selectLabelBase.charAt(0).toUpperCase() + selectLabelBase.slice(1);
  const optionDefaultLabel = `${formattedSelectLabel} ${formattedLabel}`;
  const shouldRenderErrorRing = hasError && !value.length;

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
          className={`block w-full bg-white text-gray-700 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none ${
            shouldRenderErrorRing
              ? "border-4 border-solid border-red-500"
              : "focus:ring-2 focus:ring-yellow-400 shadow-md"
          }`}
          id={formattedLabel}
          value={value}
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
