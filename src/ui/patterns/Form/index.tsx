import { useState } from "react";
import Dropdown from "../../atoms/Dropdown";
import {
  occasionOptions,
  desiredEffectsOptions,
  scentTypeOptions,
  personalityOptions,
} from "../../atoms/Dropdown/options";
import Textfield from "../../atoms/Textfield";

function Form() {
  const [occasion, setOccasion] = useState<string>("");
  const [desiredEffect, setDesiredEffect] = useState<string>("");
  const [scentType, setScentType] = useState<string>("");
  const [personality, setPersonality] = useState<string>("");
  const [previousExperiences, setPreviousExperiences] = useState<string[]>([]);
  const [dislikedNotes, setDislikedNotes] = useState<string[]>([]);
  const [skinType, setSkinType] = useState("");

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
        options={personalityOptions}
        onChange={(event) => setPersonality(event.target.value)}
        value={personality}
        label='Personality'
      />
      <Textfield
        label='Previous Experiences'
        value={previousExperiences}
        onChange={(event) =>
          setPreviousExperiences(event.target.value.split(", "))
        }
      />
      <Textfield
        label='Disliked Notes'
        value={dislikedNotes}
        onChange={(event) => setDislikedNotes(event.target.value.split(", "))}
      />
    </form>
  );
}

export default Form;
