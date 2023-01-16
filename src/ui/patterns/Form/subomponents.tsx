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
import { FormActionType } from "./types";

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

  const handleOnChange = (
    actionType: FormActionType,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch({ type: "UPDATE_FORM_HAS_ERROR", payload: false });
    if (event) {
      const value = event?.target?.value;
      dispatch({ type: actionType, payload: value });
    }
  };

  return (
    <>
      <Dropdown
        options={occasionOptions}
        onChange={(event) => handleOnChange("UPDATE_OCCASION", event)}
        value={occasion}
        label='Occasion'
      />
      <Dropdown
        options={desiredEffectsOptions}
        onChange={(event) => handleOnChange("UPDATE_DESIRED_EFFECT", event)}
        value={desiredEffect}
        label='Desired Effect'
      />
      <Dropdown
        options={scentTypeOptions}
        onChange={(event) => handleOnChange("UPDATE_SCENT_TYPE", event)}
        value={scentType}
        label='Scent Type'
      />
      <Dropdown
        options={skinTypeOptions}
        onChange={(event) => handleOnChange("UPDATE_SKIN_TYPE", event)}
        value={skinType}
        label='Skin Type'
      />
      <Dropdown
        options={personalityOptions}
        onChange={(event) => handleOnChange("UPDATE_PERSONALITY", event)}
        value={personality}
        label='Personality'
      />
      <Dropdown
        options={climateOptions}
        onChange={(event) => handleOnChange("UPDATE_CLIMATE", event)}
        value={climate}
        label='Climate'
      />
      <Dropdown
        options={sillageOptions}
        onChange={(event) => handleOnChange("UPDATE_SILLIAGE", event)}
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
