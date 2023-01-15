import { useContext } from "react";
import { FormContext } from ".";
import Dropdown from "../../atoms/Dropdown";
import {
  climateOptions,
  desiredEffectsOptions,
  occasionOptions,
  personalityOptions,
  scentTypeOptions,
  sillageOptions,
  skinTypeOptions,
} from "../../atoms/Dropdown/options";
import TextArea from "../../atoms/TextArea";

export function SelectionInputs() {
  const {
    formState: {
      desiredEffect,
      scentType,
      personality,
      skinType,
      climate,
      silliage,
      occasion,
    },
    dispatch,
  } = useContext(FormContext);
  return (
    <>
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
    </>
  );
}

export function TextInputs() {
  const {
    formState: { previousExperiences, dislikedNotes },
    dispatch,
  } = useContext(FormContext);

  return (
    <>
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
    </>
  );
}
