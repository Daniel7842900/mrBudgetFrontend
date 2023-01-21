import React from "react";

const TextInput = (props) => {
  const {
    id,
    name,
    type,
    value,
    onChange,
    autoComplete,
    lable,
    placeholder,
    className,
    required,
  } = props;

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {lable}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
