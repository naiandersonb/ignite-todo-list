import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import styles from './Checkbox.module.css';

type CheckboxProps = {
  setChecked: (args: boolean) => void;
  isChecked: boolean;
}
export function Checkbox({ isChecked, setChecked }: CheckboxProps) {

  const [value, setValue] = useState(false);

  function handleCheck() {
    setChecked(!isChecked);
  }

  return (
    <div
      onClick={handleCheck}
      className={isChecked ? styles.checked : styles.noChecked}
    >
      <Check size={10} style={{ display: !isChecked ? 'none' : 'initial' }} />
    </div>
  )
}