import { FormAction, FormState } from "./types";


const keysForCurrentStep = (step: number, steps: JSX.Element[]): string[] => {
    const inputKey = steps[step].key
    const inputKeyValues = {selectionInputs: ['occasion', 'desiredEffect', 'scentType','personality','skinType','climate','silliage'], testInputs: ['dislikedNotes', 'previousExperiences'], dragAndDropInput: ['scentNotes']}

    return inputKeyValues[inputKey as keyof typeof inputKeyValues]
}

export const validateForm = (formState: FormState, step: number, steps: JSX.Element[], dispatch: React.Dispatch<FormAction>) => {
    const result = keysForCurrentStep(step, steps).every((key) => {
        const element = formState[key as keyof FormState]
        return (element === 'string' || Array.isArray(element)) && element.length
    });

    if(!result) {
        alert('Please complete all feilds')
        dispatch({type: 'UPDATE_FORM_HAS_ERROR', payload: true})
    }

    return result
}
