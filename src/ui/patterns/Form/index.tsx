import { createContext, useReducer, useState } from "react";
import DragAndDrop from "../DragAndDrop";
import { validateForm } from "./helpers";
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
        className='opacity-30'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        transform={`scale(2) rotate(${directionToUse})`}
      >
        <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' />
      </svg>
    </div>
  );
};

function Form() {
  const steps = [
    <SelectionInputs key='selectionInputs' />,
    <TextInputs key='testInputs' />,
    <DragAndDrop key='dragAndDropInput' />,
  ];
  const [step, setStep] = useState<number>(0);
  const [formState, dispatch] = useReducer(reducer, initialState);
  const isLastStep = step === steps.length - 1;

  const shouldRenderOneArrowButton = step === 0 || isLastStep;

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      <form className='w-full flex'>
        <div className='flex-1'>{steps[step]}</div>
        {shouldRenderOneArrowButton ? (
          <button
            className='ml-5 w-15 rounded-full bg-transparent focus:outline-none'
            onClick={(event) => {
              event.preventDefault();
              if (validateForm(formState, step, steps)) {
                const newStep = isLastStep ? step - 1 : step + 1;
                setStep(newStep % steps.length);
              }
            }}
          >
            <Arrow step={step} steps={steps} />
          </button>
        ) : (
          <>
            <button
              className='ml-5 w-15 rounded-full bg-transparent focus:outline-none'
              onClick={(event) => {
                event.preventDefault();
                if (validateForm(formState, step, steps)) {
                  setStep((step - 1) % steps.length);
                }
              }}
            >
              <Arrow directionOverride='left' step={step} steps={steps} />
            </button>
            <button
              className='ml-5 w-15 rounded-full bg-transparent focus:outline-none'
              onClick={(event) => {
                event.preventDefault();
                if (validateForm(formState, step, steps)) {
                  setStep((step + 1) % steps.length);
                }
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
