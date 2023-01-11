import { useState } from "react";
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

function Form() {
  const [occasion, setOccasion] = useState<string>("");
  const [desiredEffect, setDesiredEffect] = useState<string>("");
  const [scentType, setScentType] = useState<string>("");
  const [personality, setPersonality] = useState<string>("");
  const [previousExperiences, setPreviousExperiences] = useState<string[]>([]);
  const [dislikedNotes, setDislikedNotes] = useState<string[]>([]);
  const [skinType, setSkinType] = useState("");
  const [climate, setClimate] = useState("");
  const [silliage, setSilliage] = useState("");

  return (
    <form className='w-full max-w-md'>
      <Dropdown
        options={occasionOptions}
        onChange={(event) => setOccasion(event.target.value)}
        value={occasion}
        label='Occasion'
      />
      <Dropdown
        options={desiredEffectsOptions}
        onChange={(event) => setDesiredEffect(event.target.value)}
        value={desiredEffect}
        label='Desired Effect'
      />
      <Dropdown
        options={scentTypeOptions}
        onChange={(event) => setScentType(event.target.value)}
        value={scentType}
        label='Scent Type'
      />
      <Dropdown
        options={skinTypeOptions}
        onChange={(event) => setSkinType(event.target.value)}
        value={skinType}
        label='Skin Type'
      />
      <Dropdown
        options={personalityOptions}
        onChange={(event) => setPersonality(event.target.value)}
        value={personality}
        label='Personality'
      />
      <Dropdown
        options={climateOptions}
        onChange={(event) => setClimate(event.target.value)}
        value={climate}
        label='Climate'
      />
      <Dropdown
        options={sillageOptions}
        onChange={(event) => setSilliage(event.target.value)}
        value={silliage}
        label='Sillage'
      />
      <TextArea
        label='Previous Experiences'
        value={previousExperiences}
        onChange={(event) =>
          setPreviousExperiences(event.target.value.split(", "))
        }
      />
      <TextArea
        label='Disliked Notes'
        value={dislikedNotes}
        onChange={(event) => setDislikedNotes(event.target.value.split(", "))}
      />
    </form>
  );
}

export default Form;
