import { useContext } from "react";
import { useIntl } from "react-intl";
import { FormContext } from "../../patterns/Form";
import { TextAreaProps } from "./types";

function TextArea({ label, value, onChange }: TextAreaProps) {
  const { formatMessage } = useIntl();
  const {
    formState: { hasError },
  } = useContext(FormContext);
  const id = label?.toLowerCase();
  const formattedLabel = formatMessage({ id });
  const shouldRenderErrorRing = hasError && !value.length;

  return (
    <div className='mb-6'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={formattedLabel}
      >
        {formattedLabel}
      </label>
      <textarea
        className={`block w-full text-black rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md ${
          shouldRenderErrorRing
            ? "border-4 border-solid border-red-500"
            : "focus:ring-2 focus:ring-yellow-400 shadow-md"
        }`}
        id={formattedLabel}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
