import { useReducer } from "react";
import Dropdown from "../../atoms/Dropdown";
import {
  occasionOptions,
  desiredEffectsOptions,
  scentTypeOptions,
  personalityOptions,
  skinTypeOptions,
  sillageOptions,
  climateOptions,
} from "../../atoms/Dropdown/options";
import TextArea from "../../atoms/TextArea";
import reducer, { initialState } from "./reducer";

function Form() {
  const [
    {
      desiredEffect,
      scentType,
      personality,
      previousExperiences,
      dislikedNotes,
      skinType,
      climate,
      silliage,
      occasion,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <form className='w-full max-w-md'>
      <Dropdown
        options={occasionOptions}
        onChange={(event) =>
          dispatch({ type: "UPDATE_OCCASION", payload: event.target.value })
        }
        value={occasion}
        label='Occasion'
      />
      <Dropdown
        options={desiredEffectsOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_DESIRED_EFFECT",
            payload: event.target.value,
          })
        }
        value={desiredEffect}
        label='Desired Effect'
      />
      <Dropdown
        options={scentTypeOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SCENT_TYPE",
            payload: event.target.value,
          })
        }
        value={scentType}
        label='Scent Type'
      />
      <Dropdown
        options={skinTypeOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SKIN_TYPE",
            payload: event.target.value,
          })
        }
        value={skinType}
        label='Skin Type'
      />
      <Dropdown
        options={personalityOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_PERSONALITY",
            payload: event.target.value,
          })
        }
        value={personality}
        label='Personality'
      />
      <Dropdown
        options={climateOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_CLIMATE",
            payload: event.target.value,
          })
        }
        value={climate}
        label='Climate'
      />
      <Dropdown
        options={sillageOptions}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SILLIAGE",
            payload: event.target.value,
          })
        }
        value={silliage}
        label='Sillage'
      />
      <TextArea
        label='Previous Experiences'
        value={previousExperiences}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_PREVIOUS_EXPERIENCES",
            payload: event.target.value,
          })
        }
      />
      <TextArea
        label='Disliked Notes'
        value={dislikedNotes}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_DISLIKED_NOTES",
            payload: event.target.value,
          })
        }
      />
    </form>
  );
}

export default Form;
