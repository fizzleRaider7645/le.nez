import { FormState, FormAction } from "./types";

export const initialState: FormState = {
  occasion: "",
  desiredEffect: "",
  scentType: "",
  scentNotes: [],
  personality: "",
  previousExperiences: "",
  dislikedNotes: "",
  skinType: "",
  climate: "",
  silliage: "",
  hasError: false
};

function reducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "UPDATE_OCCASION":
      return { ...state, occasion: action.payload, hasError: false };
    case "UPDATE_DESIRED_EFFECT":
      return { ...state, desiredEffect: action.payload, hasError: false };
    case "UPDATE_PERSONALITY":
      return { ...state, personality: action.payload, hasError: false };
    case "UPDATE_DISLIKED_NOTES":
      return {
        ...state,
        dislikedNotes: action.payload, hasError: false
      };
    case "UPDATE_CLIMATE":
      return { ...state, climate: action.payload, hasError: false };
    case "UPDATE_SCENT_NOTES":
      return { ...state, scentNotes: action.payload, hasError: false };
    case "UPDATE_SILLIAGE":
      return { ...state, silliage: action.payload, hasError: false };
    case "UPDATE_SCENT_TYPE":
      return { ...state, scentType: action.payload, hasError: false };
    case "UPDATE_PREVIOUS_EXPERIENCES":
      return {
        ...state,
        previousExperiences: action.payload, hasError: false
      };
    case "UPDATE_SKIN_TYPE":
      return { ...state, skinType: action.payload, hasError: false };
      case "UPDATE_FORM_HAS_ERROR":
        return {...state, hasError: action.payload}
    default:
      throw new Error();
  }
}

export default reducer