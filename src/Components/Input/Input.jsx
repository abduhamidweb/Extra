import React from 'react';
import "./style.scss"
const Input = ({ type, text, id, inputClass, plece, val, setValue, minNumb, maxNumb }) => {
    
    return (
      <>
            <label htmlFor={id}>
                {
                    text
                }
        </label>
            <input type={type} id={id} className={inputClass} placeholder={plece} value={val} onChange={(e) => { setValue(e.target.value) }}  min={minNumb} max={maxNumb}/>
      </>
    );
};

export default Input;