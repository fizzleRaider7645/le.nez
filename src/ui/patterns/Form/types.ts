export interface FormState {
    occasion: string;
    desiredEffect: string;
    scentType: string;
    scentNotes: string[];
    personality: string;
    previousExperiences: string;
    dislikedNotes: string;
    skinType: string;
    climate: string;
    silliage: string;
}


export type FormActionType = 'UPDATE_OCCASION' | 'UPDATE_DESIRED_EFFECT' | 'UPDATE_SCENT_TYPE' | 'UPDATE_SCENT_NOTES' | 'UPDATE_PERSONALITY' | 'UPDATE_PREVIOUS_EXPERIENCES' | 'UPDATE_DISLIKED_NOTES' | 'UPDATE_SKIN_TYPE' | 'UPDATE_CLIMATE' | 'UPDATE_SILLIAGE'

export interface FormArrowProps {
    directionOverride?: 'right' | 'left'
    step: number;
    steps: JSX.Element[];
}
