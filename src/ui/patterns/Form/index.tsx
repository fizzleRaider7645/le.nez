import { createContext, useReducer, useState } from "react";
import DragAndDrop from "../DragAndDrop";
import reducer, { initialState } from "./reducer";
import { SelectionInputs, TextInputs } from "./subomponents";
import { FormActionType, FormArrowProps, FormState } from "./types";

export const FormContext = createContext<{
  formState: FormState;
  dispatch: React.Dispatch<{
    type: FormActionType;
    payload: string;
  }>;
}>({
  formState: initialState,
  dispatch: () => {},
});

const Arrow = ({ directionOverride, step, steps }: FormArrowProps) => {
  const isLastStep = step === steps.length - 1;
  const directions = { left: 270, right: 90 };
  const directionToUse = directionOverride
    ? directions[directionOverride]
    : isLastStep
    ? directions.left
    : directions.right;

  return (
    <div>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        transform={`rotate(${directionToUse})`}
      >
        <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' />
      </svg>
    </div>
  );
};

function Form() {
  const steps = [<SelectionInputs />, <TextInputs />, <DragAndDrop />];
  const [step, setStep] = useState<number>(0);
  const [formState, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      <form className='w-full flex'>
        <div className='flex-1'>{steps[step]}</div>
        {step === 0 || step === steps.length - 1 ? (
          <button
            className='ml-5 w-15 rounded-full bg-transparent shadow-xl focus:outline-none'
            onClick={(event) => {
              event.preventDefault();
              setStep((step + 1) % steps.length);
            }}
          >
            <Arrow step={step} steps={steps} />
          </button>
        ) : (
          <>
            <button
              className='ml-5 w-15 rounded-full bg-transparent shadow-xl focus:outline-none'
              onClick={(event) => {
                event.preventDefault();
                setStep((step + 1) % steps.length);
              }}
            >
              <Arrow directionOverride='left' step={step} steps={steps} />
            </button>
            <button
              className='ml-5 w-15 rounded-full bg-transparent shadow-xl focus:outline-none'
              onClick={(event) => {
                event.preventDefault();
                setStep((step + 1) % steps.length);
              }}
            >
              <Arrow directionOverride='right' step={step} steps={steps} />
            </button>
          </>
        )}
      </form>
    </FormContext.Provider>
  );
}

export default Form;
