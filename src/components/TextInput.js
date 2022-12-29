import React from "react";

const TextInput = (props) => {
  const {
    id,
    value,
    type,
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
        name={value}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
