import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';


const Input = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.initValue);
  }, [props]);

  const onValueChange = (e) => {
    setValue(e.target.value);

    props.onChange(e.target.value);
  }

  return (
    <div className={styles.inputContainer}>
      {props.labelText && <label htmlFor="">{props.labelText}</label>}

      <input
        value={value}
        type={props.type}
        onChange={onValueChange}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
      />

      {props.errorText && <span>{props.errorText}</span>}
    </div>
  );
};

export default Input;