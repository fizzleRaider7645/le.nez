import { useState } from "react";
import Dropdown from "../../atoms/Dropdown";
import {
  occasionOptions,
  desiredEffectsOptions,
} from "../../atoms/Dropdown/options";

function Form() {
  const [occasion, setOccasion] = useState("");
  const [desiredEffect, setDesiredEffect] = useState("");

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
    </form>
  );
}

export default Form;
