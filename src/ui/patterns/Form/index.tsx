import { createContext, useReducer, useState } from "react";
import DragAndDrop from "../DragAndDrop";
import reducer, { initialState } from "./reducer";
import { SelectionInputs, TextInputs } from "./subomponents";
import { FormActionType, FormState } from "./types";

export const FormContext = createContext<{
  formState: FormState;
  dispatch: React.Dispatch<{
    type: FormActionType;
    payload?: any;
  }>;
}>({
  formState: initialState,
  dispatch: () => {},
});

function Form() {
  const steps = [<SelectionInputs />, <TextInputs />, <DragAndDrop />];
  const [step, setStep] = useState<number>(0);
  const [formState, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      <form className='w-full max-w-md'>
        {steps[step]}
        <button
          onClick={(event) => {
            event.preventDefault();
            setStep((step + 1) % steps.length);
          }}
        >
          Click
        </button>
      </form>
    </FormContext.Provider>
  );
}

export default Form;
