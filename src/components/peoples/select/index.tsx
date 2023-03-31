import { getOption } from '@/services/service';
import { IPeople } from '@/types/types';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './select.module.sass';

interface ISelect {
  name: string;
  param: string;
  peoplesData: IPeople[];
  onSelect: (value: string) => void;
}

const Select = ({ onSelect, peoplesData, name, param }: ISelect) => {
  const [valueSelect, setValueSelect] = useState('all');

  useEffect(() => {
    onSelect(valueSelect);
  }, [valueSelect]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(event.target.value);
  };

  const options = getOption(peoplesData, param);

  return (
    <label className={styles.label}>
      <span> {name} </span>
      <select name="eye" value={valueSelect} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
