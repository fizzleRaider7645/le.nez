import { FormAction, FormState, FormStateToValidate } from "./types";


const keysForCurrentStep = (step: number, steps: JSX.Element[]): string[] => {
    const inputKey = steps[step].key
    // need to move to a const
    const inputKeyValues = {selectionInputs: ['occasion', 'desiredEffect', 'scentType','personality','skinType','climate','silliage'], testInputs: ['dislikedNotes', 'previousExperiences'], dragAndDropInput: ['scentNotes']}

    return inputKeyValues[inputKey as keyof typeof inputKeyValues]
}

export const validateForm = (formState: FormState, step: number, steps: JSX.Element[], dispatch: React.Dispatch<FormAction>) => {
    const result = keysForCurrentStep(step, steps).every((key) => {
        const element = formState[key as keyof FormStateToValidate]
        return element.length
    });

    if(!result) {
        dispatch({type: 'UPDATE_FORM_HAS_ERROR', payload: true})
    }

    return result
}
