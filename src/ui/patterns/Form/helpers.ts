import { FormState } from "./types";


const keysForCurrentStep = (step: number, steps: JSX.Element[]): string[] => {
    const inputKey = steps[step].key
    const inputKeyValues = {selectionInputs: ['occasion', 'desiredEffect', 'scentType','personality','skinType','climate','silliage'], testInputs: ['dislikedNotes', 'previousExperiences'], dragAndDropInput: ['scentNotes']}

    return inputKeyValues[inputKey as keyof typeof inputKeyValues]
}

export const validateForm = (formState: FormState, step: number, steps: JSX.Element[]) => {
    const result = keysForCurrentStep(step, steps).every((key) => {
        const element = formState[key as keyof FormState]
        return element.length
    });

    if(!result) {
        alert('Please complete remaining feilds')
    }

    return result
}
